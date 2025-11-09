import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  alpha,
  useTheme,
  useMediaQuery,
  Fade,
  Slide
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const WhyChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Points forts
  const reasons = [
    {
      title: "Our Vision",
      description: "To be the leading supplier of nutrient-rich organic fertilizers for agriculture,clean biogas for energy, and high-value recycled materials,driving sustainability and innovation in Liberia and beyond. "
    },
    {
      title: "Our mission ",
      description: " To create sustainable waste solutions for Liberia by transforming waste through recycling and composting, empowering communitiesthrough active engagement, and reducing our carbonfootprint while improving the quality of life for our employees and the communities we serve."
    },
  ];

  // Observer pour détecter quand la section devient visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Partie Gauche - Contenu texte */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            gap: { xs: 4, md: 6 }
          }}> 
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ pl: { md: 4 } }}>
                  {/* Liste des raisons */}
                 <Slide direction="right" in={isVisible} timeout={800}>
                  <Box sx={{ space: 2 }}>
                    {reasons.map((reason, index) => (
                      <Fade 
                        key={index} 
                        in={isVisible} 
                        timeout={800 + (index * 200)}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 4,
                            p: 2,
                            borderRadius: 2,
                          }}
                        >
                          {/* Icône */}
                          <CheckCircle
                            sx={{
                              color: '#75e61fff',
                              mr: 2,
                              mt: 0.5,
                              fontSize: '2rem'
                            }}
                          />
                          
                          {/* Contenu texte */}
                          <Box>
                            <Typography
                              variant="h4"
                              sx={{
                                fontWeight: '600',
                                color: 'green',
                                mb: 1,
                                fontStyle: 'italic',
                                fontSize: { xs: '1.5rem', md: '1.75rem' }
                              }}
                            >
                              {reason.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: 'text.secondary',
                                lineHeight: 1.6,
                                fontSize: { xs: '0.9rem', md: '1rem' }
                              }}
                            >
                              {reason.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Fade>
                    ))}
                  </Box>
                  </Slide>
                </Box>
              </Grid>
            </Box> 
            
            {/* Partie Droite - Contenu image avec effet rideau */}
            <Box sx={{ 
              width: { xs: '100%', md: '50%' },
              position: 'relative'
            }}> 
              <Grid item xs={12} md={6}>
                <Fade in={isVisible} timeout={1000}>
                  <Card
                    sx={{
                      position: 'relative',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                      opacity: isVisible ? 1 : 0,
                      transition: 'all 0.8s ease-out',
                      '&:hover': {
                        transform: isVisible ? 'translateY(-8px)' : 'translateY(50px)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    {/* Conteneur image avec overflow hidden */}
                    <Box sx={{ 
                      position: 'relative', 
                      overflow: 'hidden',
                      height: { xs: '400px', md: '600px' }
                    }}>
                      {/* Image */}
                      <CardMedia
                        component="img"
                        image="/assets/f82a48371648700d13cc163199e7471f.jpg"
                        alt="Pourquoi nous choisir"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'all 0.5s ease'
                        }}
                      />
                      
                      {/* Rideau qui descend du haut vers le bas */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: theme.palette.primary.main,
                          transform: isVisible ? 'translateY(-100%)' : 'translateY(0)',
                          transition: 'transform 1.2s ease-in-out',
                          transitionDelay: '0.3s',
                          zIndex: 2
                        }}
                      />
                      
                      {/* Overlay qui disparaît au scroll */}
                      <Box
                        className="image-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(
                            135deg,
                            ${alpha(theme.palette.primary.main, 0.8)} 0%,
                            ${alpha(theme.palette.secondary.main, 0.6)} 100%
                          )`,
                          opacity: isVisible ? 0 : 0.7,
                          transition: 'opacity 0.8s ease-out',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1
                        }}
                      />
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            </Box> 
          </Box>  
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;