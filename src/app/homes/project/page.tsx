"use client";
import Box from "@mui/material/Box";
import React from "react";
import HeroSlider from "./components/slide-home";
import Container from "@mui/material/Container";
import CoreDivisions from "./components/core-division";
import FeatureProject from "./components/feature-projects";
import useMediaQuery from "@mui/material/useMediaQuery";
import TestBg1 from "../../../assets/img/bg-testimonial1.jpg";
import TestBg2 from "../../../assets/img/bg-testimonial2.png";
import TestimonialHero from "../../group/components/group-home/avatar-hero";
import CareerForm from "./components/career-form";
import Image from "next/image";
import MapHome from "../../../assets/img/map-home2.png";
const AppHome = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box>
      <HeroSlider />
      <Box sx={{ backgroundColor: "#fff" }}>
        <CoreDivisions />
      </Box>
      <Box bgcolor={"#F2F4F7"}>
        <Container maxWidth="lg">
          <FeatureProject />
        </Container>
      </Box>
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
      <Box bgcolor={"#F2F4F7"}>
        <Box>
          <CareerForm />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={MapHome.src}
            alt="Map Home"
            width={1150}
            height={150}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AppHome;
