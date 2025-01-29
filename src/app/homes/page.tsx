"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import EstateSlider from "./components/slide-home";
import PropertyCards from "./components/property-feature";
//import AvatarButton from "./components/avatar";
import EventBg from "../../assets/img/event-bg.png";
import TestimonialHero from "../group/components/group-home/avatar-hero";
import useMediaQuery from "@mui/material/useMediaQuery";
import TestBg1 from "../../assets/img/bg-testimonial1.jpg";
import TestBg2 from "../../assets/img/bg-testimonial2.png";
import ContactForm from "./components/contact-form";
import MapCard from "./components/map-card";
import Divider  from "@mui/material/Divider";

const AppHomes = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      <Box>
        <EstateSlider />
      </Box>

      <Box py={3}>
        <Container maxWidth="lg">
          <PropertyCards />
        </Container>
      </Box>
        <Box bgcolor={"#F2F4F7"} py={{ xs: 5, md: 10 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                backgroundImage: `url(${EventBg.src})`, // Correct syntax for backgroundImage
                backgroundSize: "cover", // Ensures the image covers the entire Box
                backgroundPosition: "center", // Centers the image
                width: "100%", // Set width as needed
                height: "500px", // Set height as needed
              }}
            >
         
            </Box>
          </Container>
        </Box>
      <Box>
        <Container maxWidth="lg">
          <MapCard/>
        </Container>
      </Box>
      <Divider/>
      <Box py={5} bgcolor={"#fff"}>
        <Box
          sx={{
            backgroundImage: isMobile
              ? `url(${TestBg1.src})` //  the mobile image
              : `url(${TestBg2.src})`, // the desktop image
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: "50vh", md: "100vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TestimonialHero />
        </Box>
        </Box>
      <Box py={{xs:5, md:8}}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default AppHomes;
