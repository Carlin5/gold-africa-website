import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700',
      dark: '#B8860B',
      light: '#FFF8DC',
    },
    secondary: {
      main: '#8B4513',
      dark: '#654321',
      light: '#DEB887',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2C1810',
    },
    text: {
      primary: '#FFD700',
      secondary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.02em',
      color: '#FFD700',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#FFD700',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#FFD700',
    },
    h4: {
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    h6: {
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'none',
      letterSpacing: '0.02em',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '10px 20px',
          transition: 'all 0.3s ease-in-out',
        },
        contained: {
          backgroundColor: '#FFD700',
          color: '#000',
          '&:hover': {
            backgroundColor: '#B8860B',
            transform: 'translateY(-2px)',
          },
          boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1624365168968-c5f1dogf5764)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2C1810',
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.2)',
    '0 4px 8px rgba(0,0,0,0.2)',
    '0 8px 16px rgba(0,0,0,0.2)',
    '0 16px 32px rgba(0,0,0,0.2)',
    '0 32px 64px rgba(0,0,0,0.2)',
  ],
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: '#1A1A1A',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255,215,0,0.05) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          },
        }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
