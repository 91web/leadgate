import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Grid2 from "@mui/material/Grid2";
import DreamBg from "../../../../assets/img/partner-hero4.png";
import Line1 from "../../../../assets/svg/line-dream.svg";

const HeaderGroup = () => (
  <Grid2
    container
    direction={{ xs: "column", md: "row" }}
    alignItems={{ xs: "flex-start", md: "center" }}
    sx={{ mb: 2 }}
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
          fontSize: { xs: "14px", md: "16px" },
          color: "#AE883B",
          textAlign: "left",
        }}
      >
        Details about our Partners
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
        fontWeight: "medium",
        color: "#1D2939",
        lineHeight: 1.4,
        textAlign: { xs: "center", md: "left" },
        width: { xs: "100%", md: "50%" },
        fontSize: { xs: "24px", md: "26px" },
      }}
    >
      Our Dream is to Build Dreams, Elevate Health and Create a Lasting Value
    </Typography>
  </Grid2>
);

const PartnerCard = () => (
  <Container>
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <HeaderGroup />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "80%" } }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Lora",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est. Blandit lectus integer
              pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Viverra
              magna habitant blandit lectus integer pulvinar dui est. Blandit
              lectus integer pulvinar dui est.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Lora",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est. Blandit lectus integer
              pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Viverra
              magna habitant blandit lectus integer pulvinar dui est. Blandit
              lectus integer pulvinar dui est.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Lora",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est. Blandit lectus integer
              pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Viverra
              magna habitant blandit lectus integer pulvinar dui est. Blandit
              lectus integer pulvinar dui est.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Lora",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
              blandit lectus integer pulvinar dui est. Blandit lectus integer
              pulvinar dui est. Lorem ipsum dolor sit amet consectetur. Viverra
              magna habitant blandit lectus integer pulvinar dui est. Blandit
              lectus integer pulvinar dui est.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AE883B",
                color: "#fff",
                textTransform: "none",
                fontWeight: "medium",
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#965F2A",
                },
                mb: 2,
              }}
            >
              Become Our Partner
            </Button>
          </Box>
          <Box
            component="img"
            src={DreamBg.src}
            alt="Group Image"
            sx={{
              width: "100%",
              height: "80%",
              borderRadius: "8px",
              mb: 2,
              display: { xs: "block", md: "none" },
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <HeaderGroup />
          </Box>
          <Box>
            <Box
              component="img"
              src={DreamBg.src}
              alt="Group Image"
              sx={{
                width: "100%",
                height: "80%",
                borderRadius: "8px",
                mb: 2,
                display: { xs: "none", md: "block" },
              }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  </Container>
);

export default PartnerCard;
