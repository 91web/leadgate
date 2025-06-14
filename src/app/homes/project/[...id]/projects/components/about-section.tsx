import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface PartnerCardProps {
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageWidth?: number;
  imageHeight?: number;
  textAlign?: "left" | "center" | "right";
  backgroundColor?: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  title = "About Ornate",
  description,
  imageSrc,
  imageAlt = "Partner Image",
  primaryButtonText = "Download Brochure",
  secondaryButtonText = "Play Demo",
  onPrimaryClick,
  onSecondaryClick,
 // imageWidth = 452,
  //imageHeight = 600,
  textAlign = { xs: "center", md: "left" },
  backgroundColor = "transparent",
}) => {
  return (
    <Box sx={{ py: { xs: 4, md: 15 }, backgroundColor }}>
      <Grid2
        container
        spacing={4}
        alignItems="flex-start"
        direction={{ xs: "column-reverse", md: "row" }}
      >
        {/* Text Content Section */}
        <Grid2 size={{ xs: 12, md: 6.5 }}>
          <Box mt={{ xs: 0, md: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "lora",
                color: "#344054",
                lineHeight: 1.8,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: "24px", md: "30px" },
                textAlign:"left",
                fontWeight: 500,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "inter",
                color: "#6D6D6D",
                lineHeight: 1.2,
                mb: { xs: 3, md: 4 },
                fontSize: "16px",
                textAlign,
                width: { xs: "100%", md: "90%" },
              }}
            >
              {description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={onPrimaryClick}
                sx={{
                  bgcolor: "#AE883B",
                  color: "#ffffff",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  py: 1.5,
                  borderRadius: 1,
                  fontSize: { xs: "14px", md: "16px" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#967234" },
                  width: { xs: "100%", sm: "auto" },
                  minWidth: 200,
                }}
              >
                {primaryButtonText}
              </Button>

              <Button
                variant="outlined"
                onClick={onSecondaryClick}
                startIcon={<PlayArrowIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  borderRadius: "8px",
                  color: "#344054",
                  fontWeight: 600,
                  borderColor: "#D0D5DD",
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {secondaryButtonText}
              </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Image Section */}
        <Grid2 size={{ xs: 12, md: 5.5 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              minHeight: { xs: 300, md: 400 },
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PartnerCard;
