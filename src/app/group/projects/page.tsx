"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProjectCover from "./components/project-cover";
import useMediaQuery from "@mui/material/useMediaQuery";
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
        <ProjectCover />
      </Box>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            //  py: 4, // Add padding top and bottom
            //   px: 2, // Add padding for smaller devices
            // maxWidth: "800px",
            // margin: "0 auto", // Center the box horizontally
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "medium",
              fontFamily: "Lora",
              color: "#1D2939",
              fontSize: { xs: "26px", md: "30px" },
              mt: { xs: 5, md: 10 },
              p: 2,
            }}
          >
            Our Services
          </Typography>

          {/* Description */}
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "regular",
                fontFamily: "inter",
                color: "#344054",
                textAlign: "center",
                fontSize: { xs: "14px", md: "17px" },
                p: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo
              <br /> volutpat nulla at. Porttitor pellentesque diam urna aliquet
              in ut.
            </Typography>
          </Box>
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
              backgroundColor: "#AE883B", // Gold color
              color: "#fff", // White text
              fontFamily: "Inter", // Font family
              fontWeight: "medium",
              textTransform: "none", // Prevent uppercase transformation
              padding: "10px 20px", // Padding for better size
              borderRadius: "8px", // Rounded corners
              fontSize: "17px",
              // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
              "&:hover": {
                backgroundColor: "#8F6D25", // Darker gold on hover
              },
              //  mb:2
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box bgcolor={"#F2F4F7"} py={10}>
          <Box
            sx={{
              textAlign: "center",
              //  py: 4, // Add padding top and bottom
              //   px: 2, // Add padding for smaller devices
              // Add margin-bottom for spacing
              // margin: "0 auto", // Center the box horizontally
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "medium",
                fontFamily: "Lora",
                color: "#1D2939",
                fontSize: { xs: "26px", md: "30px" },
                // mt:{xs:2, md:10},
                p: 2,
              }}
            >
              Latest Project
            </Typography>

            {/* Description */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "regular",
                  fontFamily: "Lora",
                  color: "#344054",
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "17px" },
                  p: 2,
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo
                <br /> volutpat nulla at. Porttitor pellentesque diam urna
                aliquet in ut.
              </Typography>
            </Box>
          </Box>

          <Container maxWidth="lg">
            <ProjectCard />
          </Container>
        </Box>
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
    </Box>
  );
};

export default ProjectsPage;
