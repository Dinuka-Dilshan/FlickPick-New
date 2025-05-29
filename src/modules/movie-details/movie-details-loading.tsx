import { Skeleton } from "@/components/ui/skeleton";
import DetailsWrapper from "@/modules/movie-details/details-wrapper";

const MovieDetailsLoading = () => {
  return (
    <main className="container mx-auto">
      <DetailsWrapper>
        <section className="flex flex-col lg:flex-row  gap-4 lg:gap-8 ">
          <div className="flex-col flex lg:hidden">
            <div>
              <Skeleton className="h-10 w-full mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-8 w-[80px] mb-1" />
                <Skeleton className="h-8 w-[80px] mb-1" />
                <Skeleton className="h-8 w-[80px] mb-1" />
                <Skeleton className="h-8 w-[80px] mb-1" />
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-fit lg:h-[500] aspect-[2/3] rounded-xl self-start ">
            <Skeleton className="absolute h-full w-full rounded-xl" />
          </div>
          <div className="flex-col hidden lg:flex">
            <div>
              <Skeleton className="h-10 w-[500px] mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-8 w-[80px] mb-1" />
                <Skeleton className="h-8 w-[80px] mb-1" />
                <Skeleton className="h-8 w-[80px] mb-1" />
                <Skeleton className="h-8 w-[80px] mb-1" />
              </div>
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-[80px] w-[80px] mb-1" />
                <Skeleton className="h-[80px] w-[80px] mb-1" />
                <Skeleton className="h-[80px] w-[80px] mb-1" />
              </div>
              <div className="flex  gap-2 mb-6">
                <Skeleton className="h-5 w-[50px] " />
                <Skeleton className="h-5 w-[50px] " />
                <Skeleton className="h-5 w-[50px] " />
              </div>
              <Skeleton className="h-8 w-[200px] mb-4" />
              <Skeleton className="h-20 w-full mb-4" />

              <div className="flex gap-2 mb-4">
                <Skeleton className="h-10 w-[130px] mb-1" />
                <Skeleton className="h-10 w-[130px] mb-1" />{" "}
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex gap-2 mb-4">
              <Skeleton className="h-[80px] w-[80px] mb-1" />
              <Skeleton className="h-[80px] w-[80px] mb-1" />
              <Skeleton className="h-[80px] w-[80px] mb-1" />
            </div>
            <div className="flex  gap-2 mb-6">
              <Skeleton className="h-5 w-[50px] " />
              <Skeleton className="h-5 w-[50px] " />
              <Skeleton className="h-5 w-[50px] " />
            </div>
            <Skeleton className="h-8 w-[200px] mb-4" />
            <Skeleton className="h-20 w-full mb-4" />

            <div className="flex gap-2 mb-4">
              <Skeleton className="h-10 w-[130px] mb-1" />
              <Skeleton className="h-10 w-[130px] mb-1" />{" "}
            </div>
          </div>
        </section>
        <section className="mt-8">
          <Skeleton className="h-8 w-[300px] mb-4" />
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 flex flex-col items-center"
              >
                <Skeleton className="aspect-square w-full mb-2 rounded-full" />
                <Skeleton className="h-6 w-[80%] mb-1" />
              </div>
            ))}
          </div>
          <div className="grid lg:hidden grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 flex flex-col items-center"
              >
                <Skeleton className="aspect-square w-full mb-2 rounded-full" />
                <Skeleton className="h-6 w-[80%] mb-1" />
              </div>
            ))}
          </div>
        </section>
      </DetailsWrapper>
    </main>
  );
};
export default MovieDetailsLoading;
