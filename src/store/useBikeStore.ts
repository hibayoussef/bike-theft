import { create } from "zustand";
import type { TheftStore } from "../types/TheftStore";

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
