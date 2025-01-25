import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ServiceCover from "./components/service-cover";
import ServiceHero from "./components/service-hero";
import ServiceCard from "./components/service-card";

const ServicePharma = () => {
  return (
    <Box>
      <Box>
        <ServiceCover />
      </Box>
      <Box mb={5}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "block",
              pt: { xs: 5, md: 10 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px" },
                fontFamily: "lora",
                fontWeight: "medium",
                color: "#101828",
              }}
            >
              Our Services
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "inter",
                fontWeight: "regular",
                color: "#475467",
                px: { sx: 2, md: 0 },
                mb: 2,
                width: { sx: "100%", md: "45%" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est.
            </Typography>
          </Box>

          <Box>
            <ServiceHero />
          </Box>
          <Box py={{ xs: 4, md: 5 }}>
            <ServiceCard />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicePharma;
