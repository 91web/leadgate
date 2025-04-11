"use client";
import Box from "@mui/material/Box";
import React from "react";
import HeroSlider from "./components/group-home/slide-home";
import Container from "@mui/material/Container";
import CoreDivisions from "./components/group-home/core-division";
import DreamGroup from "./components/group-home/dream-group";
import BuildingHero from "./components/group-home/building-hero";
import FeatureProject from "./components/group-home/feature-projects";
import useMediaQuery from "@mui/material/useMediaQuery";
import TestimonialSlider from "./components/group-home/testimonial-slide";


const AppGroup = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box sx={{ backgroundColor: "#F9F5FF" }}>
      <HeroSlider />
 
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 5 } }}>
        <CoreDivisions />
      </Container>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
          <DreamGroup />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <FeatureProject />
      </Container>
      <BuildingHero />

      <TestimonialSlider />
    </Box>
  );
};

export default AppGroup;
