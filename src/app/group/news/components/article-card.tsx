"use client";
import React from "react";
import Grid2 from "@mui/material/Grid2"; 
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ArticleType, ArticleData } from "./static-data/data";



const articles:  ArticleType [] = ArticleData;

const ProjectCards = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, my:5 }}>
      <Grid2 container spacing={3}>
        {articles.map((article, index) => (
          <Grid2 size={{xs: 12, sm:6, md:4}} key={index}>
            <Card
            elevation={0}
              sx={{
                height: "100%",
               // boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#F2F4F7",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.alt}
              />

              {/* Content */}
              <CardContent>
              <Typography
                  variant="h6"
                  sx={{
                     fontWeight: "regular", 
                     mb: 1, 
                     color: "#755921",
                      fontSize:{xs:'12px', sm:'14px'},
                        fontFamily:'inter'}}
                        >

                 By {article.author} | {article.time}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                     fontWeight: "bold", 
                     mb: 1, 
                     color: "#344054",
                             fontSize:{xs:'16px', md:'18px'},
                        fontFamily:'inter'}}
                        >

                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#475467",
                    mb: 2,
                    fontWeight: "regular", 
                    fontSize:{xs:'14px', md:'15px'},
                    fontFamily: "'Inter'",
                    lineHeight: 1.6,
                  }}
                >
                  {article.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#AE883B",
                    fontWeight: "medium",
                    textTransform: "none",
                    fontFamily: "'Inter'",
                    fontSize:{xs:'12px', md:'17px'},
                    "&:hover": { textDecoration: "none" },
                  }}
                  endIcon={<span>&rarr;</span>}
                >
                  {article.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProjectCards;
