import create from 'zustand';
import { persist } from 'zustand/middleware';
import { MovieListProps } from '@/components/Movies/MovieList';

// type Movie = {
//   id: string | number;
//   title?: string;
//   [key: string]: any;
// };

type WatchListState = {
  watchlist: MovieListProps[];
  add: (movie: MovieListProps) => void;
  remove: (id: string | number) => void;
  toggle: (movie: MovieListProps) => void;
  has: (id: string | number) => boolean;
  clear: () => void;
};

const idOf = (id: string | number) => String(id);

const useWatchList = create<WatchListState>()(
  persist(
    (set, get) => ({
      watchlist: [],

      add: (movie) => {
        if (get().has(movie.id)) return;
        set((state) => ({ watchlist: [...state.watchlist, movie] }));
      },

      remove: (id) => {
        set((state) => ({
          watchlist: state.watchlist.filter((m) => idOf(m.id) !== idOf(id)),
        }));
      },

      toggle: (movie) => {
        if (get().has(movie.id)) {
          get().remove(movie.id);
        } else {
          get().add(movie);
        }
      },

      has: (id) => get().watchlist.some((m) => idOf(m.id) === idOf(id)),

      clear: () => set({ watchlist: [] }),
    }),
    {
      name: 'movies-hub-watchlist', // key in localStorage
      version: 1,
    }
  )
);

export default useWatchList;
