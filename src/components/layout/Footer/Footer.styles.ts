// Footer.styles.js
import { Box, styled } from "@mui/material";
import BackgroundURL from "../../../assets/images/Hero.png";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  backgroundImage: `url(${BackgroundURL})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.text.primary,
  direction: "ltr",
  width: "100%",
  position: "relative",
  paddingBottom: "0px"
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: theme.breakpoints.values.lg,
  padding: theme.spacing(2),
}));

export const ContentIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  marginBottom: "15PX",
}));

export const FooterSection = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

export const IconButtonStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
}));
