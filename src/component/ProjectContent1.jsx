import React from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CompanyPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#030303ff',
              fontStyle: 'normal',
              fontSize: { xs: '1.1rem', md: '2.5rem' },
              mb: 4,
              fontWeight: 'bold',
            }}
          >
            Integrated Waste Recovery Center : Monrovia Project
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '900px' }}>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.9,
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: 'text.secondary',
              backgroundColor: 'white',
              textAlign: 'justify',
              p: 1,
              borderRadius: 2,
            }}
          >
            GreenCycle Liberia's flagship initiative aims to 
            transform Monrovia's solid waste crisis into sustainable 
            economic and environmental opportunities. With Liberia 
            generating over 540,000 tons of municipal waste annually, 
            most of which is mismanaged, this project introduces a practical,
             circular solution to the country's growing waste problem.
            The project will establish an Integrated Waste Recovery Center 
            in Monrovia — the first of its kind in Liberia — designed to 
            convert organic and plastic waste into clean biogas, compost 
            fertilizer, and recycled plastic products. By capturing and reusing 
            waste locally, the initiative will significantly reduce pollution, 
            improve urban sanitation, and cut greenhouse gas emissions.
            Beyond environmental benefits, the project drives inclusive economic 
            growth. It will create more than 250 green jobs and train 300 youth 
            and women in waste management, recycling, and green entrepreneurship. 
            At least 50% of all employment and training opportunities will go to women, 
            promoting gender equity and social inclusion.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          mt: 4
        }}>
          {/* Partie gauche - Contenu texte */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            order: { xs: 2, md: 1 }
          }}>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: 'text.secondary',
                backgroundColor: 'white',
                textAlign: 'justify',
                p: 1,
                borderRadius: 2,
                mb: 3
              }}
            >
              By the end of its third year, the project aims to:
            </Typography>

            {[
              "Divert 81,000 tons of waste from dumps and open burning.",
              "Produce 2.9 million m³ of biogas for clean energy use.",
              "Generate 2,430 tons of organic compost for farmers.",
              "Recycle 3,240 tons of plastic into construction and consumer products."
            ].map((item, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'flex-start',
                mb: 2
              }}>
                <CheckCircleOutlineIcon sx={{ 
                  mt: '10px', 
                  mr: 2,
                  color: 'success.main',
                  flexShrink: 0
                }}/>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.9,
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    color: 'text.secondary',
                    backgroundColor: 'white',
                    textAlign: 'justify',
                    p: 0,
                    borderRadius: 2,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}

            <Box sx={{ maxWidth: '100%', mt: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.9,
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: 'text.secondary',
                  backgroundColor: 'white',
                  textAlign: 'justify',
                  p: 1,
                  borderRadius: 2,
                }}
              >
                With a total budget of €900,000, GreenCycle Liberia seeks 
                partnerships with development agencies, donors, and private
                 institutions to implement this vision. The project directly 
                 supports Liberia's National Waste Management Policy and the 
                 UN Sustainable Development Goals (SDGs 7, 11, 12, and 13) 
                 advancing clean energy, sustainable cities, responsible consumption,
                  and climate action.
                This long-term initiative reflects GreenCycle Liberia's commitment
                 to building a green, inclusive, and self-sustaining waste economy, 
                 turning pollution into progress for a cleaner and more resilient Liberia.
              </Typography>
            </Box>
          </Box>

          {/* Partie droite - Image */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            order: { xs: 1, md: 2 }
          }}>
            <Box
              component="img"
              src="/assets/1c8f362aa04d888a910b9820fc884b42.jpg"
              alt="Description de l'image"
              sx={{
                width: { xs: '100%', md: '400px' },
                height: { xs: '300px', md: '400px' },
                maxWidth: '400px',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyPresentation;