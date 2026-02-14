import { HeroMovie } from '@/components/movies/HeroMovie';
import { PopularMoviesSlider } from '@/components/movies/PopularMoviesSlider';
import { getTrendingMovies } from '@/lib/tmdb';

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const heroMovie = trendingMovies[0];
  const popularMovies = trendingMovies.slice(1);

  return (
    <div className="flex flex-col">
      {heroMovie && <HeroMovie movie={heroMovie} />}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="mb-6 font-headline text-2xl font-bold md:text-3xl">
          Popular Movies
        </h2>
        {popularMovies.length > 0 && (
          <PopularMoviesSlider movies={popularMovies} />
        )}
      </div>
    </div>
  );
}
