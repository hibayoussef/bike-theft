import { Box, LinearProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: "1300",
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default Loader;
