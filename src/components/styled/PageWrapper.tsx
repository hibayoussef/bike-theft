// src/shared/components/PageWrapper.tsx
import React from "react";
import { Box, Container } from "@mui/material";

const PageWrapper = ({ children }) => {
  return (
    <Box>
      <Container
        maxWidth={false} // This removes the maxWidth limitation and makes it full width
        sx={{
          marginTop: "3rem",
          // marginTop: '0rem', 
          marginBottom: "3rem",
          padding: {
            lg: "0 70px",
            xs: "0 20px",
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
