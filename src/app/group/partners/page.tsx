"use client";
import React from "react";
import PartnerCover from "./components/partner-cover";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TrustPartners from "./components/trust-partners";
import PartnerGrid from "./components/partner-grid";
import PartnerCard from "./components/partner-card";

const PartnerShipPage = () => {
  return (
    <Box>
      <Box>
        <PartnerCover />
      </Box>
      <Box>
        <TrustPartners />
      </Box>
      <Box
        sx={{
          bgcolor: {
            xs: "#FCF7EB", // Mobile
            md: "#F2F4F7", // Desktop
          },
          py: 4,
        }}
      >
        <PartnerGrid />
      </Box>
      <Box>
        <Container maxWidth="lg">
          <PartnerCard />
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: {
            xs: "#FCF7EB", // Mobile
            md: "transparent", // Desktop
          },
          height: { xs: "230px", md: "200px" },
          mb: 0,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: {
                xs: "transparent",
                md: "#FCF7EB",
              },
              borderRadius: 2,
              p: 4,
              display: "flex",
              mb: 5,
              height: "150px",
              justifyContent: "space-between",
              alignItems: "center",
              // boxShadow: { xs: "none", md: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Text Section */}
            <Box sx={{ mb: { xs: 2, md: 0 }, width: { xs: "100%", md: "60%" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "medium",
                  fontFamily: "'Lora'",
                  fontSize: { xs: "24px", md: "30px" },
                  color: "#344054",
                  width: "100%",
                }}
              >
                Join us in Shaping the Future
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "medium",
                  fontFamily: "'Lora'",
                  color: "#667085",
                  fontSize: { xs: "14px", md: "17px" },
                }}
              >
                Whether you are looking to invest, collaborate, or grow your
                business with us, Leadgate Groups offers a partnership that is
                built on trust, excellence, and shared success
              </Typography>
            </Box>

            {/* Button Section */}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AE883B",
                color: "#ffffff",
                py: 1,
                mb: { xs: 2, md: 2 },
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
              Become our Partner
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PartnerShipPage;
