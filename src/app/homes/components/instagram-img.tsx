import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InstagramHero1 from "../../../assets/img/insta1.png";
import InstagramHero2 from "../../../assets/img/insta2.png";
import InstagramHero3 from "../../../assets/img/insta3.png";
import InstagramHero4 from "../../../assets/img/insta4.png";
import InstagramHero5 from "../../../assets/img/insta5.png";
import InstagramHero6 from "../../../assets/img/insta6.png";
const images = [
  InstagramHero1.src,
  InstagramHero2.src,
  InstagramHero3.src,
  InstagramHero4.src,
  InstagramHero5.src,
  InstagramHero6.src,
];

export default function InstaGramEvent() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Lora",
              fontWeight: "medium",
              color: "#1D2939",
              textAlign: "center",
              fontSize: { xs: "24px", md: "30px" },
              mb: 3,
            }}
          >
            Connect with us on Instagram
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2} justifyContent="left">
            {images.map((img, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  elevation={0}
                  sx={{ borderRadius: 2, overflow: "hidden", }}
                >
                  <CardMedia component="img" image={img} alt={`img-${index}`} />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
