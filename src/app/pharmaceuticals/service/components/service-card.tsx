import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import ServiceHero1 from "../../../../assets/img/service-card1.png";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box>
            {/* Description and Button */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Lora",
                fontWeight: "medium",
                color: "#1D2939",
                my: 2,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "24px", md: "30px" },
                width: { xs: "100%", md: "80%" },
              }}
            >
              Quality Prescription Medications, Safely Delivered to Your Door.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "inter",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: { xs: 0, md: 3 },
                fontSize: "16px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
                width: { xs: "100%", md: "80%" },
              }}
            >
              Your health is our priority—experience convenient, trusted service
              with every order.
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6B8F24",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  borderRadius: 2,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#7A9F3C",
                  },
                }}
              >
                Chat with a Pharmacist
              </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={ServiceHero1.src}
              alt={"Group Image"}
              height={490}
              width={452}
              style={{ borderRadius: "8px", width: "100%", height: "auto" }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: { xs: "center", md: "flex-start" },
                my: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6B8F24",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  justifyContent: { xs: "center", md: "flex-start" },
                  borderRadius: 8,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#7A9F3C",
                  },
                }}
              >
                Chat with a Pharmacist
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ServiceCard;
