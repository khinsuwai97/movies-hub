import { create } from 'zustand';

export interface MovieData {
  id: number;
  title: string | undefined;
  image: string;
  releaseDate: string;
  vote: number;
}

interface WatchListStore {
  watchlists: MovieData[];
  addToWatchlist: (items: MovieData) => void;
  removeFromWatchlist: (id: number) => void;
  clearWatchlist: () => void;
}

const useWatchList = create<WatchListStore>((set) => ({
  watchlists: [],
  addToWatchlist: (items) =>
    set((state) => ({ watchlists: [...state.watchlists, items] })),
  removeFromWatchlist: (id) =>
    set((state) => ({
      watchlists: state.watchlists.filter((item) => item.id !== id),
    })),
  clearWatchlist: () => set({ watchlists: [] }),
}));

export default useWatchList;
