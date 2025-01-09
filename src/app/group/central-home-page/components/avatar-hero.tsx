import React, { useState } from 'react';
import { Box, Typography,  IconButton, Card, CardHeader,  CardContent,  Avatar, Grid2,useMediaQuery} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {TestimonialData, TestimonialType} from '../components/static-data/data';
import TestBg3 from '../../../../assets/svg/bg-testimonial3.svg';
import Image from 'next/image';


const theme = createTheme({
  typography: {
    fontFamily: 'Lora, serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontFamily: 'Lora, serif',
        },
      },
    },
  },
});

const testimonials : TestimonialType[] = TestimonialData;


const TestimonialHero: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'left', mb: 2 }}>
      <IconButton
        onClick={handleBack}
        sx={{
          color: '#AE883B',
         // bgcolor: 'action.hover',
          '&:hover': { bgcolor: 'action.selected' },
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          color: '#AE883B',
         // bgcolor: 'action.hover',
          '&:hover': { bgcolor: 'action.selected' },
        }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );

  return (
   
   
    <ThemeProvider theme={theme}>
      <Box mt={{xs:2, md:5}} >
        <Grid2 container spacing={2} sx={{ height: '100%' }}>
          <Grid2
          size={{xs:12, md:1}}
          sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'absolute', 
            zIndex: 1,
            p: 3,
            height: '100%',
            boxSizing: 'border-box'
          }}>
            <Box sx={{ position: 'sticky', top: 16 }}>
              <Typography
              //  variant="overline"
                sx={{
                  color: '#AE883B',
                  fontSize:'16px',
                  textTransform:'none',
                  fontWeight: 'regular',
                  letterSpacing: '0.1em',
                  mb: 1,
                  display: 'block',
                }}
              >
                Testimonials
              </Typography>
         
              <Typography
                variant="h2"
                sx={{
                  fontFamily:'lora',
                  color: '#000',
                  fontSize: '26px',
                  fontWeight: 'medium',
                  mb: 3,
                }}
              >
                Client Reviews
              </Typography>
              <NavigationButtons />
            </Box>
          </Grid2>
          <Grid2
          size={{xs:12 , md:11}} 
          sx={{ 
            ml: { xs: 0, md: '27%' }, 
            height: '100%', 
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none'
          }}>
            {isMobile && (
              <>
               <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%', // Adjust as needed
              mb: 2, // Add some spacing below the row
            }}
          >
          <Typography
            variant="overline"
            sx={{
              color: '#AE883B',
              fontSize: '16px',
              textTransform: 'none',
              fontWeight: 600,
              letterSpacing: '0.1em',
              pt: 2,
            }}
          >
            Testimonials
          </Typography>

            <Image
              src={TestBg3}
              alt="Quote"
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
              style={{ objectFit: 'contain' }} // Ensures the image scales properly
            />
            </Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'text.primary',
                    fontSize: '26px',
                    fontWeight: 'medium',
                    mb: 3,
                  }}
                >
                  Client Reviews
                </Typography>
                <NavigationButtons />
              </>
            )}
            <Box  width={{xs:300, md:1500}}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              onSwiper={setSwiper}
              pagination={{ clickable: true, el: null }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              style={{ overflow: 'visible', height: '100%' }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      mb: 2,
                    }}
                  >
                    <Card
                      sx={{
                        width: '100%',
                        borderRadius: '12px',
                        boxShadow: 'none',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        height: '250px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#fff',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            sx={{ width: 70, height: 70 }}
                          />
                        }
                        title={
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color:'#344054',fontFamily:'inter',fontSize:'20px'}}>
                            {testimonial.name}
                          </Typography>
                        }
                        subheader={
                          <Typography variant="body2" sx={{ color: '#808080',fontSize:'14px',fontWeight: 'regular', fontFamily:'inter' }}>
                            {testimonial.title}
                          </Typography>
                        }
                      />
                      <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            lineHeight: 1.4,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            fontFamily:'inter',
                            fontSize:'15px'
                          }}
                        >
                          {testimonial.feedback}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
 
  );
};

export default TestimonialHero;

