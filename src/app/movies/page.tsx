import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";
import MovieList from "@/modules/popular-movies/movie-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlickPick | Trending Movies",
  description: "Discover the most popular movies right now",
};

const Movies = async () => {
  const { movies } = await getPopularMoviesTvs("moviemeter");

  return <MovieList movies={movies} title={"Trending Movies"} type={"Movie"} />;
};

export default Movies;
