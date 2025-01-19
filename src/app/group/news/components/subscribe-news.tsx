"use client";

import React from "react";
import { Box, Typography, TextField, Button, InputAdornment, Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import Onament from "../../../../assets/svg/ornament.svg";

const NewsletterSubscription = () => {
  return (
    <Box>
    <Container>
    <Box
      sx={{
        background: {
            xs: "linear-gradient(to bottom, #1D2939 70%, #ffffff 30%)", // Half navy, half white vertically on mobile
            md: "#1A202C", // Full navy for larger screens
          },
        color: "#fff", 
        py: 6, 
        px: 2, 
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Lora, serif",
          fontWeight: "bold",
          mb: 2, // Margin bottom
        }}
      >
        Subscribe to Our Newsletter
      </Typography>
      
      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Inter, sans-serif",
          color: "#A0AEC0", // Light gray text
          mb: 4, // Margin bottom
      
        }}
      >
       Get weekly update about our product on your email, no spam <br/> guaranteed we promise ✌️
      </Typography>

      {/* Subscription Form */}
      <Box
        sx={{
          maxWidth: "600px", // Limit max width
          mx: "auto", // Center align horizontally
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for desktop
          alignItems: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
          borderRadius: "8px", 
          backgroundColor: "#fff", 
          overflow: "hidden", 
        }}
      >
        {/* Email Input */}
        <TextField
          variant="outlined"
          placeholder="youremail123@gmail.com"
          fullWidth
          slotProps={{
            input:{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#A0AEC0", display:{xs:'none', md:'flex'} }} />
              </InputAdornment>
            ),
            }
          }}
          sx={{
            flex: 1, // Allow input to take available space
            "& .MuiOutlinedInput-root": {
              border: "2px", 
            },
            "& .MuiInputBase-root": {
              //borderRadius: 0, 
              padding: "10px 16px",
            },
          }}
        />

        {/* Subscribe Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#AE883B", 
            color: "#fff", 
            fontFamily: "Inter, sans-serif",
            fontWeight: "regular",
            textTransform: "none", 
            borderRadius: 2, 
            padding: "10px",
            my: { xs: 2, md: 0 },
            width: { xs: "80%", md: "auto" }, 
            marginX: 2, 
            "&:hover": {
              backgroundColor: "#8F6D25", 
            },
          }}
        >
          Subscribe now
        </Button>
      </Box>
     
    </Box>
    </Container>
    <Box
  sx={{
    display: { xs: "none", md: "flex" }, 
    justifyContent: "flex-end",
    alignItems: "flex-end", 
    right: 0, 
    bottom: 0, 
    width: "100%", 
  }}
>
  <Image 
    src={Onament} 
    alt="Ornament" 
    width={100} 
    height={100} 
    style={{
      display: "block",
    }}
  />
</Box>
    </Box>
  );
};

export default NewsletterSubscription;
