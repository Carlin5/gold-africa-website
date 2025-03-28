import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const About = () => {
  const features = [
    {
      title: 'Rich Heritage',
      description: 'Africa has been a cornerstone of global gold production for centuries. From ancient Egyptian treasures to modern mining operations, the continent\'s golden legacy continues to shine. Countries like Ghana, known historically as the "Gold Coast," have built their economies around this precious metal.',
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
    },
    {
      title: 'Modern Mining',
      description: 'Today, African nations employ cutting-edge technology in gold extraction. Countries like South Africa, Ghana, Mali, and Tanzania are leading producers, using sustainable practices and advanced techniques to maintain their position in the global market. These operations provide thousands of jobs and contribute significantly to local economies.',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae',
    },
    {
      title: 'Investment Potential',
      description: 'Gold remains one of the most stable investment options globally. African gold, with its high quality and growing production capacity, offers unique investment opportunities. From direct mining investments to gold-backed securities, the sector provides diverse options for investors seeking to diversify their portfolios.',
      image: 'https://images.unsplash.com/photo-1610375461183-301970e9669a',
    },
    {
      title: 'Sustainable Practices',
      description: 'Modern African gold mining emphasizes environmental responsibility and community development. Mining companies are implementing eco-friendly extraction methods, supporting local communities, and ensuring fair labor practices. This commitment to sustainability ensures the industry\'s long-term viability.',
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#2C1810' }}>
      <Typography variant="h3" component="h2" sx={{ 
        textAlign: 'center', 
        mb: 6, 
        color: '#FFD700',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }}>
        About African Gold
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
              height: '100%', 
              backgroundColor: '#3C2A20',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={feature.image}
                alt={feature.title}
              />
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ mb: 2, color: '#FFD700' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#E0E0E0' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
