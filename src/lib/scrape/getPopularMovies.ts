
import { MIMIC_HEADERS } from "@/lib/scrape/constants";
import { getImageURL } from "@/lib/scrape/utils";
import { load } from "cheerio";

export const getPopularMoviesTvs = async (
  varient: "moviemeter" | "tvmeter"
) => {
  const response = await fetch(`https://www.imdb.com/chart/${varient}`, {
    headers: MIMIC_HEADERS,
  });
  const responseText = await response.text();
  const cheerioHtmlTree = load(responseText);

  const nextDataScript = cheerioHtmlTree("#__NEXT_DATA__").html();

  if (!nextDataScript) {
    throw new Error("Unknown server error");
  }

  const nextDataScriptParsed = JSON.parse(nextDataScript);

  const parsed =
    nextDataScriptParsed?.props?.pageProps?.pageData?.chartTitles?.edges;

  const movieDataWithPoster = parsed.map(
    (edge: {
      node?: {
        id: string;
        titleText?: { text: string };
        releaseYear?: { year: number };
        primaryImage?: { url: string };
        meterRanking?: {
          currentRank: number;
          rankChange: {
            changeDirection: string;
            difference: number;
          };
        };
        ratingsSummary: {
          aggregateRating: number;
          voteCount: number;
        };
      };
    }) => {
      const node = edge.node;

      return {
        imdbId: node?.id,
        title: node?.titleText?.text,
        releaseYear: node?.releaseYear?.year,
        posterUrl: getImageURL(node?.primaryImage?.url ?? ""),
        rank: node?.meterRanking?.currentRank,
        rating: node?.ratingsSummary?.aggregateRating,
        voteCount: Intl.NumberFormat("en", {
          notation: "compact",
        }).format(Number(node?.ratingsSummary?.voteCount || 0)),
        rankChange: node?.meterRanking?.rankChange,
        changeDirection: node?.meterRanking?.rankChange?.changeDirection,
        difference: node?.meterRanking?.rankChange?.difference,
      };
    }
  );

  return {
    movies: movieDataWithPoster as {
      imdbId: string;
      title: string;
      releaseYear: number;
      posterUrl: string;
      rank: number;
      rating: number;
      voteCount: number;
      rankChange: {
        changeDirection: "UP" | "DOWN" | "FLAT";
        difference: number;
      };
      changeDirection: "UP" | "DOWN" | "FLAT";
      difference: number;
    }[],
  };
};
