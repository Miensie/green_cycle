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
        {/* Partie 2 */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#030303ff',
              fontStyle:'normal',
              fontSize: { xs: '1.1rem', md: '2.5rem' },
              mb: 4,
              fontWeight:'bold',
            }}
          >
            2. Residence & Commercial Waste Segregation and Collection Pilot  Monrovia
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          mb: 8
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
                textAlign:'justify',
                p: 1,
                borderRadius: 2,
              }}
            >
              GreenCycle Liberia, in partnership with the Monrovia City Corporation (MCC),
              is launching a pilot program to promote waste segregation at the source in 
              selected Monrovia communities. This project introduces a structured door-to-door 
              collection system managed by trained local waste collectors, targeting 500 residences 
              and commercial entities over six months.
              The initiative aims to reduce landfill dependency, boost recycling, improve sanitation,
              and create green jobs for youth and informal waste pickers. Residents and businesses will 
              receive training and color-coded bins to separate organics, recyclables, and residuals, 
              which will then be directed to composting, recycling facilities, or landfills as appropriate.
              By engaging communities, creating employment, and channeling waste into productive streams, 
              this pilot will serve as a model for scalable, sustainable urban waste management across 
              Monrovia.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: 'text.secondary',
                backgroundColor: 'white',
                textAlign:'justify',
                p: 1,
                borderRadius: 2,
                mt: 3,
                fontWeight: '600'
              }}
            >
              Expected Impacts:
            </Typography>

            {[
              "Cleaner neighborhoods and reduced illegal dumping",
              "Increased recycling rates and resource recovery",
              "Employment for local youth and waste pickers",
              "Improved public health and sanitation"
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
              src="/assets/6d3c784524a2a57821cfcf900b1d980e.jpg" // Remplacez par votre image
              alt="Waste Segregation and Collection"
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

        {/* Partie 3 */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: '#030303ff',
              fontStyle:'normal',
              fontSize: { xs: '1.1rem', md: '2.5rem' },
              mb: 4,
              fontWeight:'bold',
            }}
          >
            3. Waste Education & Youth Mobilization Pilot Monrovia
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 }
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
                textAlign:'justify',
                p: 1,
                borderRadius: 2,
              }}
            >
              GreenCycle Liberia is launching a 12-week pilot to accelerate waste reduction,
              reuse, and recycling in selected Monrovia communities and schools. The program 
              focuses on behavior change through community workshops, school Eco Clubs, and 
              Youth Waste Ambassadors. Residents and students gain practical skills to segregate,
              reduce, and properly dispose of waste, while city-backed campaigns reinforce positive
              practices.
              The pilot directly engages ~500 participants, reaches over 1,800 adults in workshops, 
              and indirectly influences more than 50,000 residents via radio, social media, and public
              announcements. Youth Ambassadors and Eco Clubs serve as local champions, creating 
              sustainable knowledge and civic responsibility that can be scaled citywide.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.9,
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: 'text.secondary',
                backgroundColor: 'white',
                textAlign:'justify',
                p: 1,
                borderRadius: 2,
                mt: 3,
                fontWeight: '600'
              }}
            >
              Impacts:
            </Typography>

            {[
              "Increased awareness and adoption of 'reduce, reuse, recycle' practices",
              "Cleaner neighborhoods and schools",
              "Youth leadership development and community engagement",
              "Strong foundation for scalable city-wide waste management programs"
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
              src="src/assets/090a4cecbd04e3d86931bba20b20cf9b.jpg" // Remplacez par votre image
              alt="Waste Education and Youth Mobilization"
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