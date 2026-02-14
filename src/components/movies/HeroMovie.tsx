import type { Movie } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Info } from 'lucide-react';

interface HeroMovieProps {
  movie: Movie;
}

export function HeroMovie({ movie }: HeroMovieProps) {
  return (
    <div className="relative h-[60vh] w-full md:h-[80vh]">
      <Image
        src={movie.backdrop_path}
        alt={movie.title}
        fill
        className="object-cover"
        priority
        data-ai-hint="movie backdrop"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12 sm:pb-16 md:pb-24">
          <div className="max-w-2xl">
            <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl">
              {movie.title}
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground line-clamp-3">
              {movie.overview}
            </p>
            <div className="mt-6 flex gap-4">
              <Button asChild size="lg">
                <Link href={`/movie/${movie.id}`}>
                  <Info className="mr-2" />
                  View Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
