import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; 
import Link from 'next/link';
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
            textAlign: { xs: "center", md: "left" },
          }}
        >
            Become a Partner
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
          fontWeight: 600,
          color: "#1D2939",
          lineHeight: 1.4,
          textAlign: 'left',
          fontSize: { xs: '24px', md: '26px' },
        }}
      >
        Why you Should Join us, and Partner with Us
      </Typography>
    </Grid2>
  );
};

const PartnerCard = () => {
  const partnerSlug = "Partner-single-page";

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <HeaderGroup />
          </Box>

          {/* Description and Button */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Lora",
              color: "#6D6D6D",
              lineHeight: 1.8,
              mb: 3,
              fontSize: '16px',
              textAlign: 'left',
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
              justifyContent: "flex-start",
            }}
          >
            <Link href={`/group/partnership/${partnerSlug}`} passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#AE883B",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#965F2A",
                  },
                }}
              >
                Become Our Partner
              </Button>
            </Link>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
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
                mb: 2,
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PartnerCard;
