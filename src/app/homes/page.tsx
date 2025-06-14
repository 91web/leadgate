"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import EstateSlider from "./components/slide-home";
import PropertyCards from "./components/property-feature";
//import AvatarButton from "./components/avatar";
import EventBg from "../../assets/img/event-bg.png";
//import useMediaQuery from "@mui/material/useMediaQuery";
import ContactForm from "./components/contact-form";
import MapCard from "./components/map-card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TestimonialSlider from "../group/components/group-home/testimonial-slide";
import InstaGramEvent from "./components/instagram-img";
import Avatar1 from "../../assets/img/avatar1.png";
import Avatar2 from "../../assets/img/avatar2.png";
import Avatar3 from "../../assets/img/avatar3.png";
import Avatar4 from "../../assets/img/avatar4.png";

const AppHomes = () => {
  //const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      <EstateSlider />

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
                  <Avatar src={Avatar1.src} sx={{ zIndex: 3 }} />
                  <Avatar
                    src={Avatar2.src}
                    sx={{ marginLeft: "-10px", zIndex: 2 }}
                  />
                  <Avatar
                    src={Avatar3.src}
                    sx={{ marginLeft: "-10px", zIndex: 1 }}
                  />
                  <Avatar
                    src={Avatar4.src}
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                <Avatar src={Avatar1.src} sx={{ zIndex: 3 }} />
                <Avatar
                  src={Avatar2.src}
                  sx={{ marginLeft: "-10px", zIndex: 2 }}
                />
                <Avatar
                  src={Avatar3.src}
                  sx={{ marginLeft: "-10px", zIndex: 1 }}
                />
                <Avatar
                  src={Avatar4.src}
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                        textTransform: "none",
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
                        textTransform: "none",
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

      <Container maxWidth="lg">
        <MapCard />
      </Container>

      <Divider />
      <TestimonialSlider />
      <InstaGramEvent />

      <Box py={{ xs: 5, md: 8 }}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default AppHomes;
