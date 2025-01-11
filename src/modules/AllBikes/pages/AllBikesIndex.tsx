import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Container,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";
import Logo from "../../../assets/images/Logo.png";
import BikeCardIndex from "../../BikeCard/pages/BikeCardIndex";
import { useBikeStore } from "../../../store/useBikeStore";
import useBikes from "../hooks/useBike";

interface BikeCardProps {
  title?: string;
  description?: string;
  theftDate?: string;
  reportedDate?: string;
  location?: string;
  image?: string;
}

const AllBikes: any = ( data : any) => {
  console.log('dataaaaaaaaaaaa: ', data)
  // const { thefts, loading, error } = useBikeStore((state) => state); // استخراج الحالة من store
  // const { data, isLoading, isError, refetch }: any = useBikes({
  //   // page: 1, // استخدام الصفحة 1 كمثال، يمكن تعديلها حسب الحاجة
  //   query: "",
  //   filters: {},
  // });

  // تحديث الداتا عند أول تحميل فقط
  // useEffect(() => {
  //   if (data && data.bikes.length > 0 && thefts.length === 0) {
  //     // إذا كانت البيانات جديدة ولم تكن موجودة مسبقًا في store
  //     useBikeStore.getState().setThefts(data.bikes, data.results_count);
  //   }
  // }, [data, thefts]);

  // if (isLoading) {
  //   return (
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       height="100vh"
  //     >
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       height="100vh"
  //     >
  //       <Alert severity="error">{"Failed to load bike theft data"}</Alert>
  //     </Box>
  //   );
  // }

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
