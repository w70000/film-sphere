import type { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="group block">
      <Card
        className={cn(
          'overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20',
          className
        )}
      >
        <CardContent className="p-0">
          <div className="aspect-[2/3] w-full">
            <Image
              src={movie.poster_path}
              alt={movie.title}
              width={500}
              height={750}
              className="h-full w-full object-cover"
              data-ai-hint="movie poster"
            />
          </div>
        </CardContent>
      </Card>
      <div className="mt-2">
         <h3 className="font-headline text-lg font-medium leading-tight tracking-tight">
            {movie.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {movie.release_date.substring(0,4)}
          </p>
      </div>
    </Link>
  );
}
