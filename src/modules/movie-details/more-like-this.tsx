import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getMovieDetails } from "@/lib/scrape/getMovieDetails";
import Image from "next/image";

const MoreLikeThis = async ({ id }: { id: string }) => {
  const { moreLikeThis } = await getMovieDetails(id);
  return (
    <div>
      <h2 className="text-xl lg:text-3xl font-bold my-5">More Like This</h2>
      <Carousel>
        <CarouselContent className="gap-10 lg:gap-0">
          {moreLikeThis?.map((movie) => (
            <CarouselItem key={movie.imdbId} className="basis-1/2 lg:basis-1/6">
              <div className="flex  flex-col gap-4 bg-card w-[200px] h-[300px] p-3 rounded-lg">
                <div className="relative h-[250px] w-full rounded-md overflow-hidden">
                  {movie.posterUrl && (
                    <Image
                      src={movie.posterUrl}
                      alt={movie.title}
                      layout="fill"
                      className="object-cover object-top"
                    />
                  )}
                </div>
                <p className="">
                  {movie.title.slice(0, 20)}
                  {movie.title.length > 20 ? "..." : ""}
                </p>
                <p className="text-sm ">{movie.releaseYear}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MoreLikeThis;
