"use client";
import Box from "@mui/material/Box";
import HeroSlider from "./components/slide-home";
import CoreDivisions from "./components/core-division";
import { Container } from "@mui/material";
import DreamGroup from "./components/dream-group";
import  FeatureProject from "./components/feature-projects";
import BuildingHero from "./components/building-hero";
import TestimonialHero from "./components/avatar-hero";
import TestBg1 from '../../../assets/img/bg-testimonial1.jpg';
import TestBg2 from '../../../assets/img/bg-testimonial2.png';

import { useMediaQuery } from '@mui/material';



const CentralHomePage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
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
      <Box >
      <Container>
      < FeatureProject/>
      </Container>
      </Box>
      <Box mb={2}>
        <BuildingHero/>
      </Box>
    <Box
        sx={{
       backgroundImage: isMobile
       ? `url(${TestBg1.src})` //  the mobile image
       : `url(${TestBg2.src})`, // the desktop image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight:{xs:'50vh',md:'100vh'},
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
 
      <TestimonialHero/>
 
  </Box>
    </Box>
  );
};

export default CentralHomePage;
