import { create } from 'zustand';

interface CatergoriesStore {
  toggle: boolean;
  handleToggle: () => void;
  closeToggle: () => void;
}

const useCategoriesToggleMovies = create<CatergoriesStore>((set) => ({
  toggle: false,
  handleToggle: () => set((state) => ({ toggle: !state.toggle })),
  closeToggle: () => set({ toggle: false }),
}));

export default useCategoriesToggleMovies;
