import MovieCard from './MovieCard';

function MovieSection({ title, movies }) {
  return (
    <section className='[&+&]:mt-20'>
      <h2 className='px-8 text-3xl font-bold mb-6'>{title}</h2>
      <ul className='flex px-8 gap-x-5 overflow-x-auto scrollbar-hide'>
        {movies.map((movie) => (
          <li key={movie.id} className='flex-shrink-0'>
            <MovieCard movie={movie} />
            {movie.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieSection;
