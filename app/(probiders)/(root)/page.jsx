import MovieSection from './_components/MovieSection';
import api from '@/api';

async function HomePage() {
  const nowPlayingMoviesPromise = await api.getMovieList('now_playing');
  const popularMoviesPromise = await api.getMovieList('popular');
  const topRatedMoviesPromise = await api.getMovieList('top_rated');
  const upcomingMoviesPromise = await api.getMovieList('upcoming');

  //병렬적인 통신중인 모든 호출이 완료가 되면 , 결과값이 정리 되어 나옴
  const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
    await Promise.all([
      nowPlayingMoviesPromise,
      popularMoviesPromise,
      topRatedMoviesPromise,
      upcomingMoviesPromise,
    ]);

  return (
    <main className='py-10'>
      <MovieSection title='현재 상영중인 영화' movies={nowPlayingMovies} />
      <MovieSection title='별점이 높은 영화' movies={popularMovies} />
      <MovieSection title='당신이 좋아할 영화' movies={topRatedMovies} />
      <MovieSection title='겨울에 어울리는 영화' movies={upcomingMovies} />
    </main>
  );
}

export default HomePage;