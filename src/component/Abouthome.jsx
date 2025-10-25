import React from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';

const CompanyPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8fff8',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: '#388e3c',
              fontStyle: 'italic',
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              mb: 4
            }}
          >
            Pioneering Sustainable Transformation Since January 2025
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.9,
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: 'text.secondary',
              textAlign: 'justify',
              backgroundColor: 'white',
              p: 4,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            Founded in May 2025 in Monrovia, GreenCycle Liberia INC is a flagship 
            initiative dedicated to transforming Liberia’s solid waste challenges
            into sustainable economic opportunities. Through recycling, composting, 
            and innovative waste-to-value solutions, we are building a cleaner and 
            more resilient nation while creating green jobs, supporting local farmers 
            with organic fertilizers, and producing clean biogas for energy.
            Powered by a dynamic and multidisciplinary team of passionate professionals 
            in environmental science, engineering, business development, and community 
            outreach, GreenCycle Liberia combines innovation and local expertise to deliver 
            impactful solutions. Our goal is to revolutionize waste management in Liberia
            by fostering a circular economy where waste becomes a valuable resource, 
            driving economic growth and sustainable development.
            Beyond waste management, our work embodies environmental stewardship,
            community empowerment, and a firm commitment to Liberia’s long-term sustainability.
            We believe that every discarded item holds potential—and through innovation and responsibility,
            we are turning waste into a resource that benefits people, the planet, and future generations.

          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyPresentation;