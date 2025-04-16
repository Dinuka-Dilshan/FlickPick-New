import MovieCard from "@/components/MovieCard";
import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";

type Props = {
  movies: Awaited<ReturnType<typeof getPopularMoviesTvs>>["movies"];
  title: string;
};

const MovieList = ({ movies, title }: Props) => {
  return (
    <main className="mx-5 xl:mx-20 py-5">
      <h1 className="text-xl text-[#EFEFEF] font-bold">{title}</h1>
      <div className="mt-5 grid grid-cols-2   md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbId} {...movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;
