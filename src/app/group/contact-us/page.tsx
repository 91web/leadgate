"use client";
import React from "react";
import ContactSection from "./components/contact-cover";
import Box from "@mui/material/Box";
import ContactForm from "./components/contact-form";
import Divider from "@mui/material/Divider";

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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1311111191385!2d7.483637874067109!3d9.051803388633543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bad020a83f5%3A0x72ae3c4b48c662f!2sLeadway%20House!5e0!3m2!1sen!2sng!4v1738223581460!5m2!1sen!2sng"
          width={1200}
          height={450}
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default ContactUsPage;
