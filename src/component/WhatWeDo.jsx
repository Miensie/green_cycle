import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Card,
  CardContent
} from '@mui/material';
import { keyframes } from '@mui/system';

// Animation de fondu de gauche à droite
const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CertificationsDashboard = () => {
  const certifications = [
    {
      title: "Waste management & Ressource Recovery",
      color: "#e8f5e9"
    },
    {
      title: "Renawable Energy Development",
      color: "#ffffff"
    },
    {
      title: "Corporate Initiative",
      badge: "",
      color: "#0b6012ff"
    },
    {
      title: " Environmental Protection & climate action",
      color: "#91e012ff"
    },
    {
      title: "Recycling & circular Economy",
      color: "#e8f5e9"
    },
    {
      title: "Strategic Paternership in Environmental sector",
      color: "#6a9e74ff"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("src/assets/545033648_122108511362992913_5975337630202281550_n.jpg")', // Remplacez par le chemin de votre image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      />
      
      <Container 
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: '#46eb30ff',
            mb: 3,
            fontSize: { xs: '2rem', md: '2.5rem' },
            animation: `${fadeInFromLeft} 1s ease-out`
          }}
        >
          What We Do.
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            color: '#f5f5f5',
            mb: 5,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1.25rem' },
            animation: `${fadeInFromLeft} 1s ease-out 0.3s both`
          }}
        >
          Discover the reasons that make us the ideal partner 
          for your waste management projects and sustainable energy solutions in Liberia.
        </Typography>
        
        {/* Grille principale avec 2 lignes et 3 colonnes */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gridTemplateRows: 'repeat(2, 1fr)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 1,
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {certifications.map((cert, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 0,
                boxShadow: 'none',
                backgroundColor: cert.color,
                height: '250px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // Bordures entre les cartes
                borderRight: { 
                  md: (index === 0 || index === 1 || index === 3 || index === 4) ? '1px solid rgba(255, 255, 255, 0.2)' : 'none' 
                },
                borderBottom: index < 3 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <CardContent sx={{ 
                textAlign: 'center', 
                p: 2, 
                width: '100%',
                animation: `${fadeInFromLeft} 0.8s ease-out ${0.5 + index * 0.1}s both`
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: '500',
                      fontSize: '1rem',
                      color: 'text.primary',
                      mb: cert.badge ? 1 : 0,
                      lineHeight: 1.2
                    }}
                  >
                    {cert.title}
                  </Typography>
                  
                  {cert.badge && (
                    <Chip
                      label={cert.badge}
                      size="small"
                      sx={{
                        backgroundColor: '#ffd700',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '0.75rem'
                      }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CertificationsDashboard;