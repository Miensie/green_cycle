import React from 'react';
import About1 from '../component/About1.jsx';
import Equipe from '../component/Equipe.jsx'
import HomePage from '../component/HomePage.jsx';
import Video from '../component/Video.jsx';
import Footer1 from '../component/Footer2.jsx';
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

   const [showBottomButton, setShowBottomButton] = useState(true);
    // Vérifier si on est proche du bas de la page
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
      src: "src/assets/WhatsApp Image 2025-08-26 à 12.35.58_62444837.jpg",
      hideOnMobile: true
    },
    {
      src: "src/assets/daw1.jpg",
      hideOnMobile: false
    },
    {
      src: "src/assets/daw2.jpg",
      hideOnMobile: false
    },
    {
      src: "src/assets/daw3.jpg",
      hideOnMobile: false
    },
    {
      src: "src/assets/daw2.jpg",
      hideOnMobile: false
    },
    {
      src: "src/assets/daw5.jpg",
      hideOnMobile: false
    },
    {
      src: "src/assets/daw6.jpg",
      hideOnMobile: false
    }
  ];

  const renderImageGrid = () => {
    const columns = [
      images.slice(0, 2),  // Première colonne
      images.slice(2, 5),  // Deuxième colonne
      images.slice(5, 7)   // Troisième colonne
    ];

    return (
      <Box
        sx={{
          position: { xs: 'static', lg: 'absolute' },
          top: { lg: '50%' },
          left: { lg: '50%' },
          transform: { 
            sm: 'translateX(32px)', 
            lg: 'translate(32px, -50%)' 
          },
          mt: { xs: 4, lg: 0 },
          pointerEvents: 'none',
          display: 'flex',
          gap: { xs: 2, lg: 3 },
          justifyContent: 'center'
        }}
      >
        {columns.map((column, colIndex) => (
          <Box
            key={colIndex}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, lg: 3 },
              flexShrink: 0
            }}
          >
            {column.map((image, imgIndex) => (
              <Card
                key={imgIndex}
                sx={{
                  width: { xs: 120, sm: 176 },
                  height: { xs: 180, sm: 256 },
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
      <Box
        sx={{
          pt: { xs: 8, sm: 12, lg: 20 },
          pb: { xs: 20, sm: 20, lg: 24 }
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            px: { xs: 2, sm: 3, lg: 4 }
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <Box sx={{ maxWidth: { sm: '32rem' } }}>
                <Typography    variant= "h1" sx={{ color:'green', fontWeight: 'italic',mb:10}}>
                   About Us
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '3.75rem' },
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: 'text.primary',
                    mb: 2
                  }}
                >
                  Reducing waste, restoring balance, protecting tomorrow
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    color: 'text.secondary',
                    mb: 5,
                    lineHeight: 1.6
                  }}
                >
                 GreenCycle Liberia is a flagship initiative dedicated to transforming Monrovia’s 
             solid waste challenges into sustainable economic opportunities. By focusing on recycling,
             composting, and innovative waste-to-value solutions, we are building a cleaner city while creating green jobs, 
             supporting local farmers with organic fertilizers, and producing clean biogas for energy.

                </Typography>
                
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#42c25cff',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
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
                  more
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, lg: 600 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {renderImageGrid()}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Video />
        <Equipe/>
        <About1 />
        <Box mt={10}>
            <Footer1/>
        </Box>
        
      </Box>

      
            {/* Bouton de retour en haut */}
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
      
            {/* Bouton de descente en bas */}
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