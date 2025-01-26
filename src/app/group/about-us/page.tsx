import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SlideHero from "./components/slide-about";
import CoreValue from "./components/core-value";
import FeatureEvents from "./components/feature";
import BuildingHero from "../components/group-home/building-hero";

const AboutUs = () => {
  return (
    <Box>
      <Box>
        <SlideHero />
      </Box>
      <Container maxWidth="lg">
        <CoreValue />
      </Container>
      <Box sx={{ justifyContent: "center", bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <FeatureEvents />
        </Container>
      </Box>
      <Box>
        <BuildingHero />
      </Box>
    </Box>
  );
};

export default AboutUs;
