// Footer.tsx
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import LogoFooter from "../../../assets/images/Logo.png";
// import { useHome } from "../../../../services/home/useHome";
// import { useContact } from "../../../admin/pages/siteControl/hooks/useContact";
import {
  ContentIcon,
  FooterContainer,
  FooterContent,
  FooterSection,
} from "./Footer.styles";

interface Contact {
  value: string;
}

interface ContactData {
  contacts: Contact[];
}

interface AboutUsContent {
  description: string;
}

interface AboutUsData {
  contents: AboutUsContent[];
}

const Footer: React.FC = () => {
  //   const { data, isLoading } = useContact();
  //   const { data: aboutUsData, isLoading: isLoadingAboutUs } = useHome();

  const { data } = {
    data: {
      contacts: [
        {
          id: 1,
          title: "الهاتف",
          value: "+963952137034",
        },
        {
          id: 2,
          title: "الايميل",
          value: "aldorralmounir@gmail.com",
        },
        {
          id: 3,
          title: "facebook",
          value: "الدر المنير",
        },
        {
          id: 4,
          title: "instagram",
          value: "aldralmoner_instagram",
        },
        {
          id: 5,
          title: "الموقع",
          value: "location",
        },
        {
          id: 6,
          title: "linkedin",
          value: "aldralmoner_linkedin",
        },
        {
          id: 7,
          title: "whatsapp",
          value: "+963952137034",
        },
        {
          id: 9,
          title: "whatsapp2",
          value: "+963952137034",
        },
      ],
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Grid container spacing={4}>
          {/* Follow Us Section */}
          <Grid item sx={{ padding: "10px" }} xs={12} md={3}>
            <FooterSection>
              <Typography sx={{ fontSize: "1.2rem" }} color="#fff">
                تابعنا
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  mt: 2,
                  color: "#fff",
                  direction: "rtl",
                }}
              >
                {/* {isLoading ? (
                  <CircularProgress style={{ color: "2C3971" }} />
                ) : ( */}
                <>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LinkedInIcon />
                    <Link
                      href={data?.contacts[5]?.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="#fff"
                    >
                      <Typography sx={{ fontSize: "16px" }}>
                        {data?.contacts[5]?.value}
                      </Typography>
                    </Link>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <InstagramIcon />
                    <Link
                      href={data?.contacts[3]?.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="#fff"
                    >
                      <Typography sx={{ fontSize: "16px" }}>
                        {data?.contacts[3]?.value}
                      </Typography>
                    </Link>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FacebookIcon />
                    <Link
                      href={data?.contacts[2]?.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      color="#fff"
                    >
                      <Typography sx={{ fontSize: "16px" }}>
                        {data?.contacts[2]?.value}
                      </Typography>
                    </Link>
                  </Box>
                </>
                {/* )} */}
              </Box>
            </FooterSection>
          </Grid>

          {/* Contact Us Section */}
          <Grid
            item
            sx={{ borderLeft: "1px solid #fff", padding: "10px" }}
            xs={12}
            md={3}
          >
            <FooterSection>
              <Typography color="#fff" sx={{ mb: 1, fontSize: "1.2rem" }}>
                تواصل معنا
              </Typography>
              {/* {isLoading ? (
                <CircularProgress style={{ color: "2C3971" }} />
              ) : ( */}
              <Box sx={{ mt: 2, color: "#fff" }}>
                <ContentIcon>
                  <WhatsAppIcon sx={{ ml: 2 }} />
                  <Typography sx={{ fontSize: "17px" }}>
                    {data?.contacts[6]?.value}
                  </Typography>
                </ContentIcon>

                <ContentIcon>
                  <WhatsAppIcon sx={{ ml: 2 }} />
                  <Typography sx={{ fontSize: "17px" }}>
                    {data?.contacts[7]?.value}
                  </Typography>
                </ContentIcon>

                <ContentIcon>
                  <PhoneIcon sx={{ ml: 2 }} />
                  <Typography sx={{ fontSize: "17px" }}>
                    {data?.contacts[0]?.value}
                  </Typography>
                </ContentIcon>

                <ContentIcon>
                  <MailIcon sx={{ ml: 2 }} />
                  <Typography sx={{ fontSize: "17px" }}>
                    {data?.contacts[1]?.value}
                  </Typography>
                </ContentIcon>
              </Box>
              {/* )} */}
            </FooterSection>
          </Grid>

          {/* About Us Section */}
          <Grid
            item
            sx={{ borderLeft: "1px solid #fff", padding: "10px" }}
            xs={12}
            md={4}
          >
            <FooterSection>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontSize: "1.2rem", color: "#fff" }}
              >
                من نحن
              </Typography>
              {/* {isLoadingAboutUs ? (
                <CircularProgress style={{ color: "2C3971" }} />
              ) : ( */}
                <Typography
                  color="#fff"
                  sx={{
                    mt: 2,
                    fontSize: "17px",
                    lineHeight: "30px",
                    fontWeight: "400",
                    textAlign: "right",
                  }}
                >
                              {/* {aboutUsData?.data?.contents[1]?.description} */}
                              "من نحن من نحن"
                </Typography>
              {/* )} */}
            </FooterSection>
          </Grid>

          {/* Sponsor Section */}
          <Grid
            item
            sx={{ borderLeft: "1px solid #fff", padding: "10px" }}
            xs={12}
            md={2}
          >
            <FooterSection>
              <Box>
                <img
                  src={LogoFooter}
                  alt="Logo Here"
                  style={{ width: "100px", height: "auto" }}
                />
              </Box>
            </FooterSection>
          </Grid>
        </Grid>
      </FooterContent>

      <Divider sx={{ width: "100%", my: 2 }} />

      <Typography variant="body2" align="center" color="#fff" sx={{ py: 2 }}>
        Amjad Smartech Solutions © 2024 All Rights Reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
