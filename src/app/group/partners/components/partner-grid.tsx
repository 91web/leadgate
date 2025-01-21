import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PartnerData, PartnerType } from "./static-data/data";
import { Box, Button, Container, IconButton, Grid2 } from '@mui/material';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';

export default function PartnerGrid() {
  const partners: PartnerType[] = PartnerData;
  const [activeVideo, setActiveVideo] = useState<number | null>(1);

  return (
    <Box>
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "22px", md: "24px" },
            fontWeight: "medium",
            fontFamily: "lora",
            mb: 2,
            color: "#344054",
          }}
        >
          Over 100+ Partners
        </Typography>
        <Typography
          variant="body1"
          color="#344054"
          sx={{
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: "regular",
            fontFamily: "inter",
            color: "#344054",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Facilisis imperdiet tristique
          augue porta fusce sed fermentum ipsum tincidunt.
        </Typography>

        <Container maxWidth="md">
          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: 'center', // Center grid items horizontally
            }}
          >
            {partners.map((partner) => (
              <Grid2
                key={partner.id}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center', // Center individual cards
                }}
              >
                <Card 
                elevation={0}
                sx={{ maxWidth: 350, position: 'relative', borderRadius:5 }}>
                  <CardMedia
                    component="img"
                    sx={{ height: "350", width: "100%" }} // Set image height and width
                    image={partner.image}
                    alt={partner.name}
                  />
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                     // backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography gutterBottom variant="h5" sx={{ color: '#fff', fontSize: '18px', fontFamily: 'inter', fontWeight: 'medium' }}>
                        {partner.name}
                      </Typography>
                      <IconButton
                        sx={{
                          color: "white",
                         // bgcolor: "rgba(255,255,255,0.1)",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.2)",
                          },
                        }}
                        onClick={() =>
                          setActiveVideo(
                            activeVideo === Number(partner.id) ? null : Number(partner.id)
                          )
                        }
                      >
                        {activeVideo === Number(partner.id) ? <PausePresentationOutlinedIcon /> : <SlideshowOutlinedIcon />}
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>

        <Box mt={5}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#AE883B",
              "&:hover": {
                bgcolor: "#9E7339",
              },
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Become our Partner
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
