const details = [
  { label: "Price from", value: "NGN 900,000,000" },
  { label: "Location", value: "KATEMPE" },
  { label: "Apartment From", value: "4 BEDROOM" },
  { label: "Property Type", value: "RESIDENTIAL" },
  { label: "25 Units Available", value: "LIMITED SLOTS" },
];

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PartnerHero1 from "../../../../assets/img/partner-home-cover.png";
import IconButton from "@mui/material/IconButton";

export default function PartnerSection() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "650px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
        backgroundImage: `url(${PartnerHero1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          mt: 20,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontFamily: "'Lora'",
            fontWeight: "medium",
            fontSize: { xs: "22px", md: "40px" },
            mb: 2,
          }}
        >
          Ornate Park
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontFamily: "'Inter'",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "regular",
          }}
        >
          Luxury Living in the Heart of Abuja
        </Typography>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: 0,
          right: 0,
          zIndex: 2,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1, p: 2, bgcolor: "#FCF7EB" }}>
            {/* Swiper for Small Screens */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
              }}
            >
              <Swiper
                modules={[Navigation]}
                slidesPerView={1} // Only one per slide
                centeredSlides={true} // Centers the item
                spaceBetween={10}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
              >
                {details.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Box sx={{ textAlign: "center", py: 2 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#7A7A7A",
                          fontFamily: "medium",
                          fontSize: "24px",
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000",
                          fontFamily: "'Inter'",
                          fontSize: "13px",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation Buttons */}
              <IconButton
                className="prev-btn"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 10,
                  zIndex: 10,
                  bgcolor: "white",
                  ":hover": { bgcolor: "#ddd" },
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton
                className="next-btn"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  zIndex: 10,
                  bgcolor: "white",
                  ":hover": { bgcolor: "#ddd" },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Grid for Larger Screens */}
            <Grid
              container
              // spacing={}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {details.map((item, index) => (
                <Box
                  key={index}
                  sx={{ justifyContent: "space-between", py: 1, mx: 4 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#7A7A7A",
                      fontFamily: "medium",
                      fontSize: "24px",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000",
                      fontFamily: "'Inter'",
                      fontSize: "13px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
