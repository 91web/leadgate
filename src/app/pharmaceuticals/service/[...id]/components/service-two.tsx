import React from "react";
import Box from "@mui/material/Box";
import BannerSection from "./banner";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ServiceHero from "./service-hero";


const SecondService = () => {
  return (
    <Box>
      <BannerSection bannerText="Hospital and Institutional Supply" />
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
            We collaborate with hospitals, clinics, and healthcare institutions
            to provide customized pharmaceutical supply solutions. Our dedicated
            team ensures seamless logistics to meet the unique needs of each
            healthcare provider, ensuring availability and continuity of care.
          </Typography>
        </Box>

        <ServiceHero filteredIds={[1, 3]} />
      </Container>
    </Box>
  );
};

export default SecondService;
