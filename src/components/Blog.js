import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Blog = () => {
  const articles = [
    {
      title: 'Top Gold Producing Countries in Africa',
      content: `Africa's gold mining industry is one of the most important in the world. Countries like Ghana, South Africa, Tanzania, and Mali are among the top gold producers. South Africa, historically the world's largest producer, continues to contribute significantly to the global gold market.`,
      image: 'https://images.unsplash.com/photo-1565369728679-e80315a31b31',
    },
    {
      title: 'Why Invest in African Gold?',
      content: `Investing in African gold offers unique opportunities. The continent's vast untapped reserves, improving infrastructure, and growing economies make it an attractive investment destination. Gold's historical stability as a store of value, particularly during economic uncertainty, makes it a valuable addition to any investment portfolio.`,
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7',
    },
    {
      title: 'The History of Gold in Africa',
      content: `Gold has been intrinsically linked to African history for millennia. From ancient Egypt's elaborate golden artifacts to the wealthy Mali Empire's Mansa Musa, whose pilgrimage to Mecca with gold caused inflation along his route, gold has shaped African civilizations and trade routes.`,
      image: 'https://images.unsplash.com/photo-1610375461247-b9a7b51d9173',
    },
    {
      title: 'Modern Gold Mining Technologies',
      content: `Today's African gold mining industry employs cutting-edge technologies. From satellite surveying to AI-powered extraction processes, modern methods are making mining more efficient and environmentally conscious while maintaining Africa's position as a global gold mining leader.`,
      image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51',
    },
    {
      title: 'Environmental Responsibility in Gold Mining',
      content: `African nations are increasingly focusing on sustainable mining practices. This includes water conservation, land rehabilitation, and reducing mercury use in gold extraction. Many companies are adopting eco-friendly mining techniques to protect Africa's rich biodiversity.`,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#2C1810' }}>
      <Typography variant="h3" component="h2" sx={{ textAlign: 'center', mb: 6, color: '#FFD700' }}>
        Gold Insights
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
              height: '100%', 
              backgroundColor: '#3C2A20',
              color: '#FFF',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ mb: 2, color: '#FFD700' }}>
                  {article.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#E0E0E0' }}>
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
