import { Skeleton } from "@/components/ui/skeleton";

const LoadingMovieCard = () => {
  return (
    <div>
      <Skeleton className="w-full aspect-[2/3] bg-[#18181b] rounded-xl" />
      <Skeleton className="w-full h-10 bg-[#18181b] mt-2 rounded-xl" />
    </div>
  );
};

export default LoadingMovieCard;
