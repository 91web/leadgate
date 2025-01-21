"use client";
import Box from "@mui/material/Box";
import HeroSlider from "./components/slide-contructions";
import AboutHero from './components/about-event'
import CardMaterial from "./components/card-material";
import ContactForm from "./components/contact-form";


const AppConstruction = () => {
  return (
    <Box>
        <div>
          <h1>App Construction</h1>
        </div>
        <Box>
          <HeroSlider />
        </Box>
        <Box>
          <AboutHero />
        </Box>
        <Box bgcolor={'#F2F4F7'} pb={{xs: 0, md: 10}}>
          <CardMaterial />
        </Box>
           <Box bgcolor={'#fff'} py={{xs: 0, md: 10}}>
          <ContactForm />
        </Box>
     
    </Box>
  );
};

export default AppConstruction;
