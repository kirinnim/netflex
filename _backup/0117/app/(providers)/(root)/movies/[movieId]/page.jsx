import React from "react";
import api from "@/api";

async function MoviePage(props) {
  const params = await props.params;
  const movieId = params.movieId;
  const movie = await api.getMovie(movieId);

  return <MoviePage movieId={movieId} initialData={movie} />;
}

export default MoviePage;
