"use client";

import React from "react";
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ServiceData } from "../components/static-data/data";
import FirstService from "./components/service-one";
import SecondService from "./components/service-two";
import ThirdService from "./components/service-three";

// Map service id to component
const serviceMap: Record<string, React.ElementType> = {
  "1": FirstService,
  "2": SecondService,
  "3": ThirdService,
};

const DynamicServicePage = () => {
  const params = useParams();
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const matchedService = ServiceData.find((service) => service.id === idParam);
  const ServiceComponent =
    idParam && matchedService ? serviceMap[idParam] : null;

  return (
    <Box>
      {ServiceComponent ? (
        <ServiceComponent />
      ) : (
        <Typography variant="h6" color="error">
          Service not found for ID: "{idParam}"
        </Typography>
      )}
    </Box>
  );
};

export default DynamicServicePage;
