import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2"; // Use this for the experimental Grid2 API

import { MissionData, MissionType } from "../component/static-data/data";

const cardItems: MissionType[] = MissionData;

const MissionCard = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Grid2 container spacing={2}>
        {cardItems.map((item, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
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
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                alignItems: "center",
                //boxShadow: 3,
                border: "1px solid #F2F4F7",
              }}
            >
              <Box py={3}>
                <Box
                  sx={{
                    mt: "70px",
                    justifyContent: "center",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  <CardMedia
                    sx={{ height: 40, width: 43 }}
                    image={item.image}
                    title={item.mission}
                  />
                </Box>

                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Inter",
                      color: "#344054",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.mission}
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

export default MissionCard;
