import React from 'react';
import { Box, Typography, Container, ImageList, ImageListItem, Modal } from '@mui/material';
import { useState } from 'react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      img: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
      title: 'Gold Mining Operations',
      description: 'Modern gold mining facility showcasing advanced extraction techniques',
    },
    {
      img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d',
      title: 'Traditional Gold Artifacts',
      description: 'Historical African gold artifacts displaying cultural significance',
    },
    {
      img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae',
      title: 'Gold Processing',
      description: 'State-of-the-art gold processing and refinement',
    },
    {
      img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      title: 'Mining Community',
      description: 'Local communities benefiting from sustainable mining practices',
    },
    {
      img: 'https://images.unsplash.com/photo-1624365168968-c5f1dogf5764',
      title: 'Environmental Responsibility',
      description: 'Environmentally conscious mining operations in action',
    },
    {
      img: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4',
      title: 'Gold Investment',
      description: 'Physical gold as a secure investment option',
    },
    {
      img: 'https://images.unsplash.com/photo-1610375461583-9c97d5df0e2c',
      title: 'Mining Technology',
      description: 'Cutting-edge technology in modern mining operations',
    },
    {
      img: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
      title: 'Cultural Heritage',
      description: 'Gold in African cultural ceremonies and traditions',
    },
    {
      img: 'https://images.unsplash.com/photo-1610375461183-301970e9669a',
      title: 'Sustainable Mining',
      description: 'Responsible mining practices for a sustainable future',
    }
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#1A1A1A', minHeight: '100vh' }}>
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
          Gallery
        </Typography>

        <ImageList 
          sx={{ 
            width: '100%', 
            height: 'auto',
            gap: '24px !important',
          }} 
          cols={3}
        >
          {images.map((item, index) => (
            <ImageListItem 
              key={index}
              sx={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover img': {
                  transform: 'scale(1.1)',
                },
                '&:hover::after': {
                  opacity: 1,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                },
              }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={`${item.img}?w=400&h=300&fit=crop&auto=format`}
                srcSet={`${item.img}?w=400&h=300&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Modal
          open={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: '#2C1810',
            p: 3,
            borderRadius: 2,
            outline: 'none',
          }}>
            {selectedImage && (
              <>
                <img
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                  }}
                />
                <Typography variant="h5" sx={{ color: '#FFD700', mt: 2 }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#E0E0E0', mt: 1 }}>
                  {selectedImage.description}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default GalleryPage;
