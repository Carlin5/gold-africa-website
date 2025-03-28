import React from 'react';
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';

const Gallery = () => {
  const images = [
    {
      img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d',
      title: 'Gold Mining in Africa',
    },
    {
      img: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
      title: 'Gold Jewelry',
    },
    {
      img: 'https://images.unsplash.com/photo-1624365168968-c5f1dogf5764',
      title: 'Gold Bars',
    },
    {
      img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      title: 'Traditional African Gold',
    },
    {
      img: 'https://images.unsplash.com/photo-1610375461583-9c97d5df0e2c',
      title: 'Modern Mining',
    },
    {
      img: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4',
      title: 'Gold Processing',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#1a1a1a' }}>
      <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, color: '#FFD700' }}>
        Gallery
      </Typography>
      <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight={300}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=400&h=300&fit=crop&auto=format`}
              srcSet={`${item.img}?w=400&h=300&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
