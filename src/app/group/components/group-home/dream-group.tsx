import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // Import Grid2 (experimental)
import DreamBg from "../../../../assets/img/dream-group.png";
import Line1 from "../../../../assets/svg/line-dream.svg";

const HeaderGroup = () => {
  return (
    <Grid2
      container
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      sx={{ mb: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#AE883B",
            fontWeight:'regular',
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Know all about us
        </Typography>
        <Box
          component="img"
          src={Line1.src}
          alt="Line decoration"
          sx={{
            width: "auto",
            height: "2px",
            flexShrink: 0,
          }}
        />
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Lora",
          fontWeight: 'medium',
          color: "#1D2939",
          lineHeight: 1.4,
          textAlign:'left',
          fontSize:{xs:'24px', md:'26px'},
          width: { xs: '100%', md: '70%' }
        }}
      >
        Our Dream is to Build Dreams, Elevate Health, and Create a Lasting Value
      </Typography>
    </Grid2>
  );
};

const DreamGroup = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{xs:12, md:6}}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <HeaderGroup />
          </Box>

          {/* Description and Button */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Lora",
              color: "#475467",
              lineHeight: 1.8,
              mb: 3,
              fontWeight:'regular',
              fontSize:'16px',
              textAlign:'left',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
            blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet
            consectetur. Viverra magna habitant blandit lectus integer pulvinar
            dui est.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
            blandit lectus integer pulvinar dui est. Lorem ipsum dolor sit amet
            consectetur. Viverra magna habitant blandit lectus integer pulvinar
            dui est.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent:"flex-start",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AE883B",
                color: "#fff",
                textTransform: "none",
                fontWeight: 'medium',
                fontSize:'16px',
                py: 1,
                "&:hover": {
                  backgroundColor: "#965F2A",
                },
              }}
            >
              Learn more
            </Button>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{xs:12, md:6}}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <HeaderGroup />
          </Box>
          <Box>
            {/* Image */}
            <Box
              component="img"
              src={DreamBg.src}
              alt="Group Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                mb:2,
              }}
            />

            {/* Statistics */}
            <Grid2 container spacing={4}>
            <Grid2 size={4}>
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
              </Grid2>
              <Grid2 size={4}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'medium',
                    color: "#1D2939",
                    fontSize:'30px',
                    textAlign: "center",
                    fontFamily: "'Lora'",
                  }}
                >
                  10+
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
                  Construction Sites
                </Typography>
              </Grid2>
              <Grid2 size={4}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'medium',
                    color: "#1D2939",
                    fontSize:'30px',
                    textAlign: "center",
                    fontFamily: "'Lora'",
                  }}
                >
                  15+
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
                  Project Managers
                </Typography>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DreamGroup;
