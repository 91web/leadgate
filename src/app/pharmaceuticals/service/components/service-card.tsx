import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2"
import ServiceHero1 from "../../../../assets/img/service-card1.png";
import Line1 from "../../../../assets/svg/line-dream.svg";
import Image from "next/image";

const ServiceCard = () => {

  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box width={{ xs: "100%", md: "80%" }}>
           
            {/* Description and Button */}
            <Typography
              variant="h4"
                sx={{
                  fontFamily: "Lora",
                  fontWeight: "medium",
                  color: "#1D2939",
                  lineHeight: 1.4,
                  textAlign: "left",
                  fontSize: { xs: "24px", md: "28px" },
                }}
              >
        Quality Prescription Medications, Safely Delivered to Your Door.
        </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "inter",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "regular",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est. blandit lectus integer
              pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Viverra
              magna habitant blandit lectus integer pulvinar dui est. blandit
              lectus integer pulvinar dui est.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
           
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#AE883B",
                    color: "#ffffff",
                    py: 1,
                    px: 3,
                    fontFamily: "'Inter'",
                    fontWeight: "medium",
                    fontSize: { xs: "14px", md: "17px" },
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#965F2A",
                    },
                  }}
                >
                Chat with a Pharmacist
                </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Grid2
              container
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              sx={{ mb: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    color: "#AE883B",
                    fontWeight: "regular",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Become a Partner
                </Typography>
                <Box
                  component="img"
                  src={Line1.src}
                  alt="Line decoration"
                  sx={{
                    width: "auto",
                    height: "2px",
                    flexShrink: 0,
                  }}
                />
              </Box>
          
            </Grid2>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={ServiceHero1.src}
              alt={"Group Image"}
              height={490}
              width={452}
              style={{ borderRadius: "8px", width: "100%", height: "auto" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ServiceCard;
