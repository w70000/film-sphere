'use client';

import { useEffect, useState } from 'react';
import type { Movie } from '@/types';
import { getMoviesByIds } from '@/app/actions';
import { MovieCard } from './MovieCard';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';
import { useWatchlist } from '@/hooks/use-watchlist';

export function Watchlist() {
  const { watchlist, removeFromWatchlist, isInitialized } = useWatchlist();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isInitialized) return;

    const fetchWatchlistMovies = async () => {
      setLoading(true);
      if (watchlist.length > 0) {
        const watchlistMovies = await getMoviesByIds(watchlist);
        setMovies(watchlistMovies);
      } else {
        setMovies([]);
      }
      setLoading(false);
    };

    fetchWatchlistMovies();
  }, [watchlist, isInitialized]);

  const handleRemove = (movieId: number, movieTitle: string) => {
    removeFromWatchlist(movieId);
    toast({
      title: 'Removed from Watchlist',
      description: `"${movieTitle}" has been removed.`,
    });
  };

  if (!isInitialized || loading) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <Skeleton className="aspect-[2/3] w-full rounded-xl" />
            <Skeleton className="mt-2 h-6 w-3/4 rounded-md" />
            <Skeleton className="mt-1 h-4 w-1/4 rounded-md" />
          </div>
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted bg-card p-12 text-center">
        <h3 className="font-headline text-xl font-semibold">
          Your Watchlist is Empty
        </h3>
        <p className="mt-2 text-muted-foreground">
          Start exploring and add some movies!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie) => (
        <div key={movie.id} className="relative group">
          <MovieCard movie={movie} />
          <Button
            size="icon"
            variant="destructive"
            className="absolute top-2 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => handleRemove(movie.id, movie.title)}
            aria-label="Remove from watchlist"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
