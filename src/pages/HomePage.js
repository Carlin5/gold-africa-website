import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForward from '@mui/icons-material/ArrowForward';
import DiamondIcon from '@mui/icons-material/Diamond';
import SecurityIcon from '@mui/icons-material/Security';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link } from 'react-router-dom';

const LuxurySection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(15, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(44,24,16,0.8) 100%)',
    zIndex: 1,
  },
}));

const GoldCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2C1810 0%, #1A1A1A 100%)',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
  },
}));

const HomePage = () => {
  const features = [
    {
      icon: <DiamondIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Premium Quality',
      description: 'Discover the finest gold resources and investment opportunities in Africa'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Secure Investment',
      description: 'Your trusted partner in African gold market investments'
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Market Analysis',
      description: 'Expert insights and analysis of African gold markets'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Community Impact',
      description: 'Supporting sustainable development in African communities'
    }
  ];

  const statistics = [
    { number: '50+', label: 'Years of Excellence' },
    { number: '1000+', label: 'Successful Projects' },
    { number: '25+', label: 'African Countries' },
    { number: '100K+', label: 'Community Members' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/29336325/pexels-photo-29336325.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255,215,0,0.2) 0%, rgba(0,0,0,0.4) 70%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  animation: 'fadeIn 1.5s ease-out',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', md: '4.5rem' },
                    fontWeight: 700,
                    color: '#FFD700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Discover Africa's Golden Legacy
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#E0E0E0',
                    mb: 4,
                    maxWidth: '800px',
                    lineHeight: 1.6,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  }}
                >
                  Explore the richest gold deposits and investment opportunities across the African continent
                </Typography>
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 2,
                    px: 6,
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
                  Explore Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <LuxurySection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: '#FFD700',
              mb: 8,
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={3} key={index}>
                <GoldCard>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <IconButton
                      sx={{
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        mb: 3,
                        '&:hover': { backgroundColor: 'rgba(255, 215, 0, 0.2)' },
                      }}
                    >
                      {feature.icon}
                    </IconButton>
                    <Typography
                      variant="h5"
                      sx={{ color: '#FFD700', mb: 2, fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography sx={{ color: '#E0E0E0' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </GoldCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </LuxurySection>

      {/* Statistics Section */}
      <Box
        sx={{
          py: 15,
          background: 'linear-gradient(45deg, #1A1A1A 0%, #2C1810 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {statistics.map((stat, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: '#FFD700',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#FFD700',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#E0E0E0',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
