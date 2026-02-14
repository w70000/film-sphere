import type { MovieDetails } from '@/types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/movies/StarRating';
import { AddToWatchlistButton } from './AddToWatchlistButton';

interface MovieDetailsProps {
  movie: MovieDetails;
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const year = new Date(movie.release_date).getFullYear();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-1 lg:col-span-1">
          <div className="aspect-[2/3] w-full max-w-sm mx-auto md:max-w-none">
            <Image
              src={movie.poster_path}
              alt={movie.title}
              width={500}
              height={750}
              className="rounded-xl object-cover shadow-2xl shadow-primary/10"
              data-ai-hint="movie poster"
            />
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <h1 className="font-headline text-3xl font-bold md:text-4xl lg:text-5xl">
            {movie.title}
          </h1>
          <div className="mt-2 flex items-center space-x-4">
            <span className="text-muted-foreground">{year}</span>
            <div className="flex items-center space-x-2">
              <StarRating rating={movie.vote_average / 2} />
              <span className="font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Badge key={genre.id} variant="secondary">
                {genre.name}
              </Badge>
            ))}
          </div>

          <div className="mt-6">
            <AddToWatchlistButton movie={movie} />
          </div>

          <div className="mt-8">
            <h2 className="font-headline text-2xl font-semibold">Overview</h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
