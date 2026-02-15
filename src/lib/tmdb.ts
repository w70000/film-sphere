import type { Movie, MovieDetails } from '@/types';
import { getPlaceholderImage } from './placeholder-images';

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Cosmic Odyssey',
    overview:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    poster_path: getPlaceholderImage('movie-poster-1') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-11-07',
    vote_average: 8.6,
    genres: [{ id: 1, name: 'Sci-Fi' }, { id: 2, name: 'Adventure' }],
  },
  {
    id: 2,
    title: 'Echoes of the Past',
    overview:
      'A historian discovers a secret that changes her understanding of the past and threatens her future.',
    poster_path: getPlaceholderImage('movie-poster-2') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-05-15',
    vote_average: 7.9,
    genres: [{ id: 3, name: 'Drama' }, { id: 4, name: 'Mystery' }],
  },
  {
    id: 3,
    title: 'The Last Stand-Up',
    overview:
      'A struggling comedian gets one last shot at fame, but must confront his inner demons on the way.',
    poster_path: getPlaceholderImage('movie-poster-3') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-08-22',
    vote_average: 7.2,
    genres: [{ id: 5, name: 'Comedy' }],
  },
  {
    id: 4,
    title: 'Cybernetic Pursuit',
    overview:
      'In a futuristic metropolis, a detective hunts a rogue android that holds the key to a vast conspiracy.',
    poster_path: getPlaceholderImage('movie-poster-4') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2025-01-10',
    vote_average: 8.1,
    genres: [{ id: 1, name: 'Sci-Fi' }, { id: 6, name: 'Action' }],
  },
  {
    id: 5,
    title: 'Ocean\'s Heart',
    overview:
      'Two marine biologists fall in love while on a groundbreaking mission to save a coral reef.',
    poster_path: getPlaceholderImage('movie-poster-5') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-06-12',
    vote_average: 6.8,
    genres: [{ id: 7, name: 'Romance' }, { id: 3, name: 'Drama' }],
  },
  {
    id: 6,
    title: 'Realm of Dragons',
    overview:
      'A young farmhand discovers she has the power to communicate with dragons and must unite them to fight a dark sorcerer.',
    poster_path: getPlaceholderImage('movie-poster-6') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-12-25',
    vote_average: 8.9,
    genres: [{ id: 8, name: 'Fantasy' }, { id: 2, name: 'Adventure' }],
  },
   {
    id: 7,
    title: 'Project Genesis',
    overview:
      'Scientists racing against time to find a new home for humanity discover a planet that is not as uninhabited as they thought.',
    poster_path: getPlaceholderImage('movie-poster-7') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-09-18',
    vote_average: 8.3,
    genres: [{ id: 1, name: 'Sci-Fi' }, { id: 9, name: 'Thriller' }],
  },
  {
    id: 8,
    title: 'The Crimson Compass',
    overview:
      'A swashbuckling adventurer seeks a legendary treasure that is said to grant control over the seas.',
    poster_path: getPlaceholderImage('movie-poster-8') || '',
    backdrop_path: getPlaceholderImage('hero-movie-backdrop') || '',
    release_date: '2024-07-04',
    vote_average: 7.5,
    genres: [{ id: 6, name: 'Action' }, { id: 2, name: 'Adventure' }],
  },
];

const mockMovieDetails: Omit<MovieDetails, keyof Movie> = {
  credits: {
    cast: [
      { id: 1, name: 'Alex Ryder', character: 'Captain Eva Rostova', profile_path: null },
      { id: 2, name: 'Jasmine Chen', character: 'Dr. Aris Thorne', profile_path: null },
      { id: 3, name: 'Samuel L. Jackson', character: 'General Stone', profile_path: null },
      { id: 4, name: 'Emily Blunt', character: 'The Oracle', profile_path: null },
      { id: 5, name: 'Ken Watanabe', character: 'Commander Kenji', profile_path: null },
    ],
  },
};

export async function getTrendingMovies(): Promise<Movie[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMovies);
    }, 500);
  });
}

export async function getMovieDetails(id: number): Promise<MovieDetails | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movie = mockMovies.find((m) => m.id === id);
      if (movie) {
        resolve({ ...movie, ...mockMovieDetails });
      } else {
        resolve(null);
      }
    }, 500);
  });
}
