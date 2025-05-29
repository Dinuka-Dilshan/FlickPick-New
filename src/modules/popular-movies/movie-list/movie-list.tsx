import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";
import MovieCard from "@/modules/popular-movies/movie-card";

type Props = {
  movies: Awaited<ReturnType<typeof getPopularMoviesTvs>>["movies"];
  title: string;
  type: "Movie" | "TV";
};

const MovieList = ({ movies, title, type }: Props) => {
  return (
    <>
      <h1 className="text-xl text-[#EFEFEF] font-bold pt-5">{title}</h1>
      <div className="mt-5 grid grid-cols-2   md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-5">
        {movies?.map((movie) => (
          <MovieCard type={type} key={movie.imdbId} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
