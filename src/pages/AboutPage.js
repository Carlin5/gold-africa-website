import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import HistoryIcon from '@mui/icons-material/History';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';

const LuxuryCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2C1810 0%, #1A1A1A 100%)',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
  },
}));

const AboutPage = () => {
  const sections = [
    {
      icon: <HistoryIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Rich Heritage',
      content: 'Africa\'s gold mining history spans centuries, from ancient Egyptian treasures to modern-day operations. The continent has been a cornerstone of global gold production, shaping civilizations and economies throughout history.'
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Modern Operations',
      content: 'Today, Africa hosts some of the world\'s most sophisticated gold mining operations, utilizing cutting-edge technology and sustainable practices to extract precious resources efficiently and responsibly.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Community Impact',
      content: 'Our operations prioritize local community development through job creation, education initiatives, and infrastructure development. We believe in creating lasting positive impact in the regions where we operate.'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#1A1A1A', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/8442318/pexels-photo-8442318.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
            background: 'radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, rgba(0,0,0,0.3) 70%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 700,
              color: '#FFD700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 3,
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#E0E0E0',
              maxWidth: '800px',
              lineHeight: 1.6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Leading Africa's gold industry with innovation, responsibility, and excellence
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {/* Mission Statement */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#FFD700',
              mb: 4,
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#E0E0E0',
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.8,
              fontStyle: 'italic',
            }}
          >
            "To unlock Africa's golden potential while fostering sustainable development and creating lasting value for our communities, partners, and stakeholders."
          </Typography>
        </Box>

        {/* Core Values */}
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <LuxuryCard>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {section.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#FFD700',
                      mb: 2,
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#E0E0E0',
                      textAlign: 'center',
                      lineHeight: 1.8,
                    }}
                  >
                    {section.content}
                  </Typography>
                </CardContent>
              </LuxuryCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
