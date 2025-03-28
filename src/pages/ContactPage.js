import React from 'react';
import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage = () => {
  const whatsappNumber = '+243815186811';

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Our Location',
      content: 'Multiple locations across Africa',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Email Us',
      content: 'info@goldinafrica.com',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 5:00 PM',
    },
  ];

  return (
    <Box sx={{ 
      py: 12, 
      backgroundColor: '#1A1A1A',
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1610375461246-83df859d849d)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            color: '#FFD700',
            textAlign: 'center',
            mb: 6,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'rgba(44, 24, 16, 0.9)',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                }
              }}>
                {info.icon}
                <Typography variant="h5" sx={{ color: '#FFD700', my: 2 }}>
                  {info.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#E0E0E0' }}>
                  {info.content}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{
          p: 6,
          backgroundColor: 'rgba(44, 24, 16, 0.9)',
          textAlign: 'center',
          maxWidth: 600,
          mx: 'auto',
        }}>
          <Typography variant="h4" sx={{ color: '#FFD700', mb: 4 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#E0E0E0', mb: 4, fontSize: '1.1rem' }}>
            Ready to explore opportunities in African gold? Our experts are just a message away. 
            Connect with us on WhatsApp for immediate assistance.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#25D366',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
              fontSize: '1.2rem',
              py: 2,
              px: 4,
            }}
          >
            Chat on WhatsApp
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactPage;
