"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import EstateSlider from "./components/slide-home";
import PropertyCards from "./components/property-feature";
//import AvatarButton from "./components/avatar";
import EventBg from "../../assets/img/event-bg.png";
import TestimonialHero from "../group/components/group-home/avatar-hero";
import useMediaQuery from "@mui/material/useMediaQuery";
import TestBg1 from "../../assets/img/bg-testimonial1.jpg";
import TestBg2 from "../../assets/img/bg-testimonial2.png";
import ContactForm from "./components/contact-form";
import MapCard from "./components/map-card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const AppHomes = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      <Box>
        <EstateSlider />
      </Box>
      <Box py={3}>
        <Container maxWidth="lg">
          <PropertyCards />
        </Container>
      </Box>
      <Box bgcolor={"#F2F4F7"} py={{ xs: 5, md: 10 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${EventBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: { xs: "656px", md: "500px" },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                pt={30}
                display={"flex"}
                justifyContent={"end"}
                textAlign={"center"}
                mr={5}
              >
                <Box mr={12}>
                  <Typography variant="h4" color="white" fontWeight="bold">
                    120+
                  </Typography>
                  <Typography mt={2} variant="body1" color="white">
                    Properties Available
                  </Typography>
                </Box>

                <Box mx={2}>
                  <Typography variant="h4" color="white" fontWeight="bold">
                    20+
                  </Typography>
                  <Typography mt={2} variant="body1" color="white">
                    Partners
                  </Typography>
                </Box>
              </Box>

              <Box
                mt={8}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mx={4}
              >
                {/* Left Side - Avatars */}
                <Box display="flex">
                  <Avatar src="/avatar1.jpg" sx={{ zIndex: 3 }} />
                  <Avatar
                    src="/avatar2.jpg"
                    sx={{ marginLeft: "-10px", zIndex: 2 }}
                  />
                  <Avatar
                    src="/avatar3.jpg"
                    sx={{ marginLeft: "-10px", zIndex: 1 }}
                  />
                  <Avatar
                    src="/avatar3.jpg"
                    sx={{ marginLeft: "-10px", zIndex: 1 }}
                  />
                </Box>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Box display="flex" gap={1} mb={1}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "rgba(248, 230, 192, 0.5)", 
                        color: "white",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Home
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "rgba(248, 230, 192, 0.5)",
                        color: "white",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Shortlet
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "rgba(248, 230, 192, 0.5)",
                        color: "white",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Interior
                    </Button>
                  </Box>

                  <Box display="flex" gap={2} justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "rgba(248, 230, 192, 0.5)",
                        color: "white",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Furniture
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "rgba(248, 230, 192, 0.5)",
                        color: "white",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Home
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                display="flex"
                justifyContent="flex-start" // Aligns content to the left
                alignItems="center" // Centers vertically
                pt={30}
                ml={1.5}
              >
                <Avatar src="/avatar1.jpg" sx={{ zIndex: 3 }} />
                <Avatar
                  src="/avatar2.jpg"
                  sx={{ marginLeft: "-10px", zIndex: 2 }}
                />
                <Avatar
                  src="/avatar3.jpg"
                  sx={{ marginLeft: "-10px", zIndex: 1 }}
                />
                <Avatar
                  src="/avatar3.jpg"
                  sx={{ marginLeft: "-10px", zIndex: 1 }}
                />
              </Box>

              <Box
                pt={5}
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent={{ xs: "center", md: "end" }}
                textAlign="center"
                mr={{ xs: 0, md: 5 }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent={{ xs: "space-between", md: "end" }}
                  maxWidth="400px"
                  mb={3}
                  px={4}
                >
                  <Box mr={{ xs: 2, md: 12 }}>
                    <Typography variant="h4" color="white" fontWeight="bold">
                      120+
                    </Typography>
                    <Typography mt={1} variant="body1" color="white">
                      Properties Available
                    </Typography>
                  </Box>

                  <Box mx={2}>
                    <Typography variant="h4" color="white" fontWeight="bold">
                      20+
                    </Typography>
                    <Typography mt={1} variant="body1" color="white">
                      Partners
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                mt={8}
                display="flex"
                flexDirection={"column"}
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <Box display="flex" flexDirection="column" gap={3} width="100%">
                  <Box display="flex" gap={2} justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#F8E6C0",
                        border: "2px solid white",
                        opacity: "50%",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Home
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#F8E6C0",
                        border: "2px solid white",
                        opacity: "50%",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Shortlet
                    </Button>
                  </Box>

                  <Box display="flex" gap={2} justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#F8E6C0",
                        border: "2px solid white",
                        opacity: "50%",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Interior
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#F8E6C0",
                        border: "2px solid white",
                        opacity: "50%",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Furniture
                    </Button>
                  </Box>

                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: "#F8E6C0",
                        border: "2px solid white",
                        opacity: "50%",

                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "17px",
                        px: "20px",
                      }}
                    >
                      Home
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <MapCard />
        </Container>
      </Box>
      <Divider />
      <Box py={5} bgcolor={"#fff"}>
        <Box
          sx={{
            backgroundImage: isMobile
              ? `url(${TestBg1.src})`
              : `url(${TestBg2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: "50vh", md: "100vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TestimonialHero />
        </Box>
      </Box>
      <Box py={{ xs: 5, md: 8 }}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default AppHomes;
