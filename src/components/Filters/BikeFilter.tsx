import React, { useState } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import type { FilterProps } from "../../types/FilterProps";

const BikeFilters: React.FC<FilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    onSearch(query, { start: startDate, end: endDate });
  };

  return (
    <Box display="flex" justifyContent="center" mb={2} ml={1}>
      <Grid container spacing={2}>
        <Grid item md={10} xs={10}>
          <TextField
            label="Search by title"
            variant="outlined"
            value={query}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
            sx={{
              backgroundColor: "#2C3971",
              height: "53px", // يتطابق مع ارتفاع TextField
              width: "160px",
              fontSize: "1rem", // حجم الخط أكبر
            }}
          >
            Search
          </Button>
        </Grid>

        {/* </Grid> */}
      </Grid>
    </Box>
  );
};

export default BikeFilters;
