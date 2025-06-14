import React from "react";
import Box from "@mui/material/Box";
import CoverHero from "./component/cover-hero";
import CardHero from "./component/card-hero";
import Container from "@mui/material/Container";
import BgImage1 from "../../../assets/img/bg-pharma-about.png";
import BgImage2 from "../../../assets/img/bg-pharma-about2.png";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import DataGrid from "./component/card-data";
import ContactForm from "./component/contact-form";
import MissionCard from "./component/mission-card";
import ActionButtons from "../components/action-button";

const AboutUsPharma = () => {
  return (
    <Box>
      <CoverHero />

      <ActionButtons />
      <Box
        sx={{
          backgroundImage: { xs: "none", md: `url(${BgImage1.src})` },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //  display:{xs:'none', md:'block'}
        }}
      >
        <Container maxWidth="lg">
          <CardHero />
        </Container>
      </Box>
      <Box
        py={"30px"}
        sx={{
          bgcolor: "#F2F4F7",
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "medium",
            mb: 1,
            color: "#344054",
            fontSize: { xs: "24px", md: "30px" },
            fontFamily: "lora",
            textAlign: "center",
          }}
        >
          Our Mission is Centered around three Core Principles
        </Typography>
        <MissionCard />
      </Box>

      <Box
        py={"30px"}
        sx={{
          backgroundImage: `linear-gradient(to top, white, rgba(255, 255, 255, 0.1)), url(${BgImage2.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //  display:{xs:'none', md:'block'}
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "medium",
            mt: 5,
            color: "#344054",
            fontSize: { xs: "24px", md: "30px" },
            fontFamily: "lora",
            textAlign: "center",
          }}
        >
          Values we Hold at Leadgate Pharmacy & Store
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "regular",
            mb: 1,
            color: "#475467",
            fontSize: "16px",
            fontFamily: "inter",
            textAlign: "center",
            px: 1,
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Viverra magna habitant blandit
          lectus integer.
        </Typography>
      </Box>

      <Box mb={4}>
        <Container maxWidth="lg">
          <DataGrid />
        </Container>
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        <Divider />
        <Box my={{ xs: 5, md: 8 }}>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsPharma;
