"use client";
import React from "react";
import ContactSection from "./components/contact-sections";
import { Box } from "@mui/material";
import ContactForm from "./components/contact-form";
import ContactMap from "../../../assets/img/contactus-map1.png";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <Box>
      <Box>
        <ContactSection />
      </Box>
      <Box my={5}>
        <ContactForm />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
  <Image
    src={ContactMap}
    alt="Contact Us Map"
    height={400}
    width={1200}
    style={{
      display: "block",
      margin: "auto",
      objectFit: "contain", 
      width: "100%",  // Makes the image responsive to the container width
      maxWidth: "1200px",  // Prevents the image from growing beyond its max width
      height: "auto",  // Adjusts the height to maintain the aspect ratio
      padding: "16px",  // Adds space around the image inside the container
    }}
  />
  </Box>
    </Box>
  );
};

export default ContactUsPage;
