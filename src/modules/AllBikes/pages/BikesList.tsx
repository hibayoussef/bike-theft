import { useState } from "react";
import BikeFilters from "../../../components/Filters/BikeFilter";
import useBikes from "../hooks/useBike";
import { Typography } from "@mui/material";
import AllBikes from "../components/AllBikes";
import Loader from "../../../components/shared/Loader";

const BikeList = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    stolenness: "all",
    location: "Munich",
    dateRange: { start: undefined, end: undefined },
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useBikes({ query, filters });

  console.log("datarrrsrsrs: ", data)
  const handleSearch = (
    searchQuery: string,
    dateRange: { start?: string; end?: string }
  ) => {
    setQuery(searchQuery);
    setFilters((prev: any) => ({ ...prev, dateRange }));
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <BikeFilters onSearch={handleSearch} />
      {isLoading && <Loader />}
      {data && (
        <AllBikes
          data={data.bikes}
          results_count={data.results_count}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BikeList;
