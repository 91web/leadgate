import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ServiceHero1 from "../../../../../assets/img/service-hero.png";

export default function BannerSection({ bannerText }: { bannerText: string }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "450px", md: "650px" },
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
        backgroundImage: `url(${ServiceHero1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontFamily: "lora",
            fontWeight: "medium",
            fontSize: { xs: "26px", md: "40px" },
            mb: 2,
            textAlign: "center",
            width: { xs: "100%", md: "55%" },
          }}
        >
          {bannerText}
        </Typography>
      </Container>
    </Box>
  );
}
