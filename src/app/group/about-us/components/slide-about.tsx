"use client"; 
import React from 'react';
import { Box, Typography ,Grid2 } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AboutHero, AboutHeroType } from './static-data/data';

// Array of images for the cards from static data importesd
const images: AboutHeroType[] = AboutHero;

const SlideHero = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
         // mb:"5px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'regular',
            fontFamily: 'lora',
            color: '#344054',
            pt:10,
            fontSize: { xs: '32px', md: '40px' },
            width: { xs: '100%', md: '60%' },
          }}
        >
          We combine expertise to deliver innovative Solutions in Real Estate, Construction & Pharmaceuticals
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 'regular',
            fontFamily: 'lora',
            color: '#344054',
            fontSize: '16px',
            width: { xs: '85%', md: '100%' },
          }}
        >
          This is our story of how we’ve evolved over the years to serve our customers in more excellent ways.
        </Typography>
      </Box>
          <Box my={8}>
      {/* Swiper Container */}
      <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation module to hide arrows
          spaceBetween={8}
          slidesPerView={6} 
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay with a 2.5 second interval
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on very small screens
            600: { slidesPerView: 2 }, // 2 slides on medium screens
            900: { slidesPerView: 3 }, // 3 slides on small desktop screens
            1200: { slidesPerView: 5 }, // 5 slides on larger desktop screens
          }}
        >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ minWidth: 200, margin: '0 8px' }}>
              <CardMedia
                sx={{ height: 330 }}
                image={image.src}
                title={image.alt}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>

      <Box sx={{ justifyContent: 'center' , mt:2  ,bgcolor:'#f5f5f5'}}> 
                <Typography 
                variant="h4"
                gutterBottom
                sx={{
                    fontWeight: 'medium',
                    fontFamily: 'inter',
                    color: '#344054',
                    fontSize: { xs: '16px', md: '20px' },
                    width: "100%",
                    textAlign: 'center',
                    p:3,
                }}>
                    Evidence of Excellence over the Years
                </Typography>

          <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}
            >
            <Grid2 container spacing={4} justifyContent="center" my={2}>
                <Grid2 size="auto">
                <Box textAlign={'center'}>
                    <Typography
                                    variant="h5"
                                    sx={{
                                      fontWeight: 'medium',
                                      color: "#1D2939",
                                      fontSize:'28px',
                                      textAlign: "center",
                                      fontFamily: "'Lora'",
                                    }}
                                  >
                                    30+
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: "#475467",
                                      textAlign: "center",
                                      fontSize:'12px',
                                      fontFamily: "'Inter'",
                                      fontWeight:'medium'
                                    }}
                                  >
                                    Real Estate Properties
                                  </Typography>
                </Box>
                </Grid2>
                <Grid2 size="auto">
                <Box textAlign={'center'}>
                    <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 'medium',
                      color: "#1D2939",
                      fontSize:'28px',
                      textAlign: "center",
                      fontFamily: "'Lora'",
                    }}
                    >
                    10+
                    </Typography>
                    <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: "#475467",
                      textAlign: "center",
                      fontSize:'12px',
                      fontFamily: "'Inter'",
                      fontWeight:'medium'
                    }}
                    >
                    Construction Sites
                    </Typography>
                </Box>
                </Grid2>
                <Grid2 size="auto">
                <Box textAlign={'center'}>
                    <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 'medium',
                      color: "#1D2939",
                      fontSize:'28px',
                      textAlign: "center",
                      fontFamily: "'Lora'",
                    }}
                    >
                    15+
                    </Typography>
                    <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: "#475467",
                      textAlign: "center",
                      fontSize:'12px',
                      fontFamily: "'Inter'",
                      fontWeight:'medium'
                    }}
                    >
                    Project Managers
                    </Typography>
                </Box>
                </Grid2>
             </Grid2>
        </Box>
        </Box>
    </Box>
   
  );
};

export default SlideHero;
