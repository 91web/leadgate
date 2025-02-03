"use client";
import React from "react";
import PartnerSection from "../../partners/components/partner-cover";
import Box from "@mui/material/Box";
import ContactForm from "../../partners/components/contact-form";
import PartnerCard from "../../partners/components/part-card";
import Container from "@mui/material/Container";
import FeatureProject from "../../project/components/feature-projects";
import PropertyCard from "../../partners/components/property-card";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  PartnerHomeData,
  PartnerHomeType,
} from "../../partners/components/static-data/data";

const PartnerPage = () => {
  const properties: PartnerHomeType[] = PartnerHomeData;
  return (
    <Box>
      <Box>
        <PartnerSection />
      </Box>
      <Box>
        <Container maxWidth={"lg"}>
          <PartnerCard />
        </Container>
      </Box>
      <Box bgcolor={"#F2F4F7"}>
        <Container maxWidth="lg">
          <FeatureProject />
        </Container>
      </Box>
      <Box>
        <Container maxWidth={"lg"}>
          <PropertyCard />
        </Container>
      </Box>
      <Box my={{ xs: 5, md: 8 }}>
        <ContactForm />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", my: { xs: 2, md: 8 } }}
      >
        <Grid container spacing={2} justifyContent="center">
          {properties.map((property, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={0} sx={{ maxWidth: 400, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={property.image}
                  alt={property.title}
                  sx={{ px: 2 }}
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000",
                      fontFamily: "'Inter'",
                      fontSize: "16px",
                      fontWeight: "medium",
                    }}
                  >
                    {property.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PartnerPage;
