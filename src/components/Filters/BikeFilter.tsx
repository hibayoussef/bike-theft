import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import type { FilterProps } from "../../types/FilterProps";



const BikeFilters: React.FC<FilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    onSearch(query, { start: startDate, end: endDate });
  };

  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <TextField
        label="Search by title"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <TextField
        label="Start Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <TextField
        label="End Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default BikeFilters;
