import { create } from 'zustand';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export interface MovieData {
  id: string;
  userId: string | undefined;
  title: string | undefined;
  image: string;
  releaseDate: string;
  vote: number;
}

interface WatchListStore {
  watchlists: MovieData[];
  setWatchlists: (data: MovieData[]) => void;
  addToWatchlist: (items: MovieData) => void;
  removeFromWatchlist: (id: number) => void;
  clearWatchlist: () => void;
}

const useWatchList = create<WatchListStore>((set) => ({
  watchlists: [],
  setWatchlists: (data: MovieData[]) => set({ watchlists: data }),
  addToWatchlist: (items) =>
    set((state) => ({ watchlists: [...state.watchlists, items] })),
  removeFromWatchlist: (id) =>
    set((state) => ({
      watchlists: state.watchlists.filter((item) => item.movieId !== id),
    })),
  clearWatchlist: () => set({ watchlists: [] }),
}));

export default useWatchList;
