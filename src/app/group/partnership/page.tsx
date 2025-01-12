"use client";
import React from 'react';
import SliderPartner from './components/slide-partner';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import TrustPartner from '../../../assets/svg/trust-partner.svg';
import PartnerGrid from './components/partner-grid';
import  PartnerCard from './components/partner-card';


const PartnerShipPage = () => {
  return (
    <Box>
      <div>
        <h1>AppLead Gate</h1>
      </div>
    <Box>
    <SliderPartner/>
    </Box>
    <Box
      sx={{
        display:'flex', 
        //justifyContent: "flex-end",
        alignItems: "center",  
        width: "100%", 
        bgcolor: "#FCF7EB",
      }}
    >
    <Image 
      src={TrustPartner} 
      alt="Trust Partner" 
      width={0} 
      height={150} 
      style={{
        display: "block",
        width: "100%", // Set width to 100%
      }}
    />
    </Box>
      <Box>
        <PartnerGrid/>
      </Box>
      <Box>
        <Container>
          <PartnerCard/>
        </Container>
      </Box>
      <Box>
      <Container>
      <Box
      sx={{
        backgroundColor: "#FCF7EB",
        borderRadius: "12px", 
        padding: "2rem", 
        display: "flex",
        mb: 5, 
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
      }}
    >
      {/* Text Section */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#374151" }}>
          Interested in partnering with us
        </Typography>
        <Typography variant="body2" sx={{ color: "#6B7280", marginTop: "0.5rem" }}>
          Join over 100+ Partners
        </Typography>
      </Box>

      {/* Button Section */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#AE883B",
          color: "#ffffff",
          padding: "0.5rem 1.5rem",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#965F2A", 
          },
        }}
      >
        Become our Partner
      </Button>
      </Box>
      </Container>
    </Box>
    </Box>
  )
}

export default PartnerShipPage;
