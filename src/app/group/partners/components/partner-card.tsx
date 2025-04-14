import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import Link from "next/link";
import DreamBg from "../../../../assets/img/dream-group.png";
import Line1 from "../../../../assets/svg/line-dream.svg";
import Image from "next/image";

const PartnerCard = () => {
  const partnerSlug = "Partner-single-page";

  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box width={{ xs: "100%", md: "80%" }}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
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
                    Become a Partner
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
                  Why you Should Join us, and Partner with Us
                </Typography>
              </Grid2>
            </Box>

            {/* Description and Button */}
            <Box>
            <Typography
            component={"div"}
              sx={{
                fontFamily: "inter",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "regular",
              }}
            >
              <ol style={{ paddingLeft: "20px", margin: 0,  }}>
                <li>
                  <strong>A Multi-Industry Impact: </strong> With expertise in
                  Pharmaceuticals, Real Estate, and Construction, we create
                  innovative solutions that transform communities. By partnering
                  with us, you gain access to diverse industries with vast
                  growth opportunities.
                </li>
                <li>
                  <strong> Commitment to Excellence: </strong> We uphold the
                  highest standards—from medical advancements to luxury real
                  estate and world-class infrastructure. Our partners benefit
                  from our unwavering dedication to quality, innovation, and
                  precision.
                </li>
                <li>
                  <strong> Strong Market Presence & Growth Potential: </strong>{" "}
                  Leadgate Groups is a rapidly expanding company with a strong
                  reputation in our sectors. We offer partners a trusted
                  platform to scale their businesses, enter new markets, and
                  drive mutual success.
                </li>
              </ol>
            </Typography>
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
                  Become our Partner
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
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
                  Become a Partner
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
                Why you Should Join us, and Partner with Us
              </Typography>
            </Grid2>
          </Box>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={DreamBg.src}
              alt={"Group Image"}
              height={490}
              width={452}
              style={{ borderRadius: "8px", width: "100%", height: "auto" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PartnerCard;
