import React from 'react';
import {Link as RouterLink } from 'react-router-dom'
import About1 from '../component/About1.jsx';
import Equipe from '../component/Equipe.jsx'
import HomePage from '../component/HomePage.jsx';
import Video from '../component/Video.jsx';
import Footer1 from '../component/Footer1.jsx';
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  useTheme,
  useMediaQuery,
   Fab,
  Zoom,
  useScrollTrigger,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Composant pour le bouton de retour en haut
function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: { xs: 80, md: 100 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

// Composant pour le bouton de descente en bas
function ScrollBottom({ children, showBottomButton }) {
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={showBottomButton}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Example() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [showBottomButton, setShowBottomButton] = useState(true);
  
  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      setShowBottomButton(scrollPosition < pageHeight - 200);
    };

    window.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const images = [
    {
      src: "assets/71db5a24d7baa634796480a22954409d.jpg",
      hideOnMobile: true
    },
    {
      src: "assets/6d31889ed473e7934403dbd7bba400a4.jpg",
      hideOnMobile: false
    },
    {
      src: "assets/956847c3d8900f1a6196797204cde506.jpg",
      hideOnMobile: false
    },
    {
      src: "assets/6d15ecacd2d4f4482668cfdec891ca99.jpg",
      hideOnMobile: false
    },
    {
      src: "assets/49b566ae50cb6ab0ca4106bf54518c4f.jpg",
      hideOnMobile: false
    },
    {
      src: "assets/ac05ad7ae6455f166732adfd3d0c1829.jpg",
      hideOnMobile: false
    },
    {
      src: "assets/Capture d'écran 2025-09-17 091439.png",
      hideOnMobile: false
    }
  ];

  const renderImageGrid = () => {
    if (isMobile) {
      // Version mobile - carousel horizontal
      return (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            py: 2,
            px: 1,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            maxWidth: '100vw'
          }}
        >
          {images.filter(img => !img.hideOnMobile).map((image, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 280,
                height: 200,
                borderRadius: 2,
                overflow: 'hidden',
                flexShrink: 0
              }}
            >
              <CardMedia
                component="img"
                image={image.src}
                alt=""
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Card>
          ))}
        </Box>
      );
    }

    if (isTablet) {
      // Version tablette - grille 2x2
      const tabletImages = images.slice(0, 4).filter(img => !img.hideOnMobile);
      return (
        <Grid container spacing={2} justifyContent="center">
          {tabletImages.map((image, index) => (
            <Grid item xs={6} key={index}>
              <Card
                sx={{
                  width: '100%',
                  height: 200,
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  image={image.src}
                  alt=""
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }

    // Version desktop - colonnes originales
    const columns = [
      images.slice(0, 2),
      images.slice(2, 5),
      images.slice(5, 7)
    ];

    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: { lg: '50%', xl: '60%' },
          transform: 'translateY(-50%)',
          mt: 0,
          pointerEvents: 'none',
          display: 'flex',
          gap: 3,
          justifyContent: 'center'
        }}
      >
        {columns.map((column, colIndex) => (
          <Box
            key={colIndex}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              flexShrink: 0
            }}
          >
            {column.map((image, imgIndex) => (
              <Card
                key={imgIndex}
                sx={{
                  width: { lg: 176, xl: 200 },
                  height: { lg: 256, xl: 280 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  opacity: image.hideOnMobile && isMobile ? 0 : 1,
                  display: image.hideOnMobile && isMobile ? 'none' : 'block'
                }}
              >
                <CardMedia
                  component="img"
                  image={image.src}
                  alt=""
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white',
        minHeight: '100vh'
      }}
    >
      <Box>
        <HomePage mt={5} />
      </Box>
      
      {/* Section About Us */}
      <Box
        sx={{
          pt: { xs: 6, sm: 10, lg: 15 },
          pb: { xs: 15, sm: 18, lg: 20 }
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            px: { xs: 2, sm: 3, lg: 4 }
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Contenu texte */}
            <Grid item xs={12} lg={isLargeScreen ? 6 : 12}>
              <Box sx={{ 
                maxWidth: { xs: '100%', lg: '32rem' },
                textAlign: { xs: 'center', lg: 'left' }
              }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    color: 'green', 
                    fontWeight: 'bold', 
                    mb: { xs: 4, sm: 6, lg: 8 },
                    fontSize: { xs: '2.5rem', sm: '3rem', lg: '3.5rem' }
                  }}
                >
                  About Us
                </Typography>
                
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { 
                      xs: '1.75rem', 
                      sm: '2.5rem', 
                      lg: '3rem',
                      xl: '3.75rem'
                    },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: 'text.primary',
                    mb: { xs: 2, sm: 3 }
                  }}
                >
                  Reducing waste, restoring balance, protecting tomorrow
                </Typography>
                
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { 
                      xs: '1rem', 
                      sm: '1.125rem', 
                      lg: '1.25rem' 
                    },
                    color: 'text.secondary',
                    mb: { xs: 4, sm: 5 },
                    lineHeight: 1.6
                  }}
                >
                  GreenCycle Liberia is a flagship initiative dedicated to transforming Monrovia's 
                  solid waste challenges into sustainable economic opportunities. By focusing on recycling,
                  composting, and innovative waste-to-value solutions, we are building a cleaner city while 
                  creating green jobs, supporting local farmers with organic fertilizers, and producing 
                  clean biogas for energy.
                </Typography>
                
                <Button
                  variant="contained"
                  size="large"
                  component={RouterLink}
                  to="/about"
                  sx={{
                    backgroundColor: '#42c25cff',
                    color: 'white',
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.25, sm: 1.5 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 500,
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: 2,
                    '&:hover': {
                      backgroundColor: '#1ea727ff',
                      boxShadow: 3
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            
            {/* Grille d'images */}
            <Grid item xs={12} lg={isLargeScreen ? 6 : 12}>
              <Box
                sx={{
                  position: 'relative',
                  height: { 
                    xs: 300, 
                    sm: 400, 
                    lg: isLargeScreen ? 600 : 400 
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  mt: { xs: 4, lg: 0 }
                }}
              >
                {renderImageGrid()}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Composants importés */}
      <Box>
        <Video />
        <Equipe/>
        <About1 />
        <Box mt={10}>
          <Footer1/>
        </Box>
      </Box>

      {/* Boutons de navigation */}
      <ScrollTop>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: 'green',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <ScrollBottom showBottomButton={showBottomButton}>
        <Fab
          color="secondary"
          size="medium"
          aria-label="scroll to bottom"
          sx={{
            backgroundColor: '#41b156ff',
            '&:hover': {
              backgroundColor: '#2e7d32',
            },
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <KeyboardArrowDownIcon />
        </Fab>
      </ScrollBottom>
    </Box>
  );
}