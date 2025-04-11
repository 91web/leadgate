"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import WorkBg from "../../../../assets/img/work-bg1.png";
//import Line1 from "../../../../assets/svg/work-line.svg";
import { WorkData, WorkType } from "./static-data/data";
import Image from "next/image";

const features: WorkType[] = WorkData;

export default function WorkFeatures() {
  return (
    <Box>
      <Box
        textAlign="center"
        sx={{
          backgroundImage: `url(${WorkBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 6,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "#344054",
            fontFamily: "'Lora'",
            fontWeight: "medium",
            fontSize: { xs: "24px", md: "30px" },
            mb: 2,
          }}
        >
          Why work at Leadgate Pharmaceuticals
        </Typography>
      
      </Box>
      <Box py={9}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    // backgroundColor: "background.paper",
                    borderRadius: 2,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      //boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "auto",
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Image
                      src={feature.src}
                      alt={feature.title}
                      height={44}
                      width={44}
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "inter",
                      color: "#344054",
                      mb: 1,
                      fontSize: "18px",
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "inter",
                      color: "#344054",
                      mb: 1,
                      fontSize: "16px",
                      textAlign: "center",
                      fontWeight: "regular",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
                {/* line Divider
               <Image src={Line1} alt="line" />
                */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
