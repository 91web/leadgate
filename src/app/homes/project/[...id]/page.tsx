"use client";

import React from "react";
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OrnatePage from "../[...id]/projects/ornate";
import LeadCityPage from "../[...id]/projects/leadcity";
import EmeraldPage from "./projects/emerald";

// Map service ID to component
const serviceMap: Record<string, React.ElementType> = {
  "1": OrnatePage,
  "2": LeadCityPage,
  "3": EmeraldPage,
};

const DynamicServicePage = () => {
  const params = useParams();
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // Get the component based on the ID
  const ServiceComponent = idParam ? serviceMap[idParam] : null;

  return (
    <Box>
      {ServiceComponent ? (
        <ServiceComponent />
      ) : (
        <Typography variant="h6" color="error">
          Page not found for ID: "{idParam}"
        </Typography>
      )}
    </Box>
  );
};

export default DynamicServicePage;
