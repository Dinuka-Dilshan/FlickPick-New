import { Skeleton } from "@/components/ui/skeleton";

const LoadingMovieCard = () => {
  return (
    <div>
      <Skeleton className="w-full aspect-[2/3]  rounded-xl" />
      <Skeleton className="w-full h-10  mt-2 rounded-xl" />
    </div>
  );
};

export default LoadingMovieCard;
