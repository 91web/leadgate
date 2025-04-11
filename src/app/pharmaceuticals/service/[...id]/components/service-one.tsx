import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerSection from "./banner";
import Container from "@mui/material/Container";
import ServiceHero from "./service-hero";

const FirstService = () => {
  return (
    <Box>
      <BannerSection bannerText="Retail Pharmacy and Supermarket Services Division" />
      <Container maxWidth="lg">
        {/* Service Overview Section */}
        <Box>
          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Service Overview
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            At our retail outlets, we offer more than medications - we provide
            everyday essentials through our supermarket services, making us a
            one-stop shop for health and household needs.
          </Typography>

          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Prescription Drugs
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            At LeadGate, we provide a comprehensive range of prescription
            medications tailored to meet your healthcare needs. Our team ensures
            the availability of high-quality, doctor-prescribed drugs while
            maintaining strict compliance with regulatory standards to guarantee
            your safety and well-being.
          </Typography>

          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Over-the-Counter (OTC) Medications
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            From pain relief to cold remedies, we offer a broad selection of OTC
            medications designed to address everyday health concerns. With
            trusted brands and expert advice, you can confidently find the right
            solutions for your minor ailments.
          </Typography>

          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Personalized Diet / Meal Planning
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            Achieve your health goals with our personalized diet and meal
            planning services. Our experts collaborate with you to create
            tailored nutrition plans that support your unique lifestyle, medical
            conditions, and wellness aspirations.
          </Typography>

          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Health Screening and Immunization
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            Stay proactive about your health with our health screening and
            immunization services. From blood pressure checks to vaccinations,
            our healthcare professionals are here to help you stay protected and
            informed about your health status.
          </Typography>

          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            Medical Supplies and Equipment
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            We stock a wide array of medical supplies and equipment, including
            mobility aids, wound care products, and monitoring devices. Whether
            for personal or professional use, our high-quality inventory is
            designed to meet your specific needs.
          </Typography>

          <Typography
            color="#344054"
            fontSize={22}
            fontWeight={"bold"}
            mt={6}
            mb={2}
          >
            A Wide Range of Personal Care Products and Toiletries
          </Typography>
          <Typography
            color="#475467"
            fontSize={18}
            mb={4}
            fontWeight={"regular"}
            width={{ xs: "100%", md: "70%" }}
          >
            Explore our extensive collection of personal care products and
            toiletries, carefully curated to cater to your hygiene and grooming
            needs. We bring you trusted brands to ensure quality and comfort.
          </Typography>
        </Box>

        <ServiceHero filteredIds={[2, 3]} />
      </Container>
    </Box>
  );
};

export default FirstService;
