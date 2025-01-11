import { useState } from "react";
import BikeFilters from "../../../components/Filters/BikeFilter";
import AllBikesIndex from "../components/AllBikes";
import useBikes from "../hooks/useBike";
import { Typography } from "@mui/material";
import AllBikes from "../components/AllBikes";

const BikeList = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    stolenness: "all",
    location: "Munich",
    dateRange: { start: undefined, end: undefined },
  });

  const { data, isLoading, error } = useBikes({ query, filters });

  const handleSearch = (
    searchQuery: string,
    dateRange: { start?: string; end?: string }
  ) => {
    setQuery(searchQuery);
    setFilters((prev: any) => ({ ...prev, dateRange }));
  };

  return (
    <div>
      <BikeFilters onSearch={handleSearch} />
      {isLoading && <Typography>Loading...</Typography>}
      {data && <AllBikes data={data} />}
    </div>
  );
};

export default BikeList;