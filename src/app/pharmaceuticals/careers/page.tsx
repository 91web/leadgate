import React from "react";
import CareerCover from "./components/career-cover";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
import ContactForm from "./components/career-form";
import Divider from "@mui/material/Divider";
import JobListings from "./components/job-list";
import WorkFeatures from "./components/work-feature";
import ActionButtons from "../components/action-button";
const Career = () => {
  return (
    <Box>
      <CareerCover />
      <ActionButtons />
      <Box sx={{ bgcolor: "#F2F4F7" }}>
        <JobListings />
      </Box>

      <WorkFeatures />

      <Box sx={{ pb: { xs: 5, md: 0 } }}>
        <Divider />
      </Box>

      <ContactForm />
    </Box>
  );
};

export default Career;
