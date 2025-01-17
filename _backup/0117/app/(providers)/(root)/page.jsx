import MovieSection from './_components/MovieSection';
import api from '../../../api';
import { useQueries, useQuery } from '@tanstack/react-query';

async function HomePage() {
  // const [
  //   { data: nowPlayingMovies },
  //   { data: popularMovies },
  //   { data: topRatedMovies },
  //   { data: upcomingMovies },
  // ] = useQueries({
  //   queries: ["now_playing", "popular", "top_rated", "upcoming"].map((category) => ({
  //   queryFn: () => api.getMovieList(category),
  //   queryKey: ["movies", { category }],
  //   initialData: [],
  // }));

  // const { data: nowPlayingMovies = [] } = useQuery({
  //   queryFn: () => api.getMovieList("now_playing"),
  //   queryKey: ["movies", { category: "now_playing" }],
  // });

  // const { data: popularMovies = [] } = useQuery({
  //   queryFn: () => api.getMovieList("popular"),
  //   queryKey: ["movies", { category: "popular" }],
  // });

  // const { data: topRatedMovies = [] } = useQuery({
  //   queryFn: () => api.getMovieList("top_rated"),
  //   queryKey: ["movies", { category: "top_rated" }],
  // });

  // const { data: upcomingMovies = [] } = useQuery({
  //   queryFn: () => api.getMovieList("upcoming"),
  //   queryKey: ["movies", { category: "upcoming" }],
  // });
  //아래 네 개의 api 통신이, 서로를 기다리지 않고, 병렬적으로 통신을 시작
  const nowPlayingMoviesPromise = api.getMovieList('now_playing');
  const popularMoviesPromise = api.getMovieList('popular');
  const topRatedMoviesPromise = api.getMovieList('top_rated');
  const upcomingMoviesPromise = api.getMovieList('upcoming');

  // 병렬적으로 통신중인 모든 api 호출이 완료가 되면, 결과값이 정리되어 나옴
  const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
    await Promise.all([
      nowPlayingMoviesPromise,
      popularMoviesPromise,
      topRatedMoviesPromise,
      upcomingMoviesPromise,
    ]);

  return (
    <main className='py-10'>
      <MovieSection
        title='현재 상영중인 영화'
        category='now_playing'
        initialData={nowPlayingMovies.results}
      />
      <MovieSection
        title='인기 있는 영화'
        category='popular'
        initialData={popularMovies.results}
      />
      <MovieSection
        title='평점이 높은 영화'
        category='top_rated'
        initialData={topRatedMovies.results}
      />
      <MovieSection
        title='곧 상영 예정인 영화'
        category='upcoming'
        initialData={upcomingMovies.results}
      />
    </main>
  );
}

export default HomePage;
