import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


import ProjectHero1 from "../../../../assets/img/project-cover.png";

export default function ProjectCover() {
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
        backgroundImage: `url(${ProjectHero1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontFamily: "'Lora'",
            fontWeight: "medium",
            fontSize: { xs: "24px", md: "40px" },
            mb: 2,
          }}
        >
          Project
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#D0D5DD",
            fontFamily: "'Inter'",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor, Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
          dolor. Lorem ipsum dolor, Lorem ipsum dolor Lorem.
        </Typography>
      </Container>
    </Box>
  );
}
