"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2"; // Use this for the experimental Grid2 API
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ServiceProjectType, ServiceProjectData } from "./static-data/data";

const ProjectService = () => {
  const projects: ServiceProjectType[] = ServiceProjectData;
  return (
    <Box sx={{ py: { xs: 0, md: 2 } }}>
      <Grid2 container spacing={2}>
        {projects.map((project, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                //  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />

              {/* Content */}
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "medium",
                    mb: 1,
                    color: "#755921",
                    fontSize: { xs: "12px", sm: "14px" },
                    fontFamily: "inter",
                  }}
                >
                  {project.subtitle}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#344054",
                    fontSize: { xs: "24px", sm: "26px" },
                    fontFamily: "inter",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    mb: 2,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#AE883B",
                    fontWeight: "medium",
                    textTransform: "none",
                    fontSize: { xs: "12px", md: "14px" },
                    "&:hover": { textDecoration: "none" },
                  }}
                  endIcon={<span>&rarr;</span>}
                >
                  {project.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProjectService;
