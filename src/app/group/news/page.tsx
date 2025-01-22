import React from 'react'
import { Box, Button, Container } from '@mui/material'
import NewsCover from './components/news-cover';
import ArticleCard from './components/article-card';
import NewsletterSubscription from './components/subscribe-news';

const NewsPage = () => {
  return (
  <Box>
      <Box>
        <NewsCover/>
      </Box>
    <Box bgcolor={"#fff"}>
      <Container maxWidth="lg">
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
                fontFamily: "Inter",
                fontWeight: "regular",
                textTransform: "none",
                mb: 8,
                fontSize:'17px',
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
            <Box bgcolor={"#F2F4F7"} mt={2}>
            <NewsletterSubscription/>
          
            </Box>
    </Box>
  </Box>
  
 
  )
}

export default NewsPage;
