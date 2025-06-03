import { getPopularMoviesTvs } from "@/lib/scrape/getPopularMovies";
import MovieList from "@/modules/popular-movies/movie-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlickPick | Trending TVs",
  description: "Discover the most popular TV shows right now",
};

const TVs = async () => {
  const { movies } = await getPopularMoviesTvs("tvmeter");

  return <MovieList movies={movies} title={"Trending TVs"} type={"TV"} />;
};

export default TVs;
