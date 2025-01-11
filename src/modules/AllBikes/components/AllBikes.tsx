import {
  Container,
  Grid,
  Typography
} from "@mui/material";
import BikeCardIndex from "../../BikeCard/pages/BikeCardIndex";


const AllBikes: any = ( data : any) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Reported Bike Thefts
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data?.data?.length > 0 ? (
          data?.data.map((bike: any) => (
            <Grid item xs={6} key={bike.id}>
              <BikeCardIndex
                title={bike.title}
                description={bike.description}
                theftDate={bike.date_stolen}
                reportedDate={bike?.reportedDate}
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
