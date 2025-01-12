import { Container, Grid, Typography, Box, Pagination } from "@mui/material";
import BikeCard from "../../BikeCard/pages/BikeCardIndex";
import type { Theft } from "../../../types/Theft";
import Logo from "../../../assets/images/Logo.png";
import NoData from "../../../components/shared/noData/NoData";

const AllBikes = ({
  data = { bikes: [] },
  results_count = 0,
  currentPage = 1,
  onPageChange = () => {},
}: {
  data?: any;
  results_count?: number;
  currentPage?: number;
  onPageChange?: (newPage: number) => void;
}) => {
  const totalPages = Math.ceil(results_count / 10); // Assuming 10 bikes per page

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="left"
        color="#2C3971"
      >
        Stolen bikes {results_count}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data?.bikes?.length > 0 ? (
          data?.bikes?.map((bike: Theft) => (
            <Grid item xs={12} sm={12} md={6} key={bike.id}>
              <BikeCard
                // id={bike.id}
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
          <NoData text="No bike theft cases found." />
        )}
      </Grid>

      {results_count > 0 && (
        <Box
          sx={{
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
            mt: "10px",
          }}
        >
          <Pagination
            page={currentPage}
            onChange={(page: any) => onPageChange(page)}
            count={totalPages}
            sx={{
              ".MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "origin.main",
                color: "white",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default AllBikes;
