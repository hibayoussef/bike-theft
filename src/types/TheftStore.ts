import type { Theft } from "./Theft";

export interface TheftStore {
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