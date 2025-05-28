import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";
import MovieList from "@/modules/popular-movies/movie-list";

export const revalidate = 3600;

const TVs = async () => {
  const { movies } = await getPopularMoviesTvs("tvmeter");

  return <MovieList movies={movies} title={"Trending TVs"} type={"TV"} />;
};

export default TVs;
