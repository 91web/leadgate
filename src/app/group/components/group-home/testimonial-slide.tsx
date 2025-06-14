"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import { TestimonialData, TestimonialType } from "../static-data/data";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import TestimonialBg1 from "../../../../assets/img/testimonial-bg1.png";
import TestimonialBg2 from "../../../../assets/img/testimonial-bg2.png";

const TestimonialSlider = () => {
  // Sample data for testimonials
  const testimonials: TestimonialType[] = TestimonialData;
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleBack = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const NavigationButtons = () => (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "left", mb: 2 }}>
      <IconButton
        onClick={handleBack}
        sx={{
          color: "#AE883B",
          // bgcolor: 'action.hover',
          "&:hover": { bgcolor: "action.selected" },
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          color: "#AE883B",
          // bgcolor: 'action.hover',
          "&:hover": { bgcolor: "action.selected" },
        }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "100%", md: "120vh" },
        backgroundImage: {
          xs: `url(${TestimonialBg2.src})`,
          md: `url(${TestimonialBg1.src})`,
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignContent: "center",
        justifyContent: "center",
        py: { xs: 5, md: 0 },

        backgroundRepeat: "no-repeat", // Prevents image from repeating
      }}
    >
      <Box ml={{ xs: "2%", md: "10%" }} sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4, // spacing between nav + swiper
            width: "100%",
          }}
        >
          {/* Left: Navigation + Title */}
          <Box sx={{ width: { xs: "100%", md: "20%" } }}>
            <Typography
              sx={{
                color: "#AE883B",
                fontSize: "16px",
                textTransform: "none",
                fontWeight: "regular",
                letterSpacing: "0.1em",
                mb: 1,
              }}
            >
              Testimonials
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "lora",
                color: "#000",
                fontSize: "26px",
                fontWeight: "medium",
                mb: 3,
              }}
            >
              Client Reviews
            </Typography>

            <NavigationButtons />
          </Box>

          {/* Right: Swiper */}
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              top: { xs: "10px", md: "none" },
            }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Scrollbar]}
              spaceBetween={20}
              onSwiper={setSwiper}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
              pagination={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 1.4,
                },
                900: {
                  slidesPerView: 1.7,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      borderRadius: "12px",
                      boxShadow: "none",
                      border: "1px solid rgba(0, 0, 0, 0.12)",
                      height: { xs: "300px", md: "260px" },
                      backgroundColor: "#fff",
                      padding: { xs: "10px", md: "20px" },
                      zIndex: 1, // Ensure it's above the background
                      //   position: "absolute", // Position the card relative to the parent box
                      top: "-50px",
                    }}
                  >
                    <CardHeader
                      title={
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: "bold",
                            color: "#344054",
                            fontFamily: "inter",
                            fontSize: "20px",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                      }
                      subheader={
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#808080",
                            fontSize: "14px",
                            fontWeight: "regular",
                            fontFamily: "inter",
                          }}
                        >
                          {testimonial.title}
                        </Typography>
                      }
                    />
                    <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
                      <Typography
                        sx={{
                          color: "text.primary",
                          lineHeight: "140%",
                          fontWeight: "regular",
                          fontFamily: "inter",
                          fontSize: 16,
                        }}
                      >
                        {testimonial.feedback}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
