import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";
import type { BikeCardProps } from "../../../types/BikeCardProps";

const BikeCard: React.FC<BikeCardProps> = ({
  title,
  description,
  theftDate,
  reportedDate,
  location,
  image,
}) => {
  const navigate = useNavigate();

  // const handleCardClick = () => {
  //   navigate(`/bike/${id}`);
  // };

  return (
    <Card
      // onClick={handleCardClick}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        maxWidth: 600,
        margin: 1,
        boxShadow: 3,
        cursor: "pointer",
        minHeight: 300,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 200 },
          height: { xs: 330, sm: 150 },
          objectFit: "cover",
        }}
        image={image || Logo}
        alt={title}
      />
      <CardContent sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
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

export default BikeCard;
