"use client";

import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import MovieComments from "../(providers)/(root)/movies/[movieId]/_components/MovieComments";
import LikeButton from "../(providers)/(root)/movies/[movieId]/_components/LikeButton";
import Genre from "../(providers)/(root)/movies/[movieId]/_components/Genre";
import Rating from "../(providers)/(root)/movies/[movieId]/_components/Rating";

function MoviePage({ movieId, initialData }) {
  const { data: movie } = useQuery({
    queryFn: () => api.getMovie(movieId),
    queryKey: ["movie", { movieId }],
    initialData,
  });

  const rating = Number(movie.vote_average.toFixed(1));

  return (
    <main className="py-10">
      <div className="fixed left-0 right-0 top-0 bottom-0 -z-10 blur-2xl">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          fill
          className="object-cover"
          alt={movie.title}
        />
      </div>
      {/* 콘텐츠 영역 */}
      <div className="w-full max-w-screen-lg mx-auto flex gap-x-10 py-20 px-8">
        {/* 왼쪽 */}
        <div className="w-60 shrink-0">
          {/* 포스터 이미지 */}
          <Image
            alt={movie.title}
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            width={240}
            height={350}
          />
        </div>
        {/* 오른쪽 */}
        <div>
          {/* 제목 */}
          <h1 className="text-4xl font-bold mb-8">{movie.title}</h1>

          {/* 별점 */}
          <div className="mb-4">
            <Rating rating={rating} />
          </div>

          {/* 장르 */}
          <ul className="flex gap-x-2.5 mb-4">
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <Genre genre={genre} />
              </li>
            ))}
          </ul>

          {/* 스토리 개괄 */}
          <p className="">{movie.overview}</p>

          <LikeButton />
        </div>
      </div>
      <MovieComments />
    </main>
  );
}

export default MoviePage;
