import React from "react";
import {Box,Typography, Button} from "@mui/material";
import TestHero1 from "../../../../assets/img/testimonial1.png";
   
   
   
   
const BuildingHero = () => {
    return (
    <Box>
   
   {/* Hero Section */}
   <Box
   sx={{
     height: "426px",
     backgroundImage: `url(${TestHero1.src})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     position: "relative",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     color: "white",
     textAlign: "center",
     p: 4,
   }}
 >


  
   <Typography
     variant="h4"
     sx={{ fontWeight: "medium", fontFamily: "Lora", mb: 2 , fontSize:{xs:'24px', md:'26px',maxWidth: "600px",}}}
   >
     We are passionate about building Dreams, Elevating Health and Creating
     Lasting Values
   </Typography>
   <Typography
     variant="body1"
     sx={{ fontSize: "16px", maxWidth: "600px", mb: 3, color:'#ada6a6' }}
   >
     Lorem ipsum dolor sit amet consectetur. Vivamus magna habitant blandit
     lectus integer pulvinar dui est. Blandit lectus integer pulvinar dui
     est. Lorem ipsum dolor sit amet consectetur.
   </Typography>
   <Button
     variant="contained"
     sx={{
       backgroundColor: "#AE883B",
       color: "white",
       borderRadius: "8px",
       px: 3,
       py: 1,
       textTransform: "none",
       "&:hover": { backgroundColor: "#926d2c" },
     }}
   >
     Get in touch
   </Button>
 </Box>
 </Box>
  );
};
 export default BuildingHero;
