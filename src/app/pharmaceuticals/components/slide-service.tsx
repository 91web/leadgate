"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PharmaSlide, PharmaSlideType } from "./static-data/data";

// Array of images for the cards from static data importesd
const services: PharmaSlideType[] = PharmaSlide;

const PharmaServiceSlide = () => {
  return (
    <Box>
      <Box my={8}>
        {/* Swiper Container */}
        <Swiper
          modules={[ Autoplay]} // Removed Navigation module to hide arrows
          spaceBetween={8}
          slidesPerView={3.2}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay with a 2.5 second interval
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.5 }, // 1 slide on very small screens
            600: { slidesPerView: 2.5 }, // 2 slides on medium screens
            900: { slidesPerView: 3.3 }, // 3 slides on small desktop screens
            1200: { slidesPerView: 3.5 }, // 5 slides on larger desktop screens
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                 // width: "100%", // Ensure full width
                  height: "300px", // Equal height for cards
                  "&:hover .MuiBox-overlay": {
                    opacity: 1,
                    transform: "translateY(0)", // Ensure content shows on hover
                  },
                  "&:hover .MuiTypography-title": {
                    opacity: 0, // Hide title on hover
                  },
                }}
              >
                <Card elevation={0} sx={{ minWidth: 400, margin: "0 8px" }}>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={service.src}
                    title={service.title}
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
                </Card>
                {/* Title always visible */}
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 10,
                    width: "100%",
                    //  backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 18,
                    fontFamily: "Inter",
                    p: 2,
                    zIndex: 1,
                    transition: "opacity 0.3s ease",
                    opacity: 1, // Always visible unless hovered
                  }}
                  className="MuiTypography-title"
                >
                  {service.title}
                </Typography>

                {/* Overlay for hover effect */}
                <Box
                  className="MuiBox-overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    opacity: 0, // Initially hidden
                    transform: "translateY(100%)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      fontFamily: "Inter",
                      p: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      fontFamily: "Inter",
                      p: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default PharmaServiceSlide;
