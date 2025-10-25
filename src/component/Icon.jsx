import React from 'react';
import { Box, Typography, Container, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import WindPowerIcon from '@mui/icons-material/WindPower';

// Animation de flottement léger
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Animation de déplacement horizontal léger
const horizontalFloat = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

// Animation combinée (vertical + horizontal)
const combinedFloat = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  33% {
    transform: translate(3px, -6px);
  }
  66% {
    transform: translate(-2px, 4px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

const EcoBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 2),
  backgroundColor: '#92de0fff',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  minHeight: 250,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${floatAnimation} 6s ease-in-out infinite`,
  '&:hover': {
    animation: `${floatAnimation} 3s ease-in-out infinite`,
  },
}));

const EcoIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: 0.1,
  width: 80,
  height: 80,
  color: '#ef0a6dff',
  animation: `${combinedFloat} 8s ease-in-out infinite`,
}));

// Icônes avec animations individuelles différentes
const LeafIcon = () => (
  <EcoIcon 
    sx={{ 
      bottom: '10%', 
      left: '8%',
      animationDelay: '0s',
      animationDuration: '7s'
    }}
  >
    <EmojiPeopleIcon sx={{fontSize:'150px'}}/>
  </EcoIcon>
);

const LafIcon = () => (
  <EcoIcon 
    sx={{ 
      bottom: '10%', 
      left: '15%',
      animationDelay: '1.5s',
      animationDuration: '9s'
    }}
  >
    <EmojiPeopleIcon sx={{fontSize:'150px'}}/>
  </EcoIcon>
);

const RecycleIcon = () => (
  <EcoIcon 
    sx={{ 
      bottom: '10%', 
      right: '12%',
      animationDelay: '0.8s',
      animationDuration: '6s'
    }}
  >
    <EmojiObjectsIcon sx={{fontSize:'150px'}}/>
  </EcoIcon>
);

const PlantIcon = () => (
  <EcoIcon 
    sx={{ 
      bottom: '10%', 
      left: '40%',
      animationDelay: '2s',
      animationDuration: '10s'
    }}
  >
   <EngineeringIcon sx={{fontSize:'150px'}}/>
  </EcoIcon>
);

const FIcon = () => (
  <EcoIcon 
    sx={{ 
      top: '10%', 
      left: '40%',
      animationDelay: '1s',
      animationDuration: '8s'
    }}
  >
   <WindPowerIcon sx={{fontSize:'150px'}}/>
  </EcoIcon>
);

// Animation spécifique pour le texte
const TextFloat = styled(Typography)(({ theme }) => ({
  animation: `${floatAnimation} 5s ease-in-out infinite`,
  animationDelay: '0.5s',
}));

const GreenCycleQuote = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <EcoBackground>
        {/* Icônes écologiques en arrière-plan */}
        <LeafIcon />
        <LafIcon />
        <RecycleIcon />
        <PlantIcon />
        <FIcon/>
        
        {/* Phrase écologique principale avec animation */}
        <TextFloat
          variant="h4" 
          component="h2"
          align="center"
          sx={{
            fontWeight: 600,
            color: 'background.primary',
            lineHeight: 1.4,
            maxWidth: '800px',
            position: 'relative',
            zIndex: 1,
            fontSize: { xs: '1.5rem', md: '2.125rem' },
            px: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          "We are creating green jobs and economic opportunities for Liberian communities."
        </TextFloat>
      </EcoBackground>
    </Container>
  );
};

export default GreenCycleQuote;