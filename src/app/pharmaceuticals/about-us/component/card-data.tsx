import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2"; // Use this for the experimental Grid2 API

import { DtaCard, DtaCardType } from "../component/static-data/data";

const cardItems: DtaCardType[] = DtaCard;

const CardGrid = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Grid2 container spacing={0}>
        {cardItems.map((item, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 3 }}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              elevation={0}
              sx={{
                width: 290, // Fixed width
                height: 300, // Fixed height
                //   display: "flex",
                //   flexDirection: "column",
                // justifyContent: "space-between",
                //    alignItems: "center",
                //boxShadow: 3,
                border: "1px solid #F2F4F7",
              }}
            >
              <Box py={3}>
                <Box>
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Box m={2}>
                      <CardMedia
                        sx={{ height: 40, width: 40 }}
                        image={item.image1}
                        title={item.title}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <Box m={2}>
                      <CardMedia
                        sx={{ height: 40, width: 40 }}
                        image={item.image2}
                        title={item.title}
                      />
                    </Box>
                  </Box>
                </Box>

                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Inter",
                      color: "#344054",
                      mb: 3,
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Inter",
                      color: "#667085",
                      fontSize: "14px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CardGrid;
