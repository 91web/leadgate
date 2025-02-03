import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Construction1 from "../../../assets/img/construction-hero1.png";
import AboutGrid from "./about-grid";

const AboutHero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ my: { xs: "none", md: 10 } }}
      id={"about"}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 7 }} my={8}>
          <Box>
            <AboutGrid />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box display={{ xs: "none", md: "block" }}>
            <Image
              src={Construction1.src}
              alt="About Building"
              width={60}
              height={30}
              layout="responsive"
              priority
            />
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AboutHero;
