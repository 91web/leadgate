"use client";
import Box from "@mui/material/Box";
import React from "react";
import HeroSlider from "./components/slide-home";
import Container from "@mui/material/Container";
import CoreDivisions from "./components/core-division";
import FeatureProject from "./components/feature-projects";
//import useMediaQuery from "@mui/material/useMediaQuery";
import CareerForm from "./components/career-form";
import TestimonialSlider from "@/app/group/components/group-home/testimonial-slide";

const AppHome = () => {
 // const isMobile = useMediaQuery("(max-width:900px)");
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

      <TestimonialSlider />

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1311111191385!2d7.483637874067109!3d9.051803388633543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bad020a83f5%3A0x72ae3c4b48c662f!2sLeadway%20House!5e0!3m2!1sen!2sng!4v1738223581460!5m2!1sen!2sng"
            width={1200}
            height={450}
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AppHome;
