"use client";
import React from "react";
import ContactSection from "./components/contact-cover";
import Box from "@mui/material/Box";
import ContactForm from "./components/contact-form";
import ContactMap from "../../../assets/img/contactus-map1.png";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <Box>
      <Box>
        <ContactSection />
      </Box>
      <Box my={{ xs: 5, md: 8 }}>
        <ContactForm />
      </Box>

      <Divider />
      <Box
        sx={{ display: "flex", justifyContent: "center", m: { xs: 2, md: 8 } }}
      >
        <Image
          src={ContactMap}
          alt="Contact Us Map"
          height={400}
          width={1200}
          style={{
            display: "block",
            margin: "auto",
            objectFit: "contain",
            width: "100%", // the image responsive to the container width
            maxWidth: "1200px", // Prevents the image from growing beyond its max width
            height: "auto", // Adjusts the height to maintain the aspect ratio
            padding: "16px", // Adds space around the image inside the container
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactUsPage;
