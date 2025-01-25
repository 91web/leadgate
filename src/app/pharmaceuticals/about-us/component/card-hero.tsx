import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import AboutHero from "../../../../assets/img/aboutus-pharma.png";
import LMission1 from "../../../../assets/img/mission1.png";
import LMission2 from "../../../../assets/img/mission2.png";
import LVision1 from "../../../../assets/img/vision1.png";
import LVision2 from "../../../../assets/img/vision2.png";
import Image from "next/image";

const CardHero = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={2}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box>
            <Box sx={{ width: { xs: "100%", md: "auto" } }}>
              <Image
                src={AboutHero.src}
                alt={"Group Image"}
                height={450}
                width={452}
                style={{ borderRadius: "8px", width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            width={{ xs: "100%", md: "100%" }}
            sx={{ ml: { xs: 0, md: 10 } }}
          >
            {/* Description and Button */}
            <Box sx={{ my: 5 }}>
              <Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Image
                    src={LMission1.src}
                    alt="Mission Logo"
                    height={54}
                    width={54}
                    style={{ flexShrink: 0 }}
                  />
                </Box>

                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <Image
                    src={LMission2.src}
                    alt="Mission Logo"
                    height={54}
                    width={54}
                    style={{ flexShrink: 0 }}
                  />
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#344054",
                  lineHeight: 1.8,
                  mb: 1,
                  fontSize: "28px",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Our Missions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#475467",
                  lineHeight: 1.8,
                  // mb: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                To deliver exceptional care and accessible health solutions to
                our community.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#475467",
                  lineHeight: 1.8,
                  mt: 2,
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                We strive to provide a welcoming and supportive environment
                where every customer feels valued, respected and heard.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#475467",
                  lineHeight: 1.8,
                  mt: 2,
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                We are passionate about serving our customers with compassion,
                integrity and expertise thereby giving each individual an
                unforgettable and unique experience.
              </Typography>
            </Box>
            <Box>
              <Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Image
                    src={LVision1.src}
                    alt="Mission Logo"
                    height={54}
                    width={54}
                    style={{ flexShrink: 0 }}
                  />
                </Box>

                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <Image
                    src={LVision2.src}
                    alt="Mission Logo"
                    height={54}
                    width={54}
                    style={{ flexShrink: 0 }}
                  />
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#344054",
                  lineHeight: 1.8,
                  mb: 1,
                  fontSize: "28px",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "inter",
                  color: "#475467",
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: "16px",
                  textAlign: "left",
                  fontWeight: "regular",
                }}
              >
                To be Nigeria’s foremost customer-centric retail brand leading
                the charge in pharmaceutical health care and lifestyle.  
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CardHero;
