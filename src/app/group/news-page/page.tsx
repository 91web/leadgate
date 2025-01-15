import React from 'react'
import { Box, Button, Container } from '@mui/material'
import NewsSlider from './components/slide-news';
import ArticleCard from './components/article-card';
import NewsletterSubscription from './components/subscribe-news';

const NewsPage = () => {
  return (
  <Box>
      <div>
        <h1>App LeadGate Group</h1>
      </div>
      <Box>
        <NewsSlider/>
      </Box>
    <Box>
      <Container>
      <ArticleCard/>
      </Container>
      <Box
            sx={{
                display: "flex",
                justifyContent: "center", 
                alignItems: "center", 
                height: "50px", 
            }}
            >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AE883B", // Gold color
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontWeight: "medium",
                textTransform: "none",
                mb: 5,
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  backgroundColor: "#8F6D25",
                },
                "& .MuiButton-endIcon": {
                  display: { xs: "inline-flex", md: "none" }, // Show on mobile, hide on desktop
                },
              }}
              endIcon={<span>&rarr;</span>} // Arrow icon
            >
              Learn More Article
            </Button>

            </Box>
            <Box>
  
            <NewsletterSubscription/>
      
         
            </Box>
    </Box>
  </Box>
  
 
  )
}

export default NewsPage;
