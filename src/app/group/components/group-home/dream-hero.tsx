import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import DreamBg from "../../../../assets/img/dream-hero.png";
import Image from "next/image";

const DreamHero = () => {
  return (
    <Box
      sx={
        {
          // height: "452px",
          // width: "100%",
          // display: { xs: "none", md: "block" },
        }
      }
    >
      <Box>
        {/* Image */}
        <Image
          src={DreamBg.src}
          alt="Group Image"
          width={200}
          height={324}
          style={{
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
      </Box>
      <Box textAlign={"center"}>
        {/* Statistics */}
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "medium",
                color: "#1D2939",
                fontSize: "28px",
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
                fontSize: "12px",
                fontFamily: "'Inter'",
                fontWeight: "medium",
              }}
            >
              Real Estate Properties
            </Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "medium",
                color: "#1D2939",
                fontSize: "30px",
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
                fontSize: "12px",
                fontFamily: "'Inter'",
                fontWeight: "medium",
              }}
            >
              Construction Sites
            </Typography>
          </Grid2>
          <Grid2 size={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "medium",
                color: "#1D2939",
                fontSize: "30px",
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
                fontSize: "12px",
                fontFamily: "'Inter'",
                fontWeight: "medium",
              }}
            >
              Project Managers
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default DreamHero;
