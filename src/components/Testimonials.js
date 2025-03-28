import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Mining Expert',
    content: 'The quality of African gold is unmatched. The rich deposits and skilled workforce make it a prime location for gold mining.',
    avatar: 'https://image.shutterstock.com/image-photo/portrait-smiling-african-american-business-600w-1517010903.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Gold Trader',
    content: 'Working with African gold suppliers has been an incredible experience. The professionalism and quality are outstanding.',
    avatar: 'https://image.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-600w-1667439898.jpg',
  },
  {
    name: 'Michael Okonjo',
    role: 'Local Community Leader',
    content: 'Gold mining has transformed our community, providing jobs and supporting local development initiatives.',
    avatar: 'https://image.shutterstock.com/image-photo/close-portrait-smiling-mature-black-600w-1491637853.jpg',
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f8f8' }}>
      <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, color: '#D4AF37' }}>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    src={testimonial.avatar}
                    sx={{ width: 80, height: 80, mb: 2 }}
                  />
                  <Typography variant="h6" component="h3">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  "{testimonial.content}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
