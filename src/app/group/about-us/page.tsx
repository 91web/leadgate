import React from "react";
import { Box, Container } from "@mui/material";
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
      <Container>
        <CoreValue />
      </Container>
      <Box sx={{ justifyContent: "center", bgcolor: "#f5f5f5" }}>
        <Container>
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
