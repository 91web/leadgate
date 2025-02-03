import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";

const MapCard = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Section */}
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box>
            {/* Description and Button */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Lora",
                fontWeight: "medium",
                color: "#1D2939",
                my: 2,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "24px", md: "30px" },
              }}
            >
              Get your Property using maps
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "inter",
                color: "#6D6D6D",
                lineHeight: 1.8,
                mb: { xs: 0, md: 3 },
                fontSize: "16px",
                textAlign: { xs: "center", md: "left" },
                fontWeight: "regular",
                width: { xs: "100%", md: "80%" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Integer euismod molestie
              tortor non laoreet tristique maecenas mauris. Tempus cursus
              integer elit nibh phasellus nec neque viverra suspendisse. Lacus
              et viverra orci diam a quam morbi.
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#AE883B",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  borderRadius: 2,
                  width: "30%",
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#936D30",
                  },
                }}
                endIcon={<span>&rarr;</span>}
              >
                Use Map
              </Button>
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1311111191385!2d7.483637874067109!3d9.051803388633543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bad020a83f5%3A0x72ae3c4b48c662f!2sLeadway%20House!5e0!3m2!1sen!2sng!4v1738223581460!5m2!1sen!2sng"
              width={600}
              height={450}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: { xs: "center", md: "flex-start" },
                my: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6B8F24",
                  color: "#ffffff",
                  fontFamily: "'Inter'",
                  fontWeight: "medium",
                  justifyContent: { xs: "center", md: "flex-start" },
                  borderRadius: 8,
                  fontSize: { xs: "14px", md: "17px" },
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#7A9F3C",
                  },
                }}
              >
                Chat with a Pharmacist
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default MapCard;
