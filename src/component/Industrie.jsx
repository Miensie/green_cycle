import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';

const IndustriesWeServe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const industries = [
    {
      name: "  Energy & Biofuels services ",
      image: "/assets/a41730a455051f727fd1915a1a91128e.jpg" // Remplacez par votre image
    },
    {
      name: "Water traetment ", 
      image: "/assets/cbafaa4bf8c63619160c1a72f2b4a531.jpg" // Remplacez par votre image
    },
    {
      name: "Environmental Services",
      image: "/assets/a3f89a1f199f1a8b8785e8f221b1c1d2.jpg" // Remplacez par votre image
    },
    {
      name: "Sustainable Materials",
      image: "/assets/e06dd1dd8c516f236849758f59c7d336.jpg" // Remplacez par votre image
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#10232bff',
        borderRadius: { xs: 8, md: 20 },
        width: { xs: '100%', sm: '90%', md: '1000px', lg: '1200px' },
        height: { xs: 'auto', md: '700px' },
        mx: 'auto',
        my: { xs: 4, md: 10 },
        minHeight: { xs: '500px', md: '700px' }
      }}
    >
      <Container maxWidth="lg">
        {/* Titre principal */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' },
            mb: { xs: 2, md: 3 },
            color: 'background.paper',
            px: { xs: 2, md: 0 }
          }}
        >
          Industries We Serve
        </Typography>

        {/* Description */}
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: { xs: 4, md: 6 },
            color: 'background.paper',
            lineHeight: 1.6,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
            px: { xs: 2, md: 0 }
          }}
        >
          Transform and accelerate waste-to-resource innovation at scale with GreenCycle Liberia.
          Our sustainable solutions support communities, businesses, and environmental goals across all sectors
        </Typography>

        {/* Grille des industries */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 8, px: { xs: 2, md: 0 } }}>
          {industries.map((industry, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Image circulaire */}
              <Box
                component="img"
                src={industry.image}
                alt={industry.name}
                sx={{
                  width: { xs: 120, sm: 150, md: 180, lg: 200 },
                  height: { xs: 120, sm: 150, md: 180, lg: 200 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mb: { xs: 2, md: 3 },
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.18)'
                  }
                }}
              />
              
              {/* Nom de l'industrie */}
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: '600',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.25rem' },
                  color: 'background.paper',
                  px: { xs: 1, md: 0 }
                }}
              >
                {industry.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Sous-titre */}
       
      </Container>
    </Box>
  );
};

export default IndustriesWeServe;