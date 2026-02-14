'use client';

import { Watchlist } from '@/components/movies/Watchlist';

export default function WatchlistPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-headline text-3xl font-bold md:text-4xl">Your Watchlist</h1>
      <p className="text-muted-foreground mt-2">
        Here are the movies you've saved.
      </p>
      <div className="mt-8">
        <Watchlist />
      </div>
    </div>
  );
}
