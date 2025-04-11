import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ServiceCover from "./components/service-cover";
import ServiceHero from "./components/service-hero";
import ServiceCard from "./components/service-card";
import ServiceGrid from "./components/service-grid";
import ActionButtons from "../components/action-button";

const ServicePharma = () => {
  return (
    <Box>
      <ServiceCover />
      <ActionButtons />
      <Box mb={5}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "block",
              pt: { xs: 7, md: 10 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", sm: "30px" },
                fontFamily: "lora",
                fontWeight: "medium",
                color: "#101828",
              }}
            >
              Our Services
            </Typography>
          </Box>

          <Box>
            <ServiceHero />
          </Box>
          <Box py={{ xs: 4, md: 5 }}>
            <ServiceCard />
          </Box>
        </Container>
        <Box bgcolor={"#F2F4F7"} py={{ xs: 3, md: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "24px", md: "30px" },
                  fontFamily: "lora",
                  fontWeight: "medium",
                  color: "#000000",
                }}
              >
                Benefits
              </Typography>
            </Box>
            <ServiceGrid />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicePharma;
