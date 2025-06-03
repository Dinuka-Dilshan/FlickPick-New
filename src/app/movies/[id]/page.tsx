import { getMovieDetails } from "@/lib/scrape/getMovieDetails";
import Cast from "@/modules/movie-details/cast";
import DetailsWrapper from "@/modules/movie-details/details-wrapper";
import HeroSection from "@/modules/movie-details/hero-section";
import MoreLikeThis from "@/modules/movie-details/more-like-this";
import Trailer from "@/modules/movie-details/trailer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title } = await getMovieDetails(id);

  return {
    title: `FlickPick | ${title}`,
  };
}

const Movie = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <DetailsWrapper>
      <HeroSection id={id} />
      <Cast id={id} />
      <Trailer id={id} />
      <MoreLikeThis id={id} />
    </DetailsWrapper>
  );
};

export default Movie;
