import React from "react";
import { Box, Typography, Container, IconButton, Grid2 } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/navigation";

interface DetailItem {
  label: string;
  value: string;
}

interface PartnerSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  details: DetailItem[];
  overlayOpacity?: number;
  height?: number | string;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  details,
  overlayOpacity = 0.5,
  height = 650,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: typeof height === "number" ? `${height}px` : height,
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
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          zIndex: 1,
        },
        backgroundImage: `url(${backgroundImage})`,
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
          {title}
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
          {subtitle}
        </Typography>
      </Container>

      <DetailsSwiper details={details} />
    </Box>
  );
};

const DetailsSwiper: React.FC<{ details: DetailItem[] }> = ({ details }) => {
  return (
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
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1, p: 2, bgcolor: "#FCF7EB" }}>
          {/* Mobile Swiper */}
          <Box
            sx={{ display: { xs: "block", md: "none" }, position: "relative" }}
          >
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={10}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
            >
              {details.map((item, index) => (
                <SwiperSlide key={index}>
                  <DetailItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <NavigationButtons />
          </Box>

          {/* Desktop Grid */}
          <Grid2
            container
            spacing={2}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {details.map((item, index) => (
              <Grid2 key={index} size={{ xs: 6, sm: 4, md: 2 }}>
                <DetailItem item={item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

const DetailItem: React.FC<{ item: DetailItem }> = ({ item }) => {
  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography
        variant="h3"
        sx={{
          color: "#7A7A7A",
          fontFamily: "medium",
          fontSize: "24px",
          mb: 0.5,
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
  );
};

const NavigationButtons = () => {
  return (
    <>
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
        <ArrowBackIosIcon fontSize="small" />
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
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default PartnerSection;
