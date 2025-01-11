export interface FilterProps {
  onSearch: (
    query: string,
    dateRange: { start?: string; end?: string }
  ) => void;
}
