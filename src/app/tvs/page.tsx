import MovieList from "@/components/MovieList";
import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";

export const revalidate = 3600;

const TVs = async () => {
  const { movies } = await getPopularMoviesTvs("tvmeter");

  return <MovieList movies={movies} title={"Trending TVs"} />;
};

export default TVs;
