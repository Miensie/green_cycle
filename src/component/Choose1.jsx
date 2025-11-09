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
      title: "Advanced Technical Expertise",
      description: "Our team of experts brings over 15 years of experience in biogas solutions and integrated waste management systems."
    },
    {
      title: "Sustainable Solutions",
      description: "We transform waste challenges into economic opportunities through innovative recycling, composting, and energy recovery technologies."
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end personalized support from project design to installation and ongoing maintenance of your facilities."
    },
    {
      title: "Continuous Innovation",
      description: "Ongoing research and development for increasingly efficient and environmentally respectful solutions tailored to Liberia's context."
    },
    {
      title: "Local Experience",
      description: "Deep understanding of Liberia's waste management challenges and proven track record in implementing successful biogas projects."
    }
   
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
        backgroundColor: '#e8f5e9', // Vert fluor clair
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Partie Gauche - Image avec effet */}
        <Box  sx={{
            display:'flex',
            flexDirection:{xs:'column',md:'row'},
            width: '100%',
            gap: { xs: 4, md: 6 }
           }}> 
         <Box sx={{width:{xs:'100%', md:'50%'}}}> 
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
                }}
              >
                {/* Conteneur image avec effet rideau */}
                <Box sx={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  height: { xs: '400px', md: '700px' }
                }}>
                  {/* Image */}
                  <CardMedia
                    component="img"
                    image="/assets/49b566ae50cb6ab0ca4106bf54518c4f.jpg"
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
                      backgroundColor: '#4caf50', // Vert fluor
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
                  >
                  </Box>
                </Box>
              </Card>
            </Fade>
          </Grid>
         </Box>  

          {/* Partie Droite - Contenu textuel */}
         <Box sx={{width:{xs:'100%', md:'50%'}}}> 
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              {/* Titre principal */}
              <Slide direction="right" in={isVisible} timeout={800}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    color:'green',
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem' }
                  }}
                >
                  Why chose Us ?
                </Typography>
              </Slide>

              {/* Sous-titre */}
              <Fade in={isVisible} timeout={1000} direction="bottom">
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    mb: 5,
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                   Discover the reasons that make us the ideal partner 
                  for your waste management projects and sustainable energy solutions in Liberia.
                </Typography>
              </Fade>

              {/* Liste des raisons */}
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
                          color:'green',
                          mr: 2,
                          mt: 0.5,
                          fontSize: { xs: '1.5rem', md: '2rem' }
                        }}
                      />
                      
                      {/* Contenu texte */}
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: '600',
                            color:'green',
                            mb: 1,
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
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
            
            </Box>
          </Grid>
         </Box>
         </Box>  
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;