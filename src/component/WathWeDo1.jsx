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

const CertificationsDashboard = () => {
  const certifications = [
    {
      title: "Sustainable Development Policy",
      color: "#e8f5e9"
    },
    {
      title: "Sustainability Report",
      color: "#ffffff"
    },
    {
      title: "Environmental Protection & Enhancement",
      badge: "",
      color: "#0b6012ff"
    },
    {
      title: "Social Progress",
      color: "#91e012ff"
    },
    {
      title: "Economic opportunities",
      color: "#e8f5e9"
    },
    {
      title: "Economic development",
      color: "#6a9e74ff"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        {/* Grille principale avec 2 lignes et 3 colonnes */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            border: '1px solid #e0e0e0',
            borderRadius: 1,
            overflow: 'hidden',
            
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
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // Bordures entre les cartes
                borderRight: (index === 0 || index === 1 || index === 3 || index === 4) ? '1px solid #e0e0e0' : 'none',
                borderBottom: index < 3 ? '1px solid #e0e0e0' : 'none'
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 2, width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography
                    variant="h6"
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