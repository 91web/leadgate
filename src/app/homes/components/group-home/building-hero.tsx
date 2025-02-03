"use client"
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import TestHero1 from "../../../../assets/img/testimonial1.png";
import { useRouter } from "next/navigation";

const BuildingHero = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/group/contact-us')
  }

  return (
  <Box  sx={{ bgcolor: "#fff" }} >
      {/* Hero Section */}
      <Box py={3}
        sx={{
          height: "426px",
          backgroundImage: `url(${TestHero1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "medium",
            fontFamily: "Lora",
            mb: 2,
            fontSize: { xs: "24px", md: "30px", maxWidth: "600px" },
            color:'#fff'
          }}
        >
          We are passionate about building Dreams, Elevating Health and Creating
          Lasting Values
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            maxWidth: "600px",
            mb: 3,
            fontWeight: "regular",
            color: "#ada6a6",
            px:2
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit
          lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui
          est. Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <Button
          variant="contained"
          onClick={handleNavigate}
          sx={{
            backgroundColor: "#AE883B",
            color: "white",
            borderRadius: "8px",
            px: 3,
            py: 1,
            textTransform: "none",
            "&:hover": { backgroundColor: "#926d2c" },
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};
export default BuildingHero;
