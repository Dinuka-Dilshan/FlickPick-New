import MovieList from "@/components/MovieList";
import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";

export const revalidate = 3600;

const Movies = async () => {
  const { movies } = await getPopularMoviesTvs("moviemeter");

  return <MovieList movies={movies} title={"Trending Movies"} />;
};

export default Movies;
