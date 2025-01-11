import { Box } from "@mui/material";
import MainLayout from "../../../layout/MainLayout.js";
import Footer from "../../../components/layout/Footer/Footer.js";
import BikeCardIndex from "../../../modules/BikeCard/pages/BikeCardIndex.js";
import AllBikes from "../../../modules/AllBikes/components/AllBikes.js";
import BikeList from "../../../modules/AllBikes/pages/BikesList.js";

const Home = () => {
  return (
    <>
      <MainLayout
      // description={data?.data?.contents[0]?.description}
      // homeImage={data?.data?.contents[0]?.images[0]}
      >
        <Box
          sx={{
            padding: {
              xs: "5px",
              sm: "10px",
            },
          }}
        >
          <BikeList />
        </Box>
      </MainLayout>

      {/* <Box
        id="footer"
        sx={{ paddingTop: "4rem", textAlign: "center", margin: 0 }}
      >
        <Footer />
      </Box> */}
    </>
  );
};

export default Home;
