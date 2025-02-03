
  const details = [
    { label: "Price from", value: "NGN 900,000,000" },
    { label: "Location", value: "KATEMPE" },
    { label: "Apartment From", value: "4 BEDROOM" },
    { label: "Property Type", value: "RESIDENTIAL" },
    { label: "25 Units Available", value: "LIMITED SLOTS" },
  ]

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

import PartnerHero1 from "../../../../assets/img/partner-home-cover.png";

export default function PartnerSection() {
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
        backgroundImage: `url(${PartnerHero1.src})`,
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
          mt: { xs: -4, md: -50 }, // Move it upward on small screens
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
          Ornate Park
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
          Luxury Living in the Heart of Abuja
        </Typography>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: 0,
          right: 0,
          zIndex: 2,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1, p: 2, bgcolor: "#FCF7EB" }}>
            <Grid container spacing={2}>
              {details.map((item, index) => (
                <Grid
                  size={{ xs: 6, md: 2.4 }}
                  key={index}
                  sx={{ textAlign: "center", py: 1 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#7A7A7A",
                      fontFamily: "medium",
                      fontSize: "24px",
                      fontWeight: "regular",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#000",
                      fontFamily: "'Inter'",
                      fontSize: "13px",
                      fontWeight: "regular",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
