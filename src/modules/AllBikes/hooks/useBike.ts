import { useQuery, UseQueryResult } from "react-query";
import { useBikeStore } from "../../../store/useBikeStore";
import { Theft } from "../../../store/useBikeStore";
import { _BikesApi } from "../../../services/bikes/bikes.service";

const useBikes = ({
  page,
  query,
  filters,
}: {
  page: number;
  query?: string;
  filters?: {
    stolenness?: string;
    location?: string;
    dateRange?: { start?: string; end?: string };
  };
}): UseQueryResult<{ bikes: Theft[]; results_count: number }> => {
  const setThefts = useBikeStore((state) => state.setThefts);
  const setLoading = useBikeStore((state) => state.setLoading);
  const setError = useBikeStore((state) => state.setError);

  const queryResult = useQuery(
    ["bikes", page, query, filters],
    () => _BikesApi.index({ page, query, filters }),
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

  setLoading(queryResult.isFetching);

  return queryResult;
};

export default useBikes;
