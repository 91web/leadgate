import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import PharmaHero1 from "../../../assets/img/pharmaceuticals-hero1.png";
import PharmaHero2 from "../../../assets/img/pharmaceuticals-hero2.png";


export default function PharmaEvent() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "450px", md: "850px" },
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
        backgroundImage: {
          xs: `url(${PharmaHero2.src})`,
          md: `url(${PharmaHero1.src})`,
        },
        backgroundSize: "cover",
        backgroundPosition: { xs: "40% 60%", md: "50% 50%" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "left",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontFamily: "'Lora'",
            fontWeight: "medium",
            fontSize: { xs: "28px", md: "40px" },
            mb: 2,
            width: { xs: "100%", md: "55%" },
          }}
        >
          Elevating Health through Pioneering Innovation and Compassionate Care
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "flex-start",
            alignItems: "left",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8F24",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#556B2F",
              },
              textTransform: "none",
              width: { xs: "150px", sm: "200px" },
            }}
          >
            Get a Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
