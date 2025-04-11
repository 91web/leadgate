import React from "react";
import Box from "@mui/material/Box";
import BannerSection from "./banner";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ServiceHero from "./service-hero";

const SecondService = () => {
  return (
    <Box>
      <BannerSection bannerText="Skincare Products and Consultation" />
      <Container maxWidth="lg">
        {/* Service Overview Section */}
        <Box>
          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Service Overview
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            Your skin deserves the best care. At Lead Gate, we offer a variety
            of dermatologist-recommended skincare products alongside expert
            consultations to help you achieve healthy and glowing skin.
          </Typography>
        </Box>
        <ServiceHero filteredIds={[1, 2]} />
      </Container>
    </Box>
  );
};

export default SecondService;
