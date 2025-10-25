import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Example() {
  const logos = [
    {
      src: "/assets/WhatsApp Image 2025-10-09 à 04.13.52_816d9fcb.jpg",
      alt: ""
    },
    {
      src: "/assets/WhatsApp Image 2025-10-09 à 04.14.11_af954241.jpg",
      alt: ""
    },
    {
      src: "/assets/WhatsApp Image 2025-10-09 à 04.14.30_6a5e8478.jpg",
      alt: ""
    },
    {
      src: "/assets/WhatsApp Image 2025-10-09 à 04.14.47_7613d278.jpg",
      alt: ""
    },
    {
      src: "/assets/WhatsApp Image 2025-10-09 à 04.15.06_93f245a6.jpg",
      alt: ""
    },
    {
      src: "/assets/WhatsApp Image 2025-10-09 à 04.15.21_d8b68c11.jpg",
      alt: ""
    }
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, sm: 10 },
      }}
    >
      <Container maxWidth="lg">
        
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{
            fontWeight: 600,
            color: 'green',
            mb: 8
          }}
        >
         ENDORSEMENTS & PARTNERSHIPS
        </Typography>
        <Typography 
        variant='h5'
        component='h2'
        sx={{
            color: 'text.secondary',
            fontSize: {xs:'1rem', md:'1.2rem'},
            mb: 6
        }}
        >
            Our partners have placed their trust in us to drive sustainable change across Liberia.
        </Typography>
        <Grid
          container
          spacing={{ xs: 4, sm: 5 }}
          sx={{
            maxWidth: { xs: 'lg', sm: 'xl' },
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs:4, md:8}
          }}
        >
          {logos.map((logo, index) => (
            <Grid
              item
              key={logo.alt}
              xs={6}
              sm={4}
              lg={2.4}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                ...(index === 3 && {
                  sm: {
                    gridColumn: '2 / span 2'
                  }
                }),
                ...(index === 4 && {
                  xs: {
                    gridColumn: '2 / span 2'
                  },
                  sm: {
                    gridColumn: 'auto'
                  }
                })
              }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{
                  maxHeight: 80,
                  width: '100%',
                  objectFit: 'contain',
                  maxWidth: 250
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}