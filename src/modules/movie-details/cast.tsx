import { Movie } from "@/lib/scrape/getMovieDetails";
import AppCarousel from "@/modules/movie-details/app-carousel";

const Cast = async ({ movie }: { movie: Movie }) => {
  const { cast } = movie;
  return (
    <AppCarousel
      items={cast?.map((member) => ({
        id: member.id,
        name: member.name,
        image: member.image,
        variant: "Person",
      }))}
      title="Top Cast"
      imageVarient="rounded"
    />
  );
};

export default Cast;
