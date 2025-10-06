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
            Founded in January 2025 in Monrovia, 
            GreenCycle Liberia INC has quickly established itself 
            as a flagship initiative dedicated to transforming solid 
            waste challenges into sustainable economic opportunities.
            Our innovative company focuses on comprehensive recycling, 
            organic composting, and groundbreaking waste-to-value solutions,
            building a cleaner city while generating green jobs, supporting 
            local farmers with organic fertilizers, and producing clean biogas 
            for energy. Powered by a dynamic, professional, and diverse team, 
            GreenCycle Liberia brings together passionate experts from various 
            backgrounds—environmental science, engineering, business development,
            and community outreach—uniting their skills to deliver innovative 
            solutions and local expertise. Our ambitious objectives aim to revolutionize
            waste management in Liberia by creating a circular economy that transforms
            environmental challenges into economic growth, while promising bright future 
            perspectives for an ecological Liberia where waste becomes a valuable resource,
            supporting agricultural development and providing clean energy solutions to communities
            across the nation. Through our diversified services including comprehensive recycling,
            compost production, biogas energy generation, waste-to-value innovation, and environmental 
            consulting, we are committed to empowering Liberian communities while reducing carbon footprint 
            and improving quality of life for all stakeholders.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyPresentation;