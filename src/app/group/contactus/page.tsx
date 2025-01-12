import React from 'react';
import ContactSection from './components/contact-sections';
import { Box } from '@mui/material';
import ContactForm from './components/contact-form';
import ContactMap from "../../../assets/img/contactus-map1.png";
import Image from "next/image";



const ContactUsPage = () => {
  return (
    <Box>
    <div>
   <h1>App LeadGate Group</h1>
    </div>
    <Box>
      <ContactSection />
    </Box>
    <Box>
      <ContactForm />
    </Box>
    <Box>
    <Image 
        src={ContactMap} 
        alt="Contact Us Map"
        height={400}
        width={1200} 
        style={{
          display: 'block',
          margin: 'auto',
          padding: 2,
        }}
      />
    </Box>
    </Box>
  
  )
}

export default ContactUsPage;
