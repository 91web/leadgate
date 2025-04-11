import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ActionButtons = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        zIndex: 1000,
        height: { xs: "150px", md: "53px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: { xs: "transparent", md: "#fff" },
          py: { xs: 0, md: 1 },
          px: 2,
          display: "flex",
          justifyContent: { xs: "flex-end", md: "center" },
          alignItems: "center",
          boxShadow: { xs: "none", md: "0 -2px 10px rgba(0,0,0,0.1)" },
        }}
      >
        {/* Mobile FAB Style */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8F24",
              color: "#fff",
              minWidth: "30px",
              minHeight: "50px",
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#556B2F",
              },
            }}
          >
            <WhatsAppIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              color: "#475467",
              minWidth: "30px",
              minHeight: "50px",
              borderRadius: "50%",
              borderColor: "#6B8F24",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#E0E0E0",
              },
            }}
          >
            <LocationOnIcon />
          </Button>
        </Box>

        {/* Desktop Buttons */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            maxWidth: "600px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              color: "#475467",
              borderColor: "#6B8F24",
              "&:hover": {
                backgroundColor: "#E0E0E0",
              },
              textTransform: "none",
              width: "200px",
            }}
          >
            <LocationOnIcon sx={{ mr: 1 }} /> Locate our Store
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8F24",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#556B2F",
              },
              textTransform: "none",
              width: "200px",
            }}
          >
            <WhatsAppIcon sx={{ mr: 1 }} /> Chat on WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionButtons;
