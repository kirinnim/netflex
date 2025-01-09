import Image from 'next/image';
import Link from 'next/link';

function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <article>
        <div className='relative w-96 aspect-video'>
          <Image
            fill
            alt={movie.title}
            src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
            className='object-cover'
          />
        </div>
        <h6 className='mt-2.5 text-2xl font-semibold text-black'>
          {movie.title}
        </h6>
      </article>
    </Link>
  );
}

export default MovieCard;
