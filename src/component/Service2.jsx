import React, { useState, useEffect } from 'react';
import {Link as RouterLink} from 'react-router-dom'
import Icon from '../component/Icon.jsx'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button,
  Paper,
  alpha
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import direct des images (solution recommandée)
import image1 from '../assets/WhatsApp Image 2025-10-07 à 10.29.34_1b31c8f6.jpg';
import image2 from '../assets/WhatsApp Image 2025-10-07 à 10.29.28_275756d3.jpg';
import image3 from '../assets/WhatsApp Image 2025-10-07 à 10.29.28_19b54914.jpg';
import image4 from '../assets/WhatsApp Image 2025-10-07 à 10.29.37_3daed440.jpg';

const Apropos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Tableau d'images importées
  const images = [image1, image2, image3, image4];

  // Vérification du chargement des images
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Vérifie que les images sont accessibles
        const imagePromises = images.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Erreur de chargement des images:', error);
        // Fallback vers une image par défaut
        images.forEach((img, index) => {
          if (!img) {
            images[index] = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMGJ4ODgxNyIvPgo8dGV4dCB4PSIyNTAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+R3JlZW5DeWNsZTwvdGV4dD4KPC9zdmc+';
          }
        });
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  // Défilement automatique du carousel
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  // Version alternative si les imports directs ne fonctionnent pas
  const alternativeImages = [
    // Essayez ces chemins alternatifs :
    '../assets/WhatsApp Image 2025-10-17 à 15.07.41_7c88e503.jpg',
    '../assets/WhatsApp Image 2025-10-07 à 10.29.28_275756d3.jpg',
    '../assets/WhatsApp Image 2025-10-07 à 10.29.28_19b54914.jpg',
    '../assets/WhatsApp Image 2025-10-07 à 10.29.37_3daed440.jpg',
    // Ou en absolu depuis public :
    // '/assets/WhatsApp Image 2025-10-07 à 10.29.34_1b31c8f6.jpg',
  ];

  return (
    <Box sx={{ 
      bgcolor: '#f3f3f3',
      py: 8, 
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{display:'flex'}}>
        <Box sx={{display:'flex',
          flexDirection:{xs:'column',md:'row'}
          }}>    
          <Grid item xs={12} md={6} sx={{width:{xs:'100%', md:'50%'}}}>
            <Typography 
               variant="h3"
                 component="h1"
                 sx={{
                  fontWeight:'bold',
                   fontStyle: 'italic',
                   fontSize: { xs: '1.1rem', md: '3rem' },
                   color:'green',
                   
                 }}
            >
                Who We Are ?
            </Typography>
          
            <Box sx={{ mb: 4 }}>
              <Typography 
             variant='body1'
             color='text.secondary'
                sx={{
                   fontSize: { xs: '0.9rem', md: '1.5rem' },
                   color:'black',
                   padding:'15px',
                   flexGrow: '1'
                }}>
                  We are GreenCycle Liberia, Inc., a waste management company dedicated to promoting sustainability through recycling, reuse, and waste reduction.
                  Our mission is to transform waste into valuable resources by developing eco-friendly products and innovative solutions that protect the environment while empowering local communities.
                  By turning the challenges of waste into opportunities, we contribute to building a cleaner, greener, and more sustainable Liberia. 
              </Typography>
              
            <Button 
              variant="contained" 
              startIcon={<ArrowForwardIcon />}
              component={RouterLink}
              to="/solutions"
              sx={{ 
                bgcolor: '#0b8817ff',
                color: 'white',
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#aceab0ff',
                }
              }}
            >
              Read more
            </Button>
           </Box>
          </Grid>
       
          
          <Grid item xs={12} md={6} sx={{width:{xs:'100%', md:'50%'}}}>
            <Box sx={{ 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-30px',
                right: '-5px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                bgcolor: '#0b8817ff',
                opacity: 0.2,
                zIndex: 0
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: '-30px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                bgcolor: '#5bdf9dff',
                opacity: 0.15,
                zIndex: 0
              }
            }}>
              <Paper elevation={3} sx={{ 
                borderRadius: '50%', 
                overflow: 'hidden',
                width: {xs: '300px', md: '500px'},
                height: {xs: '300px', md: '500px'},
                position: 'relative',
                zIndex: 1,
                margin: '0 auto'
              }}>
                {/* Carousel d'images avec effet de brillance */}
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}>
                  {images.map((image, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentImageIndex === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        backgroundImage: imagesLoaded ? `url(${image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: !imagesLoaded ? '#0b8817ff' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(
                            45deg,
                            ${alpha('#ffffff', 0.15)} 0%,
                            ${alpha('#7fe261', 0.1)} 50%,
                            ${alpha('#ffffff', 0.15)} 100%
                          )`,
                          mixBlendMode: 'soft-light',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(
                            135deg,
                            ${alpha('#0a2e0a', 0.1)} 0%,
                            ${alpha('#1a5a1a', 0.2)} 100%
                          )`,
                          mixBlendMode: 'multiply',
                        },
                        filter: imagesLoaded ? 'brightness(1.1) contrast(1.05) saturate(1.1)' : 'none',
                      }}
                    >
                      {!imagesLoaded && (
                        <Typography color="white" variant="h6">
                          Chargement...
                        </Typography>
                      )}
                    </Box>
                  ))}
                  
                  {/* Overlay de brillance supplémentaire */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `radial-gradient(
                        circle at 30% 70%,
                        ${alpha('#7fe261', 0.08)} 0%,
                        transparent 50%
                      )`,
                      mixBlendMode: 'overlay',
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Box>
        </Grid>
        <Box>
        </Box>
      </Container>
      <Box sx={{marginTop:'150px',width:'100%'}}>
          <Icon/>
        </Box>
    </Box>
  );
};

export default Apropos;