import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import PartnerEvent from "../../../../assets/img/partner-home-event.png";
import Image from "next/image";

const PartnerCard = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="flex-start"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box>
            {/* Description and Button */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "inter",
                fontWeight: "medium",
                color: "#AE883B",
                mb: 1,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              You’re welcome to Ighalo Park
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "lora",
                color: "#000000",
                lineHeight: 1.8,
                mb: { xs: 0, md: 1 },
                fontSize: "40px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
              }}
            >
              About Ighalo Park
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "inter",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: { xs: 0, md: 2 },
                fontSize: "16px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
                width: { xs: "100%", md: "80%" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Neque sed lacinia tellus
              consectetur. Nibh id augue etiam ac posuere faucibus. Sed nisi
              tellus nulla a cursus. Dictum purus viverra leo suspendisse est
              ornare. Magna dapibus scelerisque pellentesque in.
            </Typography>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: { xs: 'center', md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#AE883B",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  my:2,
                  borderRadius: 1,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#967234" },
                  width:{xs: '100%', md:'40%'}
                }}
              >
                Download Brochure
              </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
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
