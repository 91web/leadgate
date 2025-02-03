import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import ProjectEvent from "../../../../assets/img/project-gallery1.png";
import Image from "next/image";
import { ProjectData, ProjectType } from "./static-data/data";

// Sample images with content for overlays
const projects: ProjectType[] = ProjectData;

const FeatureProjects = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Lora",
            fontWeight: "medium",
            color: "#344054",
            fontSize: { xs: "24px", md: "30px" },
          }}
        >
          Projects Gallery
        </Typography>
      </Box>
      <Box>
        <Box
          py={5}
          display={{ xs: "none", md: "block" }}
          sx={{ textAlign: "center" }}
        >
          <Image
            src={ProjectEvent.src}
            alt="Project Gallery"
            height={426}
            width={1160}
            style={{ margin: "0 auto" }}
          />
        </Box>
      </Box>
      {/* Projects Grid */}
      <Grid2 container spacing={2}>
        {projects.map((project, index) => (
          <Grid2 size={{ xs: 12, md: 3 }} key={index}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                "&:hover .overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              {/* Image */}
              <Card
                elevation={0}
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Card>

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0,
                  transform: "translateY(100%)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "lora",
                    fontWeight: "regular",
                    mb: "1px",
                    fontSize: "16px",
                    color: "color.primary",
                    textAlign: "center",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "Bold",
                    fontSize: "24px",
                    mb: "1px",
                    textAlign: "center",
                  }}
                >
                  {project.subtitle}
                </Typography>
                <Button
                  sx={{
                    color: "#AE883B",
                    fontFamily: "inter",
                    fontWeight: "bold",
                    opacity: "10px",
                    textAlign: "center",
                    fontSize: "18px",
                    textTransform: "none",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  {project.linkText}
                </Button>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FeatureProjects;
