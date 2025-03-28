import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  const services = [
    'Investment Consulting',
    'Market Analysis',
    'Mining Operations',
    'Community Development',
    'Sustainability Programs',
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A1A1A',
        pt: 8,
        pb: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              component={Link}
              to="/"
              sx={{
                color: '#FFD700',
                textDecoration: 'none',
                fontWeight: 700,
                mb: 3,
                display: 'block',
                '&:hover': {
                  color: '#B8860B',
                },
              }}
            >
              Gold in Africa
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#E0E0E0',
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Discover the richest gold deposits and investment opportunities across the African continent. Your trusted partner in African gold market investments.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: '#FFD700',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', mb: 3, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="nav">
              {quickLinks.map((link, index) => (
                <Typography
                  key={index}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#E0E0E0',
                    display: 'block',
                    mb: 2,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: '#FFD700',
                      transform: 'translateX(10px)',
                    },
                  }}
                >
                  {link.title}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFD700', mb: 3, fontWeight: 600 }}>
              Our Services
            </Typography>
            <Box>
              {services.map((service, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: '#E0E0E0',
                    mb: 2,
                    display: 'block',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: '#FFD700',
                    },
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(255, 215, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#E0E0E0',
              opacity: 0.8,
            }}
          >
            {new Date().getFullYear()} Gold in Africa. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
