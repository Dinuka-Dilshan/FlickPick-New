"use client";

import LoadingMovieCard from "@/modules/popular-movies/movie-card/loading-movie-card";
import { useLinkStatus } from "next/link";
import { PropsWithChildren } from "react";

const MovieCardLinkLoading = ({ children }: PropsWithChildren) => {
  const { pending } = useLinkStatus();

  if (pending) {
    return <LoadingMovieCard />;
  }

  return <>{children}</>;
};

export default MovieCardLinkLoading;
