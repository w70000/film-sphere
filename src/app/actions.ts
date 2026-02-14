'use server';

import { mockMovies } from '@/lib/tmdb';
import type { Movie } from '@/types';

// Logika watchlisty została przeniesiona na stronę klienta.

export async function getMoviesByIds(ids: number[]): Promise<Movie[]> {
   return new Promise((resolve) => {
    setTimeout(() => {
      const movies = mockMovies.filter((m) => ids.includes(m.id));
      resolve(movies);
    }, 500);
  });
}
