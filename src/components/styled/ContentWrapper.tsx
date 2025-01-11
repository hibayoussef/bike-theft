import { Box } from "@mui/material";

// ContentWrapper component is used to wrap content and manage layout.
const ContentWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        height: "100%", 
        overflow: "hidden", 
        paddingLeft: "16px", 
        paddingRight: "16px", 
        paddingBottom: "16px"
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;

