'use client';

import { useState, useEffect, useCallback } from 'react';

const WATCHLIST_KEY = 'filmSphereWatchlist';

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(WATCHLIST_KEY);
      setWatchlist(item ? JSON.parse(item) : []);
    } catch (error) {
      console.warn(`Error reading localStorage key “${WATCHLIST_KEY}”:`, error);
      setWatchlist([]);
    }
    setIsInitialized(true);
  }, []);

  const updateWatchlist = useCallback((newWatchlist: number[]) => {
    setWatchlist(newWatchlist);
    try {
      window.localStorage.setItem(WATCHLIST_KEY, JSON.stringify(newWatchlist));
    } catch (error) {
      console.warn(`Error setting localStorage key “${WATCHLIST_KEY}”:`, error);
    }
  }, []);

  const addToWatchlist = useCallback(
    (movieId: number) => {
      if (!watchlist.includes(movieId)) {
        const newWatchlist = [...watchlist, movieId];
        updateWatchlist(newWatchlist);
      }
    },
    [watchlist, updateWatchlist]
  );

  const removeFromWatchlist = useCallback(
    (movieId: number) => {
      const newWatchlist = watchlist.filter((id) => id !== movieId);
      updateWatchlist(newWatchlist);
    },
    [watchlist, updateWatchlist]
  );

  const isInWatchlist = useCallback(
    (movieId: number) => {
      return watchlist.includes(movieId);
    },
    [watchlist]
  );

  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    isInitialized,
  };
};
