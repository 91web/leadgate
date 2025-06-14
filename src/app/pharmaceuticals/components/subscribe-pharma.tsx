"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Container from "@mui/material/Container";

import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import Onament from "../../../assets/svg/ornament.svg";

const SubscriptionPharma = () => {
  return (
    <Box height={450} sx={{ position: "relative" }}>
      <Container>
        <Box
          sx={{
            background: {
              xs: "linear-gradient(to bottom, #1D2939 70%, #F2F4F7 30%)",
              md: "#1D2939",
            },
            color: "#fff",
            py: 6,
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Lora",
              fontWeight: "medium",
              fontSize: { xs: "24px", md: "30px" },
              mb: 2,
            }}
          >
            Interested in Partnering with us?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter,",
              color: "#FAFAFA",
              mb: 4,
              fontWeight: "regular",
              opacity: 0.7,
              fontSize: { xs: "15px", sm: "17px" },
            }}
          >
            Join over 100+ partners making a difference.
          </Typography>
          <Box
            sx={{
              maxWidth: "600px",
              mx: "auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="youremail123@gmail.com"
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{
                          color: "#A0AEC0",
                          display: { xs: "none", md: "flex" },
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  border: "2px",
                },
                "& .MuiInputBase-root": {
                  padding: "10px 16px",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6B8F24",
                color: "#fff",
                fontFamily: "Inter",
                fontWeight: "regular",
                textTransform: "none",
                borderRadius: 2,
                padding: "10px",
                my: { xs: 2, md: 0 },
                width: { xs: "80%", md: "auto" },
                marginX: 2,
                "&:hover": {
                  backgroundColor: "#556B2F",
                },
              }}
            >
              Request a Partnership
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Ornament Image Positioned at Bottom-Right of the Section */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "absolute", // Absolute to keep it inside the section
          right: 0,
          bottom: 0,
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

export default SubscriptionPharma;
