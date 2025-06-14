import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import ContactHero1 from "../../../../assets/img/pharma-hero.png";

export default function ContactSection() {
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
        backgroundImage: `url(${ContactHero1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontFamily: "'Lora'",
            fontWeight: "medium",
            fontSize: { xs: "22px", md: "40px" },
            mb: 2,
          }}
        >
          Contact us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontFamily: "'Inter'",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "regular",
          }}
        >
          We love to hear from you. Please leave us a message.
        </Typography>
      </Container>
    </Box>
  );
}
