import { create } from "zustand";
import type { TheftStore } from "../types/TheftStore";

export const useBikeStore = create<TheftStore>((set) => ({
  // البيانات الافتراضية
  thefts: [],
  totalThefts: 0,
  loading: false,
  error: null,
  currentPage: 1,
  filters: {
    query: "",
    stolenness: "all",
    location: "Munich",
    dateRange: { start: undefined, end: undefined },
  },

  // دوال لتحديث البيانات والحالة
  setThefts: (thefts, total) => set({ thefts, totalThefts: total }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // إدارة الصفحة الحالية
  setCurrentPage: (page) => set({ currentPage: page }),
  incrementPage: () =>
    set((state) => ({ currentPage: Math.min(state.currentPage + 1, 100) })), // حد أقصى للصفحات
  decrementPage: () =>
    set((state) => ({ currentPage: Math.max(state.currentPage - 1, 1) })), // لا يمكن أن تكون أقل من 1

  // إدارة الفلاتر
  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    })),
}));
