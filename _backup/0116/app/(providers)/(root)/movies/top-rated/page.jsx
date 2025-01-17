'use client';
import React, { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

function TopRatedMoviesPage() {
  const targetRef = useRef(null);
  const { data: movies, isLoading } = useQuery({
    queryFn: () => api.getMovieList('top_rated'),
    queryKey: ['movies', { category: 'top_rated' }],
    initialData: [],
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      console.log(entry.isIntersecting);
    });

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [movies]);

  if (isLoading) return 'Loading...';

  return (
    <main className='mx-auto max-w-screen-sm px-8'>
      <h1 className='text-3xl font-bold'>인기있는 영화목록</h1>

      <ol
        start={(1 - 1) * 10 + 1}
        className='mt-10 text-lg grid gap-y-5 list-decimal list-inside'
      >
        {movies.map((movie, index) => (
          <li
            ref={index === movies.length - 6 ? targetRef : undefined}
            key={movie.id}
          >
            {movie.title}
          </li>
        ))}
      </ol>
    </main>
  );
}

export default TopRatedMoviesPage;
