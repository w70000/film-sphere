import { MovieDetails as MovieDetailsComponent } from '@/components/movies/MovieDetails';
import { getMovieDetails } from '@/lib/tmdb';
import { notFound } from 'next/navigation';

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movieId = parseInt(params.id, 10);
  if (isNaN(movieId)) {
    notFound();
  }

  const movie = await getMovieDetails(movieId);

  if (!movie) {
    notFound();
  }

  return <MovieDetailsComponent movie={movie} />;
}
