import React from "react";
import CareerCover from "./components/career-cover";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
import ContactForm from "./components/career-form";
import Divider from "@mui/material/Divider";
import JobListings from "./components/job-list";
import WorkFeatures from "./components/work-feature";
const Career = () => {
  return (
    <Box>
      <CareerCover />
      <Box sx={{ bgcolor: "#F2F4F7" }}>
        <JobListings />
      </Box>

      <Box>
        <WorkFeatures />
      </Box>
      <Box sx={{ pb: { xs: 5, md: 0 } }}>
        <Divider />
      </Box>

      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Career;
