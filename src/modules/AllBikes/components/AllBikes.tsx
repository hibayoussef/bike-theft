import { Container, Grid, Typography, Box, Button } from "@mui/material";
import BikeCard from "../../BikeCard/pages/BikeCardIndex";
import type { Theft } from "../../../types/Theft";
import Logo from "../../../assets/images/Logo.png";

const AllBikes = ({
  data,
  results_count,
  currentPage,
  onPageChange,
}: {
  data: any;
  results_count: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}) => {
  const totalPages = Math.ceil(results_count / 10); // Assuming 10 bikes per page

  console.log("reeee:", results_count, totalPages);
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom textAlign="left">
        Reported Bike Thefts {results_count}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data?.length > 0 ? (
          data?.map((bike: Theft) => (
            <Grid item xs={12} sm={12} md={6} key={bike.id}>
              <BikeCard
                title={bike.title}
                description={bike.description}
                theftDate={bike.date_stolen}
                reportedDate={bike.reportedDate}
                location={bike.stolen_location}
                image={bike.thumb !== null ? bike.thumb : Logo}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" textAlign="center" color="textSecondary">
            No thefts reported at the moment.
          </Typography>
        )}
      </Grid>

      {results_count > 0 && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Typography variant="body1" sx={{ mx: 2 }}>
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="contained"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default AllBikes;
