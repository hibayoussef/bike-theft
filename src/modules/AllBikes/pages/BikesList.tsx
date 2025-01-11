import React, { useState } from "react";
import AllBikesIndex from "./AllBikesIndex";
import useBikes from "../hooks/useBike";
import BikeFilters from "./BikeFilter";

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
      {isLoading && <p>Loading...</p>}
      <div>
        {/* {data?.bikes.map((bike: any) => ( */}
              <AllBikesIndex
                  data={data}
            // key={bike.id}
            // title={bike.title}
            // description={bike.description}
            // theftDate={bike.date_stolen}
            // location={bike.stolen_location}
            // image={bike.thumb}
          />
        {/* ))} */}
      </div>
    </div>
  );
};

export default BikeList;
