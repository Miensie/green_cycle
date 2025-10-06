import React from 'react';
import { Box, Typography, Container, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

// Animation de flottement léger
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const AnimatedBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(12, 4),
  background: 'linear-gradient(135deg, #f8fdf8 0%, #e8f5e8 100%)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  minHeight: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${floatAnimation} 6s ease-in-out infinite`,
  '&:hover': {
    animation: `${floatAnimation} 3s ease-in-out infinite`,
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3.5rem',
  textAlign: 'center',
  lineHeight: 1.1,
  color: '#1b5e20',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: '1.8rem',
  textAlign: 'center',
  color: '#388e3c',
  fontStyle: 'italic',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const EcoDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 120,
  height: 120,
  borderRadius: '50%',
  backgroundColor: 'rgba(46, 125, 50, 0.05)',
  animation: `${floatAnimation} 4s ease-in-out infinite`,
}));

const GreenCycleHero = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <AnimatedBackground>
        {/* Points écologiques en arrière-plan */}
        <EcoDot sx={{ top: '10%', left: '5%', animationDelay: '0s' }} />
        <EcoDot sx={{ top: '20%', right: '8%', animationDelay: '1s', width: 80, height: 80 }} />
        <EcoDot sx={{ bottom: '15%', left: '10%', animationDelay: '2s', width: 100, height: 100 }} />
        <EcoDot sx={{ bottom: '5%', right: '15%', animationDelay: '0.5s', width: 60, height: 60 }} />
        
        {/* Contenu principal */}
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <MainTitle variant="h1">
            GreenCycle Liberia
          </MainTitle>
          
          <SubTitle variant="h2">
            Transforming Waste into Sustainable Energy
          </SubTitle>
          
          <Typography 
            variant="h5" 
            sx={{ 
              mt: 4, 
              color: '#4caf50',
              fontWeight: 400,
              fontSize: '1.3rem',
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.1rem',
              }
            }}
          >
            Pioneering Biogas Solutions for a Greener Future
          </Typography>
        </Box>
      </AnimatedBackground>
    </Container>
  );
};

export default GreenCycleHero;