import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Typography } from '@mui/material';

const testimonial = {
  avatar: 'https://via.placeholder.com/60', // Replace with actual avatar URL
  name: 'Dominic Smith',
  title: 'Software Engineer at DOMI',
  feedback: 'DOMI has completely transformed the way our team collaborates. The platform is intuitive, reliable, and packed with features that save us time every day!',
};

const TestimonialCard = () => {
  return (
    <Card
      sx={{
        borderRadius: '12px',
        padding: 1,
        m:5,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        backgroundColor: 'white',
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={testimonial.avatar}
            alt={testimonial.name}
            sx={{ width: 60, height: 60 }}
          />
        }
        title={
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {testimonial.name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            {testimonial.title}
          </Typography>
        }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(0, 0, 0, 0.8)',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {testimonial.feedback}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
