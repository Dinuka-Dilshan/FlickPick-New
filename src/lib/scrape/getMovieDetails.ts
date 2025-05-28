import { MIMIC_HEADERS } from "@/lib/scrape/constants";
import { getImageURL } from "@/lib/scrape/utils";
import { load } from "cheerio";
import { cache } from "react";

type AboveTheFoldData = {
  principalCredits?: Array<{
    totalCredits: number;
    category: {
      text: string;
      id: string;
      __typename: "CreditCategory";
    };
    credits: Array<{
      name: {
        nameText: {
          text: string;
          __typename: "NameText";
        };
        id: string;
        __typename: "Name";
      };
      attributes: unknown | null;
      __typename: "Crew" | "Cast";
    }>;
    __typename: "PrincipalCreditsForCategory";
  }>;
  titleText?: {
    text: string;
  };
  ratingsSummary?: {
    aggregateRating: number;
    voteCount: number;
  };
  releaseYear?: {
    year: number;
  };
  certificate?: {
    rating: string;
  };
  runtime?: {
    displayableProperty?: {
      value?: {
        plainText: string;
      };
    };
    seconds: number;
  };
  primaryImage?: {
    url: string;
  };
  primaryVideos?: {
    edges: Array<{
      node?: {
        playbackURLs?: Array<{
          url: string;
        }>;
      };
    }>;
  };
  genres?: {
    genres: Array<{
      text: string;
    }>;
  };
  plot?: {
    plotText?: {
      plainText: string;
    };
  };
  releaseDate?: {
    year: number;
    month: number;
    day: number;
  };
  meterRanking?: {
    currentRank: number;
    rankChange?: {
      changeDirection: "UP" | "DOWN" | "FLAT";
      difference: number;
    };
  };
  titleType?: {
    text?: string;
    displayableProperty?: {
      value?: {
        plainText: string;
      };
    };
    isSeries: boolean;
  };
  meta?: {
    publicationStatus: string;
  };
  countriesOfOrigin?: {
    countries: Array<{
      id: string;
    }>;
  };
  creatorsPageTitle?: Array<{
    credits: Array<{
      name: {
        nameText: {
          text: string;
        };
      };
    }>;
  }>;
};

type MainColumnData = {
  moreLikeThisTitles?: {
    edges: Array<{
      node: {
        id: string;
        titleText: {
          text: string;
        };
        titleType: {
          text: string;
        };
        primaryImage?: {
          url: string;
        };
        releaseYear: {
          year: number;
        };
      };
    }>;
  };
  cast?: {
    edges: Array<{
      node: {
        name: {
          id: string;
          nameText: {
            text: string;
          };
          primaryImage?: {
            url: string;
          };
        };
      };
    }>;
  };
  episodes?: {
    totalEpisodes?: {
      total: number;
    };
    seasons?: Array<unknown>; // Length will be used
  } | null;
  titleMainImages?: {
    edges: Array<{
      node: {
        url: string;
      };
    }>;
  };
};

export const getMovieDetails = cache(async (id: string) => {
  const response = await fetch(`https://www.imdb.com/title/${id}`, {
    headers: MIMIC_HEADERS,
  });

  const responseText = await response.text();
  const cheerioHtmlTree = load(responseText);
  const nextDataScript = cheerioHtmlTree("#__NEXT_DATA__").html();

  if (!nextDataScript) {
    throw new Error("Unknown server error");
  }

  const nextDataScriptParsed = JSON.parse(nextDataScript);
  console.log(nextDataScriptParsed);

  const aboveTheFoldData = nextDataScriptParsed?.props?.pageProps
    ?.aboveTheFoldData as AboveTheFoldData;
  const mainColumnData = nextDataScriptParsed?.props?.pageProps
    ?.mainColumnData as MainColumnData;

  return {
    title: aboveTheFoldData?.titleText?.text,
    ratings: aboveTheFoldData?.ratingsSummary?.aggregateRating,
    voteCount: aboveTheFoldData?.ratingsSummary?.voteCount,
    releaseYear: aboveTheFoldData?.releaseYear?.year,
    certificate: aboveTheFoldData?.certificate?.rating,
    runtime: aboveTheFoldData?.runtime?.displayableProperty?.value?.plainText,
    runtimeSeconds: aboveTheFoldData?.runtime?.seconds,
    posterUrl: aboveTheFoldData?.primaryImage?.url,
    videoUrls: aboveTheFoldData?.primaryVideos?.edges?.map(
      (edge) => edge?.node?.playbackURLs?.[0]?.url
    ),
    genres: aboveTheFoldData?.genres?.genres?.map((genre) => genre?.text),
    plot: aboveTheFoldData?.plot?.plotText?.plainText,
    imdbId: id,
    releaseDate:
      aboveTheFoldData?.releaseDate?.year &&
      aboveTheFoldData?.releaseDate?.month &&
      aboveTheFoldData?.releaseDate?.day
        ? `${aboveTheFoldData?.releaseDate?.year}/${aboveTheFoldData?.releaseDate?.month}/${aboveTheFoldData?.releaseDate?.day}`
        : undefined,
    meterRanking: {
      currentRank: aboveTheFoldData?.meterRanking?.currentRank,
      rankChange: {
        changeDirection:
          aboveTheFoldData?.meterRanking?.rankChange?.changeDirection,
        difference: aboveTheFoldData?.meterRanking?.rankChange?.difference,
      },
    },
    titleType:
      aboveTheFoldData?.titleType?.text ||
      aboveTheFoldData?.titleType?.displayableProperty?.value?.plainText,
    isSeries: aboveTheFoldData?.titleType?.isSeries,
    publicationStatus: aboveTheFoldData?.meta?.publicationStatus,
    countriesOfOrigin: aboveTheFoldData?.countriesOfOrigin?.countries?.map(
      (i) => i?.id
    ),
    creators: aboveTheFoldData?.creatorsPageTitle?.flatMap((category) =>
      category?.credits?.map((credit) => credit?.name?.nameText?.text)
    ),
    moreLikeThis: mainColumnData?.moreLikeThisTitles?.edges
      ?.map((item) => ({
        posterUrl: getImageURL(item?.node.primaryImage?.url || "", 150),
        title: item?.node?.titleText?.text,
        releaseYear: item?.node?.releaseYear?.year,
        titleType: item?.node?.titleType?.text,
        imdbId: item?.node?.id,
      }))
      .filter((i) => i.posterUrl && i.title),
    cast: mainColumnData?.cast?.edges?.map((c) => ({
      id: c?.node?.name?.id,
      name: c?.node?.name?.nameText?.text,
      image: c?.node?.name?.primaryImage?.url,
    })),
    episodes: mainColumnData?.episodes?.totalEpisodes?.total,
    seasons: mainColumnData?.episodes?.seasons?.length,
    images: mainColumnData?.titleMainImages?.edges
      ?.slice(0, 10)
      ?.map((img) => img?.node?.url),
    credits: {
      directors: aboveTheFoldData.principalCredits
        ?.find((credit) => credit.category.text === "Director")
        ?.credits?.map((credit) => ({
          id: credit.name.id,
          name: credit.name.nameText.text,
        })),
      writers: aboveTheFoldData.principalCredits
        ?.find((credit) => credit.category.text === "Writers")
        ?.credits?.map((credit) => ({
          id: credit.name.id,
          name: credit.name.nameText.text,
        })),
    },
  };
});
