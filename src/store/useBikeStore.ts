import { create } from "zustand";

export interface Theft {
  id: number;
  title: string;
  description: string;
  date_stolen: string;
  reportedDate?: string;
  stolen_location: string;
  thumb?: string;
}

interface TheftStore {
  thefts: Theft[];
  totalThefts: number;
  loading: boolean;
  error: string | null;
  currentPage: number;

  setThefts: (thefts: Theft[], total: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setCurrentPage: (page: number) => void;
  incrementPage: () => void;
  decrementPage: () => void;
}

export const useBikeStore = create<TheftStore>((set) => ({
  thefts: [],
  totalThefts: 0,
  loading: false,
  error: null,
  currentPage: 1,

  setThefts: (thefts, total) => set({ thefts, totalThefts: total }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setCurrentPage: (page) => set({ currentPage: page }),
  incrementPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  decrementPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
}));
