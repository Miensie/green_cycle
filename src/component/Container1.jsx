import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';

const SustainabilitySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sustainabilityData = [
    {
      title: "Reuse",
      description: "At GreenCycle Liberia, we believe in giving materials a second life. Our reuse initiative focuses on collecting, refurbishing, and redistributing items that still have functional value. From furniture to electronics, we ensure that reusable products find new homes instead of ending up in landfills.",
      image: "src/assets/4251d625d62911d0328d5be1d2db90a4.jpg", // Remplacez par votre image
      bgColor: '#ffffff', // Vert fluo
      textSide: 'right',
      textColor: '#000'
    },
    {
      title: "Recycle",
      description: "Our advanced recycling program transforms waste materials into valuable resources. We process plastics, glass, paper, and metals through state-of-the-art facilities, creating raw materials for new products. This closed-loop system reduces environmental impact and promotes circular economy principles in Liberia.",
      image: "src/assets/542723233_122106111518992913_6057981429094286876_n.jpg", // Remplacez par votre image
      bgColor: '#ffffff', // Gris
      textSide: 'left',
      textColor: '#333333'
    },
    {
      title: "Recovery",
      description: "Through energy and material recovery, we extract maximum value from waste streams. Our recovery processes convert non-recyclable materials into clean energy and recover valuable components for industrial use. This innovative approach minimizes landfill dependency and contributes to sustainable energy production.",
      image: "src/assets/eeda0288170b9fca47b7ce6fa4124a5c.jpg", // Remplacez par votre image
      bgColor: '#ffffff', // Blanc
      textSide: 'right',
      textColor: '#333333'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* En-tête */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: 'green',
              mb: 3,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Our Sustainability Commitment
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            At GreenCycle Liberia, we are dedicated to creating a sustainable future through innovative 
            waste management solutions. Our comprehensive approach focuses on the three core principles 
            of modern environmental stewardship: Reuse, Recycle, and Recovery.
          </Typography>
        </Box>

        {/* Sections alternées */}
        {sustainabilityData.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: item.bgColor,
              borderRadius: 4,
              mb: 6,
              p: { xs: 3, md: 6 },
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: item.textSide === 'right' ? 'row' : 'row-reverse'
                },
                alignItems: 'center',
                gap: { xs: 4, md: 8 }
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: { xs: '250px', md: '350px' },
                    height: { xs: '250px', md: '350px' },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    border: '4px solid white'
                  }}
                />
              </Box>

              {/* Texte */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    color: item.textColor,
                    fontWeight: 'bold',
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2.5rem' }
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: item.textColor,
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    opacity: 0.9
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}

        {/* Section de conclusion */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'green',
              fontWeight: 'bold',
              mb: 3
            }}
          >
            Building a Greener Liberia Together
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7
            }}
          >
            Through our integrated approach to sustainability, we are not just managing waste - 
            we are creating value, protecting our environment, and building a circular economy 
            that benefits all Liberians.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SustainabilitySection;