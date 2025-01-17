'use client';

import React from 'react';
import MovieCard from './MovieCard';
import { kkubulim } from '@/assets/fonts';
import { useQuery } from '@tanstack/react-query';
import api from '@/api';

function MovieSection({ title, category, initialData }) {
  const { data: movies } = useQuery({
    queryFn: () => api.getMovieList(category),
    queryKey: ['movies', { category }],
    initialData,
  });
  return (
    <section className='[&+&]:mt-20'>
      <h2 className={`px-8 text-3xl font-bold mb-4 ${kkubulim.className}`}>
        {title}
      </h2>
      <ul className='px-8 flex gap-x-5 overflow-x-scroll'>
        {movies.map((movie) => (
          <li key={movie.id} className='shrink-0'>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieSection;
