import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

const LuxuryCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2C1810 0%, #1A1A1A 100%)',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(255, 215, 0, 0.2)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  transition: 'transform 0.3s ease-in-out',
});

const blogPosts = [
  {
    title: 'The Future of Gold Mining in Africa',
    excerpt: 'Discover how technological innovations and sustainable practices are shaping the future of gold mining across the African continent.',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. Michael Thompson',
    date: 'March 15, 2025',
    readTime: '8 min read',
    categories: ['Technology', 'Mining'],
  },
  {
    title: 'Investment Opportunities in African Gold',
    excerpt: 'An in-depth analysis of current investment opportunities in the African gold market and strategies for maximizing returns.',
    image: 'https://images.unsplash.com/photo-1610375461183-301970e9669a?auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Chen',
    date: 'March 12, 2025',
    readTime: '10 min read',
    categories: ['Investment', 'Market Analysis'],
  },
  {
    title: 'Sustainable Gold Mining Practices',
    excerpt: 'How modern mining operations are implementing eco-friendly practices while maintaining high productivity levels.',
    image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800&q=80',
    author: 'James Wilson',
    date: 'March 10, 2025',
    readTime: '6 min read',
    categories: ['Sustainability', 'Environment'],
  },
  {
    title: 'Community Impact of Gold Mining',
    excerpt: 'Exploring how gold mining operations contribute to local community development and economic growth in African nations.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. Lisa Okonjo',
    date: 'March 8, 2025',
    readTime: '7 min read',
    categories: ['Community', 'Development'],
  },
  {
    title: 'Gold Market Trends 2025',
    excerpt: 'Analysis of current gold market trends and predictions for the future of gold prices and demand in the global market.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
    author: 'Robert Chang',
    date: 'March 5, 2025',
    readTime: '9 min read',
    categories: ['Market Analysis', 'Trends'],
  },
  {
    title: 'Innovation in Gold Extraction',
    excerpt: 'Latest technological breakthroughs in gold extraction methods that are revolutionizing the mining industry.',
    image: 'https://images.unsplash.com/photo-1624365168968-c5f1dogf5764?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. Ahmed Hassan',
    date: 'March 3, 2025',
    readTime: '8 min read',
    categories: ['Innovation', 'Technology'],
  },
];

const BlogPage = () => {
  return (
    <Box sx={{ bgcolor: '#1A1A1A', minHeight: '100vh', pb: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          mb: 8,
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
            Latest Insights
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
            Expert analysis and updates from the African gold industry
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <LuxuryCard>
                <Box sx={{ position: 'relative' }}>
                  <StyledCardMedia
                    image={post.image}
                    title={post.title}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: 'rgba(0,0,0,0.6)',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
                      }}
                    >
                      <ShareIcon sx={{ color: '#FFD700' }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        bgcolor: 'rgba(0,0,0,0.6)',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
                      }}
                    >
                      <BookmarkBorderIcon sx={{ color: '#FFD700' }} />
                    </IconButton>
                  </Box>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    {post.categories.map((category, idx) => (
                      <Chip
                        key={idx}
                        label={category}
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: 'rgba(255, 215, 0, 0.1)',
                          color: '#FFD700',
                          '&:hover': {
                            bgcolor: 'rgba(255, 215, 0, 0.2)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#FFD700',
                      mb: 2,
                      fontWeight: 600,
                      '&:hover': {
                        color: '#B8860B',
                      },
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#E0E0E0',
                      mb: 3,
                      lineHeight: 1.8,
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      color: '#E0E0E0',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PersonIcon sx={{ fontSize: 20, color: '#FFD700' }} />
                      <Typography variant="body2">{post.author}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeIcon sx={{ fontSize: 20, color: '#FFD700' }} />
                      <Typography variant="body2">{post.readTime}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </LuxuryCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
