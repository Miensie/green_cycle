import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery
} from '@mui/material';

export default function Example() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const images = [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
      hideOnMobile: true
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
      hideOnMobile: false
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
      hideOnMobile: false
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
      hideOnMobile: false
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
      hideOnMobile: false
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
      hideOnMobile: false
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
      hideOnMobile: false
    }
  ];

  const renderImageGrid = () => {
    const columns = [
      images.slice(0, 2),  // Première colonne
      images.slice(2, 5),  // Deuxième colonne
      images.slice(5, 7)   // Troisième colonne
    ];

    return (
      <Box
        sx={{
          position: { xs: 'static', lg: 'absolute' },
          top: { lg: '50%' },
          left: { lg: '50%' },
          transform: { 
            sm: 'translateX(32px)', 
            lg: 'translate(32px, -50%)' 
          },
          mt: { xs: 4, lg: 0 },
          pointerEvents: 'none',
          display: 'flex',
          gap: { xs: 2, lg: 3 },
          justifyContent: 'center'
        }}
      >
        {columns.map((column, colIndex) => (
          <Box
            key={colIndex}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, lg: 3 },
              flexShrink: 0
            }}
          >
            {column.map((image, imgIndex) => (
              <Card
                key={imgIndex}
                sx={{
                  width: { xs: 120, sm: 176 },
                  height: { xs: 180, sm: 256 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  opacity: image.hideOnMobile && isMobile ? 0 : 1,
                  display: image.hideOnMobile && isMobile ? 'none' : 'block'
                }}
              >
                <CardMedia
                  component="img"
                  image={image.src}
                  alt=""
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white',
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          pt: { xs: 8, sm: 12, lg: 20 },
          pb: { xs: 20, sm: 20, lg: 24 }
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            px: { xs: 2, sm: 3, lg: 4 }
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <Box sx={{ maxWidth: { sm: '32rem' } }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3.75rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: 'text.primary',
                    mb: 2
                  }}
                >
                  Reducing waste, restoring balance, protecting tomorrow
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    color: 'text.secondary',
                    mb: 5,
                    lineHeight: 1.6
                  }}
                >
                 GreenCycle Liberia is a flagship initiative dedicated to transforming Monrovia’s 
             solid waste challenges into sustainable economic opportunities. By focusing on recycling,
             composting, and innovative waste-to-value solutions, we are building a cleaner city while creating green jobs, 
             supporting local farmers with organic fertilizers, and producing clean biogas for energy.

                </Typography>
                
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: 2,
                    '&:hover': {
                      backgroundColor: '#4338ca',
                      boxShadow: 3
                    }
                  }}
                >
                  Shop Collection
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, lg: 600 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {renderImageGrid()}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}