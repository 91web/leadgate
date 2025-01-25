import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import AboutTelescope from "../../../assets/svg/about-telescope.svg";
import AboutVector from "../../../assets/svg/about-vector.svg";
import AboutSensor from "../../../assets/svg/about-sensor.svg";
import AboutLine from "../../../assets/svg/about-line.svg";
import Grid2 from "@mui/material/Grid2";

const AboutGrid = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              color: "#344054",
              fontFamily: "'Lora'",
              fontWeight: "medium",
              fontSize: { xs: "24px", md: "30px" },
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#475467",
              fontFamily: "'Inter'",
              fontSize: "17px",
              fontWeight: "regular",
              width: { xs: "100%", md: "70%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo volutpat
            nulla at.
          </Typography>
        </Box>
        <Grid2 container spacing={2}>
          <Grid2 container spacing={2} alignItems="center">
            <Grid2 size={{ xs: 12, md: 5 }} p={2}>
              <Box>
                <Image
                  src={AboutTelescope.src}
                  alt="Telescope"
                  width={40}
                  height={40}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    color: "#344054",
                    fontFamily: "'Inter'",
                    fontWeight: "bold",
                    fontSize: { xs: "18px", md: "20px" },
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    fontFamily: "'Inter'",
                    fontSize: "16px",
                    fontWeight: "regular",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo
                  volutpat nulla at.
                </Typography>
              </Box>
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 2 }}
              display={{ xs: "none", md: "flex" }}
              justifyContent="center"
            >
              <Image src={AboutLine.src} alt="Line" width={100} height={100} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }} p={2}>
              <Box>
                <Image
                  src={AboutSensor.src}
                  alt="Sensor"
                  width={40}
                  height={40}
                />
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    color: "#344054",
                    fontFamily: "'Inter'",
                    fontWeight: "bold",
                    fontSize: { xs: "18px", md: "20px" },
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    fontFamily: "'Inter'",
                    fontSize: "16px",
                    fontWeight: "regular",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo
                  volutpat nulla at.
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }} p={2}>
            <Box>
              <Image
                src={AboutVector.src}
                alt="Telescope"
                width={40}
                height={40}
              />
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  color: "#344054",
                  fontFamily: "'Inter'",
                  fontWeight: "bold",
                  fontSize: { xs: "18px", md: "20px" },
                }}
              >
                Our Core Value
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#475467",
                  fontFamily: "'Inter'",
                  fontSize: "16px",
                  fontWeight: "regular",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Arcu nulla ut justo
                volutpat nulla at.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default AboutGrid;
