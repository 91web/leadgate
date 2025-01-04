"use client";
import Box from "@mui/material/Box";
import HeroSlider from "./components/home.section-hero";
import CoreDivisions from "./components/core-division";
import { Container } from "@mui/material";
import DreamGroup from "./components/dream-group";
import  FeatureProject from "./components/feature-projects";
import TestimonialHero from "./components/testmonial/page";
import BuildingHero from "./components/building-hero";
import TestBg from '../../assets/img/testimonial3.png';

const AppGroup = () => {
  return (
    <Box  sx={{backgroundColor:"#F9F5FF" }} >
      <div>
        <h1>App LeadGate Group</h1>
      </div>
      <HeroSlider/>
      <Container>
      <CoreDivisions/>
      </Container>
      <Box  sx={{backgroundColor:"#fff" }} >
      <Container>
      <DreamGroup/>
      </Container>
      </Box>
      <Box  >
      <Container>
      < FeatureProject/>
      </Container>
      </Box>
      <Box>
        <BuildingHero/>
        </Box>
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // Aligns the cards to the right
        alignItems: 'center', // Centers the cards vertically
        width: '100%',
        height: '100vh', // Full height of the viewport
        backgroundImage: `url(${TestBg.src})`, // Set your background image URL here
        backgroundSize: 'cover', // Cover the entire container with the background image
        backgroundPosition: 'center', // Center the background image
       // padding: 3, // Optional: Adjust padding for spacing
      }}
    >
      <TestimonialHero/>
     </Box>
  
    </Box>
  );
};

export default AppGroup;
