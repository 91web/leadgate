import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AboutHero1 from "../../../../assets/img/pharma-about-us.png";

export default function CoverHero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "650px",
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
        backgroundImage: `url(${AboutHero1.src})`,
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
            fontFamily: "lora",
            fontWeight: "medium",
            fontSize: { xs: "26px", md: "40px" },
            mb: 2,
          }}
        >
          Our Story
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#D0D5DD",
            fontFamily: "inter",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Duis semper vitae sapien id.
        </Typography>
      </Container>
    </Box>
  );
}
