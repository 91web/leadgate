"use client";
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ValueData, ValueType } from '../components/static-data/data';

// Array of core values imported from static data
const ValueInfo: ValueType[] = ValueData;

const CoreValue = () => {
  return (
    <Box sx={{ height: '50vh', padding: 5 }}>
      {/* Title Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'medium',
            fontFamily: 'lora',
            color: '#344054',
            fontSize: { xs: '24px', md: '26px' },
            width: { xs: '100%', md: '58%' },
          }}
        >
          Core Values
        </Typography>
      </Box>

      {/* Swiper Section */}
      <Box mt={4} position="relative">
        {/* Left Arrow */}
        <IconButton
          className="swiper-button-prev"
          sx={{
            position: 'absolute',
            left: -50,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            fontSize: '10px',
            color: '#344054',
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          className="swiper-button-next"
          sx={{
            position: 'absolute',
            right: -40,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            fontSize: '10px',
            color: '#344054',
          }}
        >
          <NavigateNextIcon />
        </IconButton>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="height: 8px; width: 8px; background-color: #AE883B; border-radius: 50%; display: inline-block; margin-right: 4px;"></span>`,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
          }}
        >
          {ValueInfo.map((info, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  minWidth: 200,
                  padding: 2,
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  borderRadius: '12px',
                  textAlign: 'left',
                  backgroundColor: '#fff',
                  position: 'relative',
                }}
              >
                {/* Card Content */}
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontWeight: 'medium',
                  }}
                >
                  {info.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 'regular',
                  }}
                >
                  {info.descriptions}
                </Typography>

                {/* Navigation Dots */}
                <Box
                  className="swiper-pagination"
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '4px',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default CoreValue;
