import { getMovieDetails } from "@/lib/scrape/getMovieDetails";
import AppCarousel from "@/modules/movie-details/app-carousel";

const Cast = async ({ id }: { id: string }) => {
  const { cast } = await getMovieDetails(id);
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
