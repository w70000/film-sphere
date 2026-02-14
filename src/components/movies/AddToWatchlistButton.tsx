'use client';

import { Button } from '@/components/ui/button';
import type { Movie } from '@/types';
import { PlusCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useWatchlist } from '@/hooks/use-watchlist';

export function AddToWatchlistButton({ movie }: { movie: Movie }) {
  const { isInWatchlist, addToWatchlist, isInitialized } = useWatchlist();
  const { toast } = useToast();

  const isAdded = isInWatchlist(movie.id);

  const handleAddToWatchlist = () => {
    addToWatchlist(movie.id);
    toast({
      title: 'Added to Watchlist',
      description: `"${movie.title}" has been added to your watchlist.`,
    });
  };

  if (!isInitialized) {
    return (
      <Button size="lg" disabled variant="outline">
        <PlusCircle className="mr-2" /> Add to Watchlist
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      onClick={handleAddToWatchlist}
      disabled={isAdded}
      variant="outline"
    >
      {isAdded ? (
        <>
          <CheckCircle className="mr-2" />
          In Watchlist
        </>
      ) : (
        <>
          <PlusCircle className="mr-2" />
          Add to Watchlist
        </>
      )}
    </Button>
  );
}
