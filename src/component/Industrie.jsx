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
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const industries = [
    {
      name: "Energy & Biofuels Services",
      image: "/assets/a41730a455051f727fd1915a1a91128e.jpg" // À remplacer
    },
    {
      name: "Water Treatment", 
      image: "/assets/cbafaa4bf8c63619160c1a72f2b4a531.jpg" // À remplacer
    },
    {
      name: "Environmental Services",
      image: "/assets/a3f89a1f199f1a8b8785e8f221b1c1d2.jpg" // À remplacer
    },
    {
      name: "Sustainable Materials",
      image: "/assets/e06dd1dd8c516f236849758f59c7d336.jpg" // À remplacer
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        backgroundColor: '#10232bff',
        borderRadius: { xs: 4, sm: 6, md: 10, lg: 20 },
        width: { xs: '95%', sm: '90%', md: '1000px', lg: '1200px' },
        minHeight: { xs: 'auto', md: '700px' },
        mx: 'auto',
        my: { xs: 4, sm: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Titre principal */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.3rem', md: '2.5rem', lg: '3rem' },
            mb: { xs: 3, md: 4 },
            color: 'white',
            width: '100%',
            lineHeight: 1.2
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
            maxWidth: { xs: '100%', sm: '90%', md: '800px' },
            mb: { xs: 6, sm: 7, md: 8 },
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.7,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.25rem' },
            fontWeight: 400
          }}
        >
          Transform and accelerate waste-to-resource innovation at scale with GreenCycle Liberia.
          Our sustainable solutions support communities, businesses, and environmental goals across all sectors.
        </Typography>

        {/* Grille des industries - MOBILE: 1 colonne, TABLET: 2 colonnes, DESKTOP: 4 colonnes */}
        <Grid 
          container 
          spacing={{ xs: 6, sm: 5, md: 4 }}
          sx={{ 
            width: '100%',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {industries.map((industry, index) => (
            <Grid 
              item 
              xs={12}        // Mobile: 1 colonne (100%)
              sm={6}         // Tablet: 2 colonnes (50%)
              md={3}         // Desktop: 4 colonnes (25%)
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: { xs: '300px', sm: '250px', md: '100%' }
                }}
              >
                {/* Image circulaire - PLUS GRANDE sur mobile */}
                <Box
                  component="img"
                  src={industry.image}
                  alt={industry.name}
                  sx={{
                    width: { 
                      xs: 200,  // Mobile: 200px
                      sm: 180,  // Tablet: 180px
                      md: 160,  // Desktop small: 160px
                      lg: 180   // Desktop large: 180px
                    },
                    height: { 
                      xs: 200, 
                      sm: 180, 
                      md: 160, 
                      lg: 180 
                    },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: { xs: 3, sm: 2.5, md: 3 },
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    border: '3px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      boxShadow: '0 12px 40px rgba(127, 226, 97, 0.3)',
                      borderColor: 'rgba(127, 226, 97, 0.5)'
                    }
                  }}
                />
                
                {/* Nom de l'industrie - PLUS GRAND sur mobile */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: '600',
                    fontSize: { 
                      xs: '1.3rem',   // Mobile: plus grand
                      sm: '1.2rem',   // Tablet
                      md: '1.1rem',   // Desktop small
                      lg: '1.25rem'   // Desktop large
                    },
                    color: 'white',
                    lineHeight: 1.4,
                    minHeight: { xs: 'auto', md: '60px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 2, sm: 1, md: 0.5 }
                  }}
                >
                  {industry.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Espacement final */}
        <Box sx={{ mt: { xs: 4, md: 6 } }} />
      </Container>
    </Box>
  );
};

export default IndustriesWeServe;