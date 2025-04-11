import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import PartnerEvent from "../../../../assets/img/ornate.png";
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PartnerCard = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 15 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="flex-start"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 6.5 }}>
          <Box>
            {/* Description and Button */}
            
            <Typography
            
              sx={{
                fontFamily: "lora",
                color: "#344054",
                lineHeight: 1.8,
                mb: { xs: 0, md: 1 },
                fontSize: "30px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
              }}
            >
              About Ornate
            </Typography>
            <Typography
      
              sx={{
                fontFamily: '"inter"',
                color: "#6D6D6D",
                lineHeight: 1.3,
                mb: { xs: 0, md: 1 },
                fontSize: "16px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
                width: { xs: "100%", md: "80%" },
              }}
            >
              This exceptional residence embodies sophistication, elegance, and
              convenience.
              <br />
              <br />
              Experience tranquil living in an exclusive community with
              excellent road networks, state of the art security, stunning
              natural views, and verdant greenery.
              <br />
              <br />
              Designed to the highest standards and tailored for discerning
              families who appreciate the grandeur lifestyle, each home offers.
            </Typography>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#AE883B",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  my: 2,
                  borderRadius: 1,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#967234" },
                  width: { xs: "100%", md: "40%" },
                }}
              >
                Download Brochure
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  margin: 2,
                  padding: "8px 20px",
                  textTransform: "none",
                  borderRadius: "8px",
                  color: "#344054",
                  fontWeight: 600,
                  borderColor: "#D0D5DD",
                }}
                startIcon={<PlayArrowIcon />}
              >
                Play Demo
              </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5.5 }}>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={PartnerEvent.src}
              alt={"Group Image"}
              height={600}
              width={452}
              style={{ borderRadius: "2px", width: "100%", height: "auto" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PartnerCard;
