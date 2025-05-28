import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getMovieDetails } from "@/lib/scrape/getMovieDetails";
import Image from "next/image";

const Cast = async ({ id }: { id: string }) => {
  const { cast } = await getMovieDetails(id);
  return (
    <div>
      <h2 className="text-xl lg:text-3xl font-bold my-5">Top Cast</h2>
      <Carousel>
        <CarouselContent className="gap-10 lg:gap-0">
          {cast?.map((member) => (
            <CarouselItem key={member.id} className="basis-1/2 lg:basis-1/6">
              <div className="flex items-center justify-center flex-col gap-4 bg-card w-[200px] h-[200px] p-2 rounded-lg">
                <div className="relative w-5/6 h-5/6 rounded-full overflow-hidden">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      className="object-cover object-top"
                    />
                  )}
                </div>
                <p>{member.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Cast;
