import Cast from "@/modules/movie-details/cast";
import HeroSection from "@/modules/movie-details/hero-section";
import MoreLikeThis from "@/modules/movie-details/more-like-this";

const Movie = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <main className="mx-5 xl:mx-20 min-h-[92vh] flex-col flex justify-center py-5 lg:py-10">
      <HeroSection id={id} />
      <Cast id={id} />
      <MoreLikeThis id={id} />
    </main>
  );
};

export default Movie;
