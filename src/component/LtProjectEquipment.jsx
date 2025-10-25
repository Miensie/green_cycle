import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { East } from '@mui/icons-material';

const ServicesPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: "Industrial Waste Sorting Center",
      description: "Sorting & Separation: Semi-mechanized sorting hall (conveyors, trommels, manual sorters) separates incoming waste into organics, plastics, and inerts.",
      image: "/assets/WhatsApp Image 2025-10-08 à 00.58.10_499d008d.jpg",
    },
    {
      title: "Energy production unit",
      description: "Production of biogases for cooking + Nutrient-rich digestates to be used as liquid fertilizers for farmers",
      image: "/assets/WhatsApp Image 2025-10-08 à 01.00.06_9ce40b63.jpg",
     
    },
    {
      title: "Composting process",
      description: "Raw organic wastes composted aerobically into high-grade fertilizer for farmers",
      image: "/assets/WhatsApp Image 2025-10-11 à 01.12.39_86e4cf7a.jpg",
      image: "/assets/WhatsApp Image 2025-10-11 à 01.12.55_b0b4f7b6.jpg",
     
    },
    {
      title: "Plastic transformation",
      description: "Production of gasoline from plastic wastes",
      image: "/assets/WhatsApp Image 2025-10-09 à 04.09.05_5a6766ed.jpg",

    },
    {
      title: "Plastique Upcycling",
      description: "Plastic wastes converted to construction materials",
      image: "/assets/WhatsApp Image 2025-10-09 à 04.08.44_073d7368.jpg",
     
    }
   
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: '#0a2e0a',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Equipments for the long-term projects :
          </Typography>
        </Box>

        {/* Services Flex Container */}
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            overflowX: 'hidden'
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)', lg: '350px' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                
               
              }}
            >
              {/* Service Image */}
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: 'cover'
                }}
              />

              {/* Service Content */}
              <CardContent sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                p: 4 
              }}>
                {/* Service Title */}
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#0a2e0a',
                    mb: 2
                  }}
                >
                  {service.title}
                </Typography>

                {/* Service Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: 3,
                    flexGrow: 1
                  }}
                >
                  {service.description}
                </Typography>

                {/* Find out more Button */}
                
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPresentation;