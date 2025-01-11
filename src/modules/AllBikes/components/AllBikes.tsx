import { Container, Grid, Typography } from "@mui/material";
import BikeCard from "../../BikeCard/pages/BikeCardIndex";
import type { Theft } from "../../../types/Theft";


const AllBikes = ({ data }: { data: any }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Reported Bike Thefts
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data?.length > 0 ? (
          data?.map((bike: Theft) => (
            <Grid item xs={12} sm={6} md={6} key={bike.id}>
              <BikeCard
                title={bike.title}
                description={bike.description}
                theftDate={bike.date_stolen}
                reportedDate={bike.reportedDate}
                location={bike.stolen_location}
                image={
                  bike.thumb ||
                  "https://via.placeholder.com/200x150?text=Bike+Image"
                }
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" textAlign="center" color="textSecondary">
            No thefts reported at the moment.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default AllBikes;
