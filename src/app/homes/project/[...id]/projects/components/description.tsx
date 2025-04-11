import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// Define the props interface
interface PartnerCardProps {
  title: string;
  description: string;
  description2?: string;
  brochureButtonLabel: string;
  demoButtonLabel: string;
  imageSrc: string;
  imageAlt: string;
  onBrochureClick: () => void;
  onDemoClick: () => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  title,
  description,
  description2,
  brochureButtonLabel,
  demoButtonLabel,
  imageSrc,
  imageAlt,
  onBrochureClick,
  onDemoClick,
}) => {
  return (
    <Box sx={{ py: { xs: 4, md: 15 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="flex-start"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 6.5 }}>
          <Box>
            {/* Title */}
            <Typography
              sx={{
                fontFamily: "lora",
                color: "#344054",
                lineHeight: 1.8,
                mb: { xs: 0, md: 1 },
                fontSize: "30px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: '"inter"',
                color: "#6D6D6D",
                lineHeight: 1.3,
                mb: { xs: 0, md: 1 },
                fontSize: "16px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
                width: { xs: "100%", md: "80%" },
              }}
            >
              {description}
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#AE883B",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  my: 2,
                  borderRadius: 1,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#967234" },
                  width: { xs: "100%", md: "40%" },
                }}
                onClick={onBrochureClick}
              >
                {brochureButtonLabel}
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  margin: 2,
                  padding: "8px 20px",
                  textTransform: "none",
                  borderRadius: "8px",
                  color: "#344054",
                  fontWeight: 600,
                  borderColor: "#D0D5DD",
                }}
                startIcon={<PlayArrowIcon />}
                onClick={onDemoClick}
              >
                {demoButtonLabel}
              </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5.5 }}>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={600}
              width={452}
              style={{ borderRadius: "2px", width: "100%", height: "auto" }}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PartnerCard;
