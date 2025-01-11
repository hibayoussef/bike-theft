import { useQuery, UseQueryResult } from "react-query";
import { useBikeStore } from "../../../store/useBikeStore";
import { _BikesApi } from "../../../services/bikes/bikes.service";
import type { Theft } from "../../../types/Theft";

const useBikes = ({
  query,
  filters,
}: {
  query?: string;
  filters?: {
    stolenness?: string;
    location?: string;
    dateRange?: { start?: string; end?: string };
  };
}): UseQueryResult<{ bikes: Theft[]; results_count: number }> => {
  const { currentPage, setThefts, setLoading, setError } = useBikeStore(
    (state) => state
  );

  const queryResult = useQuery(
    ["bikes", currentPage, query, filters],
    () => _BikesApi.index({ page: currentPage, query, filters }),
    {
      onSuccess: (data) => {
        setThefts(data.bikes, data.results_count);
        setLoading(false);
      },
      onError: (error: any) => {
        console.error("Error fetching bikes:", error);
        setError(error.message || "Failed to fetch bikes");
        setLoading(false);
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

  return queryResult;
};

export default useBikes;
