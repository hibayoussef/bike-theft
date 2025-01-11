// MainLayout.jsx
import { Box } from "@mui/material";
import React from "react";
import ContentWrapper from "../components/styled/ContentWrapper";
import PageWrapper from "../components/styled/PageWrapper";
import Header from "../components/layout/Header/Header";

const MainLayout = ({ title, headerComponent, children }: any) => {
  return (
    <>
      <Header />
      <PageWrapper>
        {headerComponent && headerComponent}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "red",
          }}
        >
          <ContentWrapper>{children}</ContentWrapper>
        </Box>
      </PageWrapper>
    </>
  );
};

export default MainLayout;
