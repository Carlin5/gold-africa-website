import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const whatsappNumber = '+243815186811';

  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Paper sx={{ 
        p: 4, 
        backgroundColor: '#2C1810',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.1)'
      }}>
        <Typography variant="h3" component="h2" sx={{ mb: 4, color: '#FFD700' }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#E0E0E0' }}>
          Ready to explore opportunities in African gold? Get in touch with our experts through WhatsApp
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
    </Box>
  );
};

export default Contact;
