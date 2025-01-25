"use client";
import SliderHero from "./components/slide-contructions";
import AboutHero from "./components/about-event";
import CardMaterial from "./components/card-material";
import ContactForm from "./components/contact-form";
import Trust1 from "../../assets/img/trust-construction3.png";
import Trust2 from "../../assets/img/trust-construction2.png";
import Trust3 from "../../assets/img/trust-construction3.png";
import Trust4 from "../../assets/img/trust-construction2.png";
import Trust5 from "../../assets/img/trust-construction1.png";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";

const AppConstruction = () => {
  return (
    <Box>
      <Box>
        <SliderHero />
      </Box>
      <Box>
        <AboutHero />
      </Box>
      <Box bgcolor={"#F2F4F7"} pb={{ xs: 0, md: 10 }}>
        <CardMaterial />
      </Box>
      <Box bgcolor={"#fff"} py={{ xs: 0, md: 10 }}>
        <ContactForm />
      </Box>

      <Box sx={{ width: "100%", bgcolor: "#EAECF0", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#344054",
            fontSize: "18px",
            fontWeight: "regular",
            pt: { xs: 3, md: 8 },
            fontFamily: "inter",
          }}
        >
          Companies and Brands that Trust us
        </Typography>
        <Box p={2}>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Grid2 container spacing={2} justifyContent="center">
            <Grid2 size={{ xs: 4, md: 2 }}>
              <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="auto"
                    width="50"
                    image={Trust1.src}
                    alt="Waverio"
                    sx={{ p: 2 }}
                  />
                </a>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 2 }}>
              <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="auto"
                    width="50"
                    image={Trust2.src}
                    alt="Waverio"
                    sx={{ p: 2 }}
                  />
                </a>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 2 }}>
              <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="auto"
                    width="50"
                    image={Trust3.src}
                    alt="Waverio"
                    sx={{ p: 2 }}
                  />
                </a>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 2 }}>
              <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="auto"
                    width="50"
                    image={Trust4.src}
                    alt="Waverio"
                    sx={{ p: 2 }}
                  />
                </a>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 4, md: 2 }}>
              <Box>
                <a href="##" target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="auto"
                    width="50"
                    image={Trust5.src}
                    alt="Waverio"
                    sx={{ p: 2 }}
                  />
                </a>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
};

export default AppConstruction;
