import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import Logo from "../../../assets/images/Logo.png";

export interface BikeCardProps {
  title?: string;
  description?: string;
  theftDate?: string;
  reportedDate?: string;
  location?: string;
  image?: string;
}

const AllBikesIndex: React.FC<BikeCardProps> = ({
  title,
  description,
  theftDate,
  reportedDate,
  location,
  image,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, 
        alignItems: "center",
        maxWidth: 600,
        margin: 2,
        boxShadow: 3,
      }}
    >
      {/* {image && ( */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: 200 }, // العرض 100% للشاشات الصغيرة
            height: { xs: 200, sm: 150 }, // ارتفاع مختلف للشاشات الصغيرة
            objectFit: "cover",
          }}
          image={Logo}
          alt={title}
        />
      {/* )} */}
      <CardContent
        sx={{
          flex: 1,
          textAlign: { xs: "center", sm: "left" }, // توسيط النصوص للشاشات الصغيرة
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title || "Unknown Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {description || "No description available."}
        </Typography>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            <strong>Theft Date:</strong> {theftDate || "Unknown"}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            <strong>Reported Date:</strong> {reportedDate || "Unknown"}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            <strong>Location:</strong> {location || "Unknown"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AllBikesIndex;
