import React from "react";
import { Card, Button, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { ProjectType } from "../../../../../../app/group/components/static-data/data";

interface FeatureProjectsProps {
  projects: ProjectType[];
  headerTitle?: string;
  headerImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  cardHeight?: number | string;
  overlayTransition?: string;
}

const FeatureProjects: React.FC<FeatureProjectsProps> = ({
  projects,
  headerTitle = "Projects Gallery",
  headerImage,
  cardHeight = 300,
  overlayTransition = "all 0.3s ease",
}) => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Lora",
            fontWeight: 500,
            color: "#344054",
            fontSize: { xs: "24px", md: "30px" },
            mb: headerImage ? 4 : 0,
          }}
        >
          {headerTitle}
        </Typography>

        {headerImage && (
          <Box
            py={5}
            sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}
          >
            <Image
              src={headerImage.src}
              alt={headerImage.alt}
              width={headerImage.width || 1160}
              height={headerImage.height || 426}
              style={{ margin: "0 auto" }}
            />
          </Box>
        )}
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProjectCard
              project={project}
              height={cardHeight}
              transition={overlayTransition}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

interface ProjectCardProps {
  project: ProjectType;
  height?: number | string;
  transition?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  height = 300,
  transition = "all 0.3s ease",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        height: typeof height === "number" ? `${height}px` : height,
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
          height: "100%",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title || `Project ${project.subtitle}`}
          sx={{
            width: "100%",
            height: "100%",
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
          bgcolor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          transform: "translateY(100%)",
          transition: transition,
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Lora",
            fontWeight: 400,
            mb: 1,
            color: "primary.main",
            textAlign: "center",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            mb: 2,
            textAlign: "center",
          }}
        >
          {project.subtitle}
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "#AE883B",
            fontWeight: 700,
            fontSize: "18px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          {project.linkText || "View Project"}
        </Button>
      </Box>
    </Box>
  );
};

export default FeatureProjects;
