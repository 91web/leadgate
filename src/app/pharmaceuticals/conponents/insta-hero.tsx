"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2"; 
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import {InstagHero, InstagHeroType} from '../conponents/static-data/data';

const InstagramHero = () => {
  const cardData: InstagHeroType[] = InstagHero;
  return (
    <Box sx={{ py: { xs: 0, md: 2 } }}>
      <Grid2 container spacing={2}>
        {cardData.map((card, index) => (
        <Grid2 size={{ xs:12, sm:6, md:3}} key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                //  borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
                position: "relative",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="300"
                image={card.image}
                alt={card.alt}
                sx={{ borderRadius: 2 }}
              />
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default InstagramHero;