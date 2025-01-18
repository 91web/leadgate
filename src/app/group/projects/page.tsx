"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import SlideProject from "./components/slide-project";
import { useMediaQuery } from "@mui/material";
import TestBg1 from "../../../assets/img/bg-testimonial1.jpg";
import TestBg2 from "../../../assets/img/bg-testimonial2.png";
import ServiceCard from "./components/service-card";
import ProjectCard from "./components/project-card";
import TestimonialHero from "../components/group-home/avatar-hero";
const ProjectsPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box>
        <SlideProject />
      </Box>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            py: 4, // Add padding top and bottom
            px: 2, // Add padding for smaller devices
            maxWidth: "800px", // Restrict the width for centered alignment
            margin: "0 auto", // Center the box horizontally
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "Lora, serif",
              color: "#344054", // Adjust heading color
              mb: 2, // Add margin-bottom for spacing
            }}
          >
            Our Services
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "#667085", // Adjust text color for description
              lineHeight: 1.6, // Improve readability
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo volutpat
            nulla at. Porttitor pellentesque diam urna aliquet in ut.
          </Typography>
        </Box>
        <Container>
          <ServiceCard />
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically (if needed)
            height: "100px", // Adjust height to position as required
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A37E2C", // Gold color
              color: "#fff", // White text
              fontFamily: "Inter, sans-serif", // Font family
              fontWeight: "bold",
              textTransform: "none", // Prevent uppercase transformation
              padding: "10px 20px", // Padding for better size
              borderRadius: "8px", // Rounded corners
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
              "&:hover": {
                backgroundColor: "#8F6D25", // Darker gold on hover
              },
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box bgcolor={"#F2F4F7"}>
          <Container>
            <ProjectCard />
          </Container>
        </Box>
      </Box>
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
  );
};

export default ProjectsPage;
