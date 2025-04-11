import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import Link from "next/link";
import DreamBg from "../../../../assets/img/dream-group.png";
import Line1 from "../../../../assets/svg/line-dream.svg";
import Image from "next/image";

const DreamGroup = () => {
  const partnerSlug = "Partner-single-page";

  return (
    <Box>
      <Grid2
        container
        spacing={2}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box width={{ xs: "100%", md: "80%" }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Grid2
                container
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "flex-start", md: "center" }}
                // sx={{ mb: 4 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      color: "#AE883B",
                      fontWeight: "regular",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Know all about us
                  </Typography>
                  <Box
                    component="img"
                    src={Line1.src}
                    alt="Line decoration"
                    sx={{
                      width: "auto",
                      height: "2px",
                      flexShrink: 0,
                    }}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Lora",
                    fontWeight: "medium",
                    color: "#1D2939",
                    lineHeight: 1.4,
                    textAlign: "left",
                    fontSize: { xs: "24px", md: "30px" },
                  }}
                >
                  Our Dream is to Build Dreams, Elevate Health, and Create a
                  Lasting Value
                </Typography>
              </Grid2>
            </Box>

            {/* Description and Button */}
            <Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "inter",
                    color: "#6D6D6D",
                    lineHeight: 1.8,
                    my: 2,
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: "regular",
                  }}
                >
                  At Lead Gate Group, our purpose transcends industries; we are
                  committed to transforming lives, fostering innovation, and
                  creating a legacy of excellence.
                </Typography>
              </Box>
              <Box sx={{ my: 2 }}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        color: "#6D6D6D",
                        lineHeight: 1.8,
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "regular",
                      }}
                    >
                      <strong>Building Dreams:</strong> We bring visions to life
                      by constructing spaces and homes that inspire, endure, and
                      transform communities. From groundbreaking infrastructure
                      to thoughtfully designed homes, we turn aspirations into
                      tangible realities.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        color: "#6D6D6D",
                        lineHeight: 1.8,
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "regular",
                      }}
                    >
                      <strong>Elevating Health:</strong> Health is the
                      foundation of a thriving society, and through Lead Gate
                      Pharmaceuticals, we deliver innovative, patient-focused
                      solutions that improve lives. By prioritizing excellence
                      in healthcare, we aim to elevate the standard of
                      well-being globally.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "Inter",
                        color: "#6D6D6D",
                        lineHeight: 1.8,
                        fontSize: "16px",
                        textAlign: "left",
                        fontWeight: "regular",
                      }}
                    >
                      <strong>Creating Lasting Value:</strong> Our mission is
                      rooted in sustainability and long-term impact. Across all
                      our ventures in construction, homes, and pharmaceuticals,
                      we are driven by the desire to create value that benefits
                      individuals, families, and society for generations to
                      come.
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Link href={`/group/partners/${partnerSlug}`} passHref>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#AE883B",
                    color: "#ffffff",
                    py: 1,
                    px: 3,
                    fontFamily: "'Inter'",
                    fontWeight: "medium",
                    fontSize: { xs: "14px", md: "17px" },
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#965F2A",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box
            sx={{ display: { xs: "block", md: "none" }, mt: { xs: 2, md: 0 } }}
          >
            <Grid2
              container
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              sx={{ mb: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    color: "#AE883B",
                    fontWeight: "regular",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Learn More
                </Typography>
                <Box
                  component="img"
                  src={Line1.src}
                  alt="Line decoration"
                  sx={{
                    width: "auto",
                    height: "2px",
                    flexShrink: 0,
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Lora",
                  fontWeight: "medium",
                  color: "#1D2939",
                  lineHeight: 1.4,
                  textAlign: "left",
                  fontSize: { xs: "24px", md: "28px" },
                }}
              >
                Our Dream is to Build Dreams, Elevate Health, and Create a
                Lasting Value
              </Typography>
            </Grid2>
          </Box>
          <Box>
            <Box sx={{ width: { xs: "100%", md: "auto" } }}>
              <Image
                src={DreamBg.src}
                alt={"Group Image"}
                height={250}
                width={452}
                style={{ borderRadius: "8px", width: "100%", height: "100%" }}
              />
            </Box>
            <Box textAlign={"center"} p={2}>
              {/* Statistics */}
              <Grid2 container spacing={2}>
                <Grid2 size={4}>
                  <Box textAlign={"center"} width={{ xs: "60px", md: "150px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "medium",
                        color: "#1D2939",
                        fontSize: "20px",
                        textAlign: "center",
                        fontFamily: "'Lora'",
                      }}
                    >
                      30+
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#475467",
                        textAlign: "center",
                        fontSize: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: "medium",
                      }}
                    >
                      Real Estate Properties
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={4}>
                  <Box textAlign={"center"} width={{ xs: "60px", md: "150px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "medium",
                        color: "#1D2939",
                        fontSize: "20px",
                        textAlign: "center",
                        fontFamily: "'Lora'",
                      }}
                    >
                      10+
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#475467",
                        textAlign: "center",
                        fontSize: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: "medium",
                      }}
                    >
                      Construction Sites
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={4}>
                  <Box textAlign={"center"} width={{ xs: "60px", md: "150px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "medium",
                        color: "#1D2939",
                        fontSize: "20px",
                        textAlign: "center",
                        fontFamily: "'Lora'",
                      }}
                    >
                      15+
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#475467",
                        textAlign: "center",
                        fontSize: "10px",
                        fontFamily: "'Inter'",
                        fontWeight: "medium",
                      }}
                    >
                      Project Managers
                    </Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DreamGroup;
