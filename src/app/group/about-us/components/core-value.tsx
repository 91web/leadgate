"use client";
import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ValueData, ValueType } from "./static-data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  position: "relative",
  "& .swiper-pagination": {
    position: "static",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
  },
  "& .swiper-pagination-bullet": {
    width: "6px",
    height: "6px",
    backgroundColor: "#D1D5DB",
    opacity: 1,
  },
  "& .swiper-pagination-bullet-active": {
    backgroundColor: "#6B7280",
  },
}));

const NavigationButton = styled(Box)(({ theme }) => ({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "#F2F4F7",
  borderRadius: "50%",
  border: "none",
  "& svg": {
    fontSize: "24px",
    color: theme.palette.text.secondary,
  },
  "&.swiper-button-disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  "&::after": {
    display: "none",
  },
}));

const coreValues: ValueType[] = ValueData;

export default function CoreValue() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          mt: 5,
          fontSize: { xs: "22px", md: "24px" },
          fontWeight: "medium",
          fontFamily: "lora",
          color:'#667085'
        }}
      >
        Our Core Values
      </Typography>

      <Box sx={{ position: "relative" }}>
        <StyledSwiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Set activeIndex based on active slide
        >
          {coreValues.map((value) => (
            <SwiperSlide key={value.id}>
              <Box
                sx={{
                  p: { xs: 1, md: 5 },
                  backgroundColor: "background.paper",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "medium",
                      color: "#344054",
                    }}
                  >
                    {value.id}.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "18px", md: "20px" },
                      fontWeight: "medium",
                      fontFamily: "inter",
                      color: "#344054",
                    }}
                  >
                    {value.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#667085",
                    lineHeight: 1.7,
                    fontWeight: "regular",
                    fontFamily: "inter",
                    ml: 6,
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {value.descriptions}

                  {/* Custom Pagination for each Slide */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "left",
                      }}
                    >
                      {coreValues.map((_, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            width: "6px",
                            height: "6px",
                            backgroundColor:
                              activeIndex === idx ? "#6B7280" : "#D1D5DB",
                            borderRadius: "50%",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                          }}
                          onClick={() => setActiveIndex(idx)} // Set active index when clicked
                        />
                      ))}
                    </Box>
                  </Box>
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <Box
          sx={{
            justifyContent: "center",
            mt: 2,
            display: { xs: "none", md: "flex" },
            gap: 2,
          }}
        >
          <NavigationButton className="swiper-button-prev">
            <ChevronLeftIcon />
          </NavigationButton>
          <NavigationButton className="swiper-button-next">
            <ChevronRightIcon />
          </NavigationButton>
        </Box>

        {/* Mobile Navigation Buttons */}
        <Box
          sx={{
            justifyContent: "center",
            display: { xs: "flex", md: "none" },
            gap: 2,
            position: "absolute",
            left: "50%",
          }}
        >
          {/* Previous Button */}
          <NavigationButton className="swiper-button-prev">
            <ChevronRightIcon sx={{ transform: "rotate(360deg)" }} />
          </NavigationButton>

          {/* Next Button */}
          <NavigationButton className="swiper-button-next">
            <ChevronLeftIcon sx={{ transform: "rotate(360deg)" }} />
          </NavigationButton>
        </Box>
      </Box>
    </Container>
  );
}
