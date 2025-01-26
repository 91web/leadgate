import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ConstructionEvent1 from "../../../assets/img/construction-slide1.png";

export default function ConstructionEvent() {
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
        backgroundImage: `url(${ConstructionEvent1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          Building Dreams with Precision, Crafting Constructions that Inspire
          and Endure
        </Typography>

        <Box>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: "17px",
              fontFamily: "'Inter'",
              fontWeight: "regular",
              color: "#D0D5DD",
              width: { xs: "100%", md: "35%" },
              lineHeight: "130%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Viverra magna habitant
            blandit lectus integer pulvinar dui est. Eget consectetur habitant
            felis egestas molestie amet cras dignissim.
          </Typography>
        </Box>
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
              backgroundColor: "#AE883B",
              color: "#fff",
              "&:hover": {
                backgroundColor: "darkgoldenrod",
              },
              textTransform: "none",
              width: { xs: "150px", sm: "200px" },
            }}
          >
            Get a Quotation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
