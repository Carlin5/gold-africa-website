import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1578662996442-48f60103fc96)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          maxWidth: '800px',
          position: 'relative',
          zIndex: 1,
          animation: 'fadeIn 1.5s ease-out',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              color: '#FFD700',
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Discover Africa's Golden Legacy
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#E0E0E0',
              mb: 4,
              maxWidth: '600px',
              lineHeight: 1.6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Explore the rich history, modern opportunities, and sustainable future of gold mining in Africa
          </Typography>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.2rem',
              backgroundColor: '#FFD700',
              color: '#000',
              '&:hover': {
                backgroundColor: '#B8860B',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
