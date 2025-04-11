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
import OrnateHero1 from "../../../../../assets/img/leadcity1.png";
import OrnateEvent from "../../../../../assets/img/leadcity2.png";
import FeatureProjects from "./components/gallery";
import HeaderImage from "../../../../../assets/img/leadcity3.png";
import { ProjectData2 } from "./components/data";
import PropertyEvent from "../../../../../assets/img/leadcity8.png";

const CampariPage: React.FC = () => {
  const handleBrochureClick = () => {
    console.log("Download Brochure clicked!");
  };

  const properties: PartnerHomeType[] = PartnerHomeData;
  const details = [
    { label: "Price from", value: "NGN 5,500,000" },
    { label: "Location", value: "KETTI KABUSA" },
    { label: "Apartment", value: "5 BEDROOM" },
    { label: "Property Type", value: "RESIDENTIAL" },
    { label: "37 Units Available", value: "LIMITED SLOTS" },
  ];
  return (
    <Box>
      <PartnerSection
        title="Lead City Octagon"
        subtitle="Own it. Live it. Enjoy all of it."
        backgroundImage={OrnateHero1.src}
        details={details}
        height={700}
        overlayOpacity={0.6}
      />

      <Container maxWidth={"lg"}>
        <PartnerCard
          title="About Leadcity Octagon "
          description={
            <>
              Leadcity Octagon is a luxurious residential estate located in the
              heart of Ketti-Kabusa, by Pyakassa Road, Abuja, Nigeria.
              <br /> <br />
              This exquisite project offers a serene and tranquil environment,
              perfect for individuals and families seeking a peaceful and
              comfortable living experience.
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
            projects={ProjectData2}
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
          description="Leadcity Octagon is strategically located in the heart of Ketti-Kabusa, by Pyakassa Road, Abuja, providing easy access to major roads, amenities, and services. The estate is: "
          highlights1={[
            "10 minutes from Nnamdi Azikwe International Airport",
            "5 minutes from Shoprite (Novare Gateway Mall)",
            "3 minutes drive from airport express road",
            "Close proximity to schools, hospitals, market, and shopping centers",
          ]}
          highlightsTitle="Estate Features"
          description1="The estate boasts of modern infrastructure and amenities, including:"
          highlights={[
            "Well-paved roads and drainage system",
            "Electricity and water supply",
            "Security gates and CCTV cameras",
            "Recreational facilities",
            "Landscaped gardens and green areas",
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
