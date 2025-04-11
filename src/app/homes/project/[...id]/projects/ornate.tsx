"use client";
import React from "react";
import Box from "@mui/material/Box";
import ContactForm from "../../../partners/components/contact-form";
import PartnerCard from "../projects/components/about-section";
import Container from "@mui/material/Container";
import PropertyCard from "../../../partners/components/property-card";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  PartnerHomeData,
  PartnerHomeType,
} from "../../../partners/components/static-data/data";
import PartnerSection from "../projects/components/hero-banner";
import OrnateHero1 from "../../../../../assets/img/ornate1.png";
import OrnateEvent from "../../../../../assets/img/ornate2.png";
import FeatureProjects from "./components/gallery";
import HeaderImage from "../../../../../assets/img/ornate3.png";
import { ProjectData1} from "./components/data";
import PropertyEvent from "../../../../../assets/img/ornate8.png";

const CampariPage :React.FC = () => {
  const handleBrochureClick = () => {
    console.log("Download Brochure clicked!");
  };


  const properties: PartnerHomeType[] = PartnerHomeData;
  const details = [
    { label: "Price from", value: "NGN 500,000,000" },
    { label: "Location", value: "KATEMPE" },
    { label: "Apartment From", value: "5 BEDROOM" },
    { label: "Property Type", value: "RESIDENTIAL" },
    { label: "11 Units Available", value: "LIMITED SLOTS" },
  ];
  return (
    <Box>
      <PartnerSection
        title="Ornate Park"
        subtitle="Own it!"
        backgroundImage={OrnateHero1.src}
        details={details}
        height={700}
        overlayOpacity={0.6}
      />

      <Container maxWidth={"lg"}>
        <PartnerCard
          title="About Ornate"
          description={
            <>
              This exceptional residence embodies sophistication, elegance, and
              convenience.
              <br />
              <br />
              Experience tranquil living in an exclusive community with
              excellent road networks, state of the art security, stunning
              natural views, and verdant greenery.
              <br />
              <br />
              Designed to the highest standards and tailored for discerning
              families who appreciate the grandeur lifestyle, each home
              offers...
            </>
          }
          imageSrc={OrnateEvent.src}
          imageAlt="Ornate Park Residence"
          primaryButtonText="Download Brochure"
          secondaryButtonText="Watch Video"
          onPrimaryClick={() => console.log("Download clicked")}
          onSecondaryClick={() => console.log("Play demo clicked")}
        />
      </Container>

      <Box bgcolor={"#F2F4F7"}>
        <Container maxWidth="lg">
          <FeatureProjects
            projects={ProjectData1}
            headerTitle="Projects Gallery"
            headerImage={{
              src: HeaderImage.src,
              alt: "Our Project Gallery",
              width: 1200,
              height: 450,
            }}
            cardHeight={350}
          />
        </Container>
      </Box>

      <Container maxWidth={"lg"}>
        <PropertyCard
          imageSrc={PropertyEvent.src}
          imageAlt="Group Image"
          title="Property Description"
          description="Discover elevated living at Ighalo Residences, a modern sanctuary in the heart of [City/Neighborhood]. Inspired by contemporary elegance and crafted for comfort, this luxury property redefines city living with its upscale amenities, spacious layouts, and unbeatable views."
          highlightsTitle="Property Highlights"
          highlights={[
            "An ante-room 3",
            "Living spaces 5",
            "Spacious bedrooms en-suite",
            "Guest chalet",
            "Rooftop terrace",
            "Electric car charger port",
            "Personalised Elevator system",
            "Central Air conditioner system",
            "An office space, study room, and Gym space",
            "Smart Home automation",
            "CCTV",
            "Cinema",
            "Green area",
            "Ample parking space",
          ]}
          buttonLabel="Download Floor Plan"
          onButtonClick={handleBrochureClick}
        />
      </Container>

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

export default CampariPage;
