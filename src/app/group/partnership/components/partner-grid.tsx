'use client'

import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material'
import { PlayArrow, Pause } from '@mui/icons-material'
import {PartnerData, PartnerType } from '../components/static-data/data'
import { useState } from 'react'

export default function PartnerGrid() {
  const [activeVideo, setActiveVideo] = useState<number | null>(1)

  const partners: PartnerType [] = PartnerData;
  
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '22px', md: '24px' },
          fontWeight: 'medium',
            fontFamily: 'lora',
          mb: 2,
          color: '#344054',
        }}
      >
        Over 100+ Partners
      </Typography>
      <Typography
        variant="body1"
        color="#344054"
        sx={{ mb: 6, maxWidth: '600px', mx: 'auto', fontSize: { xs: '12px', md: '14px' } }}
      >
        Lorem ipsum dolor sit amet consectetur. Facilisis imperdiet tristique augue porta fusce sed fermentum ipsum tincidunt.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 6
        }}
      >
        {partners.map((partner) => (
          <Card
            key={partner.id}
            sx={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: 'grey.200'
            }}
          >
            <CardMedia
              component="img"
              image={partner.image}
              alt={partner.name}
              sx={{
                height:500,
                objectFit: 'cover',
                top: 0,
              }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="h6" component="h3" sx={{ color: 'white' }}>
                {partner.name}
              </Typography>
              <IconButton
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.2)'
                  }
                }}
                onClick={() => setActiveVideo(activeVideo === Number(partner.id) ? null : Number(partner.id))}
              >
                {activeVideo === Number(partner.id) ? <Pause /> : <PlayArrow />}
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          bgcolor: '#AE883B',
          '&:hover': {
            bgcolor: '#9E7339'
          },
          px: 4,
          py: 1.5,
          borderRadius: '8px',
          textTransform: 'none',
          fontSize: '1rem'
        }}
      >
        Become our Partner
      </Button>
    </Container>
  )
}

