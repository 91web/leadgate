"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2"; // Use this for the experimental Grid2 API
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ServiceType, ServiceData } from "../../components/static-data/data";
import Link from "next/link";

interface ServiceHeroProps {
  filteredIds?: number[]; // Optional prop to filter services by their IDs
}

const services: ServiceType[] = ServiceData;

const ServiceHero = ({ filteredIds }: ServiceHeroProps) => {
  // Filter services based on `filteredIds` (if provided)
  const filteredServices = filteredIds
    ? services.filter((service) => filteredIds.includes(Number(service.id)))
    : services;

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Grid2 container spacing={2} justifyContent="center">
        {filteredServices.map((service, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }} key={index}>
            {/* Link to the dynamic service page */}
            <Link
              href={`/pharmaceuticals/service/${service.id}/${service.title}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
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
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#6B8F24",
                      color: "#6B8F24",
                      fontWeight: "regular",
                      fontFamily: "inter",
                      lineHeight: 1.4,
                      textTransform: "none",
                      fontSize: { xs: "12px", md: "15px" },
                      "&:hover": { textDecoration: "none" },
                    }}
                    endIcon={<span>&rarr;</span>}
                  >
                    {service.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ServiceHero;
