import React from 'react';
import { Container, Grid2, Box, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const handlePrevSlide = () => {
  // Add your previous slide logic here
};

const handleNextSlide = () => {
  // Add your next slide logic here
};

export default function Paging() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, px: 3 }}>
      <Grid2 container spacing={4} alignItems="center">
        <Grid2 size={{xs:12, md:4}}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#AE883B',
                fontWeight: 600,
                letterSpacing: '0.1em',
                mb: 1,
                textTransform: 'none',
                display: 'block',
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: '#000',
                fontSize: '26px',
                fontFamily: 'Lora',
                fontWeight: 'medium',
                mb: 3,
              }}
            >
              Client Reviews
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                onClick={handlePrevSlide}
                sx={{
                  color: '#000',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  transition: 'background-color 0.3s ease',
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                onClick={handleNextSlide}
                sx={{
                  color: '#000',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  transition: 'background-color 0.3s ease',
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
