import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1A1A1A', boxShadow: '0 2px 10px rgba(255, 215, 0, 0.2)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h5" 
            component={Link}
            to="/"
            sx={{ 
              flexGrow: 1, 
              color: '#FFD700',
              fontWeight: 'bold',
              letterSpacing: 1,
              textDecoration: 'none',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Gold in Africa
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                variant={item.label === 'Contact' ? 'contained' : 'text'}
                sx={{ 
                  color: item.label === 'Contact' ? '#000' : '#FFD700',
                  backgroundColor: item.label === 'Contact' 
                    ? '#FFD700' 
                    : isActive(item.path) 
                      ? 'rgba(255, 215, 0, 0.1)' 
                      : 'transparent',
                  '&:hover': {
                    backgroundColor: item.label === 'Contact' 
                      ? '#B8860B'
                      : 'rgba(255, 215, 0, 0.1)',
                  },
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
