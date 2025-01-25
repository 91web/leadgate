"use client";
import PharmaHero from "./conponents/cover-pharma";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ServiceCards from "./conponents/service-card";
import PharmaCards from "./conponents/pharma-division";
import InstagramHero from "./conponents/insta-hero";
import SubscriptionPharma from "./conponents/subscribe-pharma";
const AppPharmacy = () => {
  return (
    <Box>
      <div>
        <h1>App Pharmacy</h1>
      </div>
      <Box>
        <PharmaHero />
      </Box>
      <Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              my: 5,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#475467",
                "&:hover": {
                  backgroundColor: "#E0E0E0",
                },
                textTransform: "none",
                width: "180px",
                px: 1,
                my: 1,
              }}
            >
              <LocationOnIcon /> Locate Our Store
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6B8F24",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#556B2F",
                },
                textTransform: "none",
                width: "180px",
                px: 1,
                mb: 1,
              }}
            >
              <WhatsAppIcon /> Chat on Whatsapp
            </Button>
          </Box>
        </Box>
        <Box pb={10}>
          <Container maxWidth="lg">
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                display: "block",
                pt: { sx: 2, md: 10 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "30px" },
                  fontFamily: "lora",
                  fontWeight: "medium",
                  color: "#101828",
                  px: { sx: 2, md: 0 },
                  // mt: { sx: 2, md: 5 },
                }}
              >
                Our Services
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "inter",
                  fontWeight: "regular",
                  color: "#475467",
                  px: { sx: 2, md: 0 },
                  mb: 5,
                  width: { sx: "100%", md: "45%" },
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
                blandit lectus integer pulvinar dui est.
              </Typography>
            </Box>

            <Box>
              <ServiceCards />
            </Box>
          </Container>
        </Box>
      </Box>
      <Box bgcolor={"#F2F4F7"}>
        <Box pt={{sx:5, md:8}}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "regular",
              mb: 1,
              color: "#6B8F24",
              fontSize: "16px",
              fontFamily: "inter",
              textAlign: "center",
            }}
          >
            What you will find in our Retail Pharmacy and Supermarket services
            division
          </Typography>

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
            Retail Pharmacy and Supermarket Services Division
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <PharmaCards />
        </Container>

        <Box pb={"60px"} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8F24",
              color: "#fff",
              fontSize: "18px",
              fontFamily: "inter",
              fontWeight: "regular",
              "&:hover": {
                backgroundColor: "#556B2F",
              },
              textTransform: "none",
              width: { xs: "250px", sm: "250px" },
              px: 1,
            }}
          >
            Locate the nearest outlet
          </Button>
        </Box>
      </Box>

      <Box></Box>
      <Box pb={"30px"}>
        <Container maxWidth="lg">
          <Box py={"35px"}>
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
              Connect with us on Instagram
            </Typography>
          </Box>
          <InstagramHero />
        </Container>
      </Box>
      <Box bgcolor={"#F2F4F7"} mt={2}>
        <SubscriptionPharma />
      </Box>
    </Box>
  );
};

export default AppPharmacy;
