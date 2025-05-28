import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";
import MovieList from "@/modules/popular-movies/movie-list";

export const revalidate = 3600;

const Movies = async () => {
  const { movies } = await getPopularMoviesTvs("moviemeter");

  return <MovieList movies={movies} title={"Trending Movies"} type={"Movie"} />;
};

export default Movies;
