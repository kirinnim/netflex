'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Button from '@/components/Button';
import { useState } from 'react';

function PopularMoviesPage() {
  const [page, setPage] = useState(1);

  const { data: movies, isLoading } = useQuery({
    queryFn: () => api.getMovieList('popular', page),
    queryKey: ['movies', { category: 'popular', page }],
    initialData: [],
  });

  if (isLoading) return <div>Loading...</div>;

  const handleClickPrevPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };
  const handleClickNextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className='mx-auto max-w-screen-sm px-8'>
      <h1 className='text-3xl font-bold'>인기있는 영화목록</h1>
      <div className='mt-10 flex gap-x-5'>
        <Button onClick={handleClickPrevPage} intent='white'>
          이전 페이지
        </Button>
        <Button onClick={handleClickNextPage} intent='primary'>
          다음 페이지
        </Button>
      </div>
      <div className='mt-10'>{page}페이지</div>

      <ol
        start={(page - 1) * 10 + 1}
        className='mt-10 text-lg grid gap-y-5 list-decimal list-inside'
      >
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default PopularMoviesPage;
