import { Box, Container, Typography } from '@mui/material'
import ContactHero1 from "../../../../assets/img/contactus-hero1.png"

export default function ContactSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '65vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
        backgroundImage: `url(${ContactHero1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          component="span"
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 400,
            fontSize:{xs:'22px', md:'28px'},
            mb: 2,
          }}
        >
          Contact us
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 300,
          }}
        >
          We love to hear from you. Please leave us a message.
        </Typography>
      </Container>
    </Box>
  )
}

