import { Container } from "@mui/material";
import BikeFilters from "../../../components/Filters/BikeFilter";
import Loader from "../../../components/shared/Loader";
import { useBikeStore } from "../../../store/useBikeStore";
import AllBikes from "../components/AllBikes";
import useBikes from "../hooks/useBike";

const BikeList = () => {
  const {
    thefts,
    totalThefts,
    loading,
    currentPage,
    setCurrentPage,
    filters,
  } = useBikeStore((state) => state);

  const { refetch } = useBikes({
    query: filters.query,
    filters,
  });

  const handleSearch = (
    searchQuery: string,
    dateRange: { start?: string; end?: string }
  ) => {
    useBikeStore.setState((state) => ({
      ...state,
      filters: {
        ...state.filters,
        query: searchQuery,
        dateRange,
      },
    }));
    setCurrentPage(1);
    refetch();
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    refetch();
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <BikeFilters onSearch={handleSearch} />
          </Container>

          <AllBikes
            data={thefts}
            results_count={totalThefts}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default BikeList;
