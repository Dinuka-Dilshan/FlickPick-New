import LoadingMovieCard from "@/modules/popular-movies/movie-card/loading-movie-card";

type Props = {
  title: string;
};

const MovieListLoading = ({ title }: Props) => {
  return (
    <main className="mx-0 py-5">
      <h1 className="text-xl text-[#EFEFEF] font-bold">{title}</h1>
      <div className="mt-5 grid grid-cols-2   md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {[...Array(10)].map((_, index) => (
          <LoadingMovieCard key={index} />
        ))}
      </div>
    </main>
  );
};

export default MovieListLoading;
