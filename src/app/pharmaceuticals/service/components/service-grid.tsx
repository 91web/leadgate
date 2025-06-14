"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2"; // Use this for the experimental Grid2 API
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { GridType, GridData } from "./static-data/data";

const services: GridType[] = GridData;

const ServiceGrid = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Grid2 container spacing={2}>
        {services.map((service, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                //boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />

              {/* Content */}
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#344054",
                    fontSize: { xs: "16px", md: "18px" },
                    fontFamily: "inter",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    mb: 2,
                    fontWeight: "regular",
                    fontSize: { xs: "14px", md: "13px" },
                    lineHeight: 1.6,
                    fontFamily: "inter",
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ServiceGrid;
