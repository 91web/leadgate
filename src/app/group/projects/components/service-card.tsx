"use client";
import React from "react";
import { Grid2, Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { ServiceType, ServiceData } from "./static-data/data";



const services:  ServiceType [] = ServiceData;

const ServiceCards = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid2 container spacing={2}>
        {services.map((service, index) => (
          <Grid2 size={{xs: 12, sm:6, md:4}} key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                //boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#F2F4F7",
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
                      fontSize:{xs:'18px', md:'20px'},
                        fontFamily:'inter'}}
                        >

                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    mb: 2,
                    fontSize:{xs:'14px', md:'16px'},
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#AE883B",
                    fontWeight: "medium",
                    textTransform: "none",
                    fontSize:{xs:'12px', md:'14px'},
                    "&:hover": { textDecoration: "none" },
                  }}
                  endIcon={<span>&rarr;</span>}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ServiceCards;
