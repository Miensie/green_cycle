import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Fade,
  Slide,
  useMediaQuery,
  useTheme,
  alpha,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
   useScrollTrigger,
   Fab,
   Zoom,
   Paper
} from '@mui/material';
import { PlayArrow, East, Menu as MenuIcon } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ImmersiveVideoPresentation = () => {
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lecture automatique et configuration de la vidéo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        video.loop = true;
        
        await video.play();
        setIsVideoLoaded(true);
      } catch (error) {
        console.log('Lecture automatique bloquée:', error);
        setIsVideoLoaded(true);
      }
    };

    if (video.readyState >= 3) {
      startVideo();
    } else {
      video.addEventListener('loadeddata', startVideo);
    }

    return () => {
      video.removeEventListener('loadeddata', startVideo);
    };
  }, []);

  // Menu items avec liens
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/activity' },
    { label: 'Service', path: '/solutions' },
  ];


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

  // Navigation mobile
  const MobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: scrolled ? 'white' : 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label}
            component="a"
            href={item.path}
            sx={{
              textAlign: 'left',
              color: scrolled ? 'text.primary' : 'white',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                opacity: 0.7,
              },
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ListItemText 
              primary={item.label} 
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                  color: scrolled ? 'text.primary' : 'white',
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem 
          component="a"
          href="/contact"
          sx={{
            textAlign: 'left',
            mt: 2,
            backgroundColor: '#7fe261ff',
            color: 'white',
            borderRadius: 1,
            mx: 2,
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: '#6bd14aff',
            },
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <ListItemText 
            primary="Contact Us" 
            sx={{
              '& .MuiListItemText-primary': {
                fontWeight: 600,
                textAlign: 'center',
              },
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a2e0a 0%, #1a5a1a 100%)',
      }}
    >
      {/* Navbar Responsive */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'white' : 'transparent',
          boxShadow: scrolled ? 1 : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
            {/* Logo avec lien */}
           <Box sx={{ display:'flex', 
                  flexDirection:{ xs:'column',md:'row'}}}>
                <Avatar
                   alt='Logo' 
                   src="assets/Capture d'écran 2025-09-17 091439.png"
                    sx={{ height: { xs: '60px', md: '80px' }, width: { xs: '60px', md: '80px' } }}/>
                <Typography 
                  variant='h4'
                  component='h1'
                  sx={{fontWeight:'bold', color:'#6bd14aff',fontStyle:'italic'}}>
                    GreenCycle <br/>
                    Liberia INC.
                </Typography>
            </Box>
            {/* Menu Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component="a"
                    href={item.path}
                    sx={{
                      color: scrolled ? 'text.primary' : 'white',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      textDecoration: 'none',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        opacity: 0.8,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  component="a"
                  href="/contact"
                  sx={{
                    backgroundColor: '#7fe261ff',
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 3,
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: '#6bd14aff',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            )}

            {/* Menu Mobile */}
            {isMobile && (
              <IconButton
                sx={{
                  color: scrolled ? 'text.primary' : 'white',
                }}
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <MobileMenu />

      {/* Vidéo de fond en lecture automatique */}
      <Box
        component="video"
        ref={videoRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.8) contrast(1.1) saturate(1.2)',
          transition: 'opacity 1s ease-in-out',
          opacity: isVideoLoaded ? 1 : 0,
        }}
      >
        <source src="assets/WhatsApp Vidéo 2025-09-25 à 14.28.35_ebfdf6c0.mp4" type="video/mp4" />
        <source src="assets/WhatsApp Vidéo 2025-09-25 à 14.28.35_ebfdf6c0.mp4" type="video/webm" />
      </Box>

      {/* Overlay coloré pour améliorer la lisibilité */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(
            135deg,
            ${alpha('#0a2e0a', 0.6)} 0%,
            ${alpha('#1a5a1a', 0.4)} 50%,
            ${alpha('#0a2e0a', 0.6)} 100%
          )`,
          zIndex: 1,
        }}
      />

      {/* Contenu superposé */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          py: 8,
        }}
      >
        <Fade in={isVideoLoaded} timeout={1500}>
          <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
            {/* Titre principal */}
            <Slide direction="down" in={isVideoLoaded} timeout={800}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: { 
                    xs: '2.5rem', 
                    sm: '3.5rem', 
                    md: '4rem',
                    lg: '4.5rem' 
                  },
                  lineHeight: 1.1,
                  mb: 3,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                }}
              >
                GreenCycle
                <Box 
                  component="span" 
                  sx={{ color: '#7fe261ff', display: 'block' }}
                >
                  Liberia Inc.
                </Box>
              </Typography>
            </Slide>

            {/* Sous-titre */}
            <Slide direction="right" in={isVideoLoaded} timeout={1000}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: '#7fe261ff',
                  fontWeight: '600',
                  fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                  mb: 4,
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                }}
              >
                Integrated Waste Recovery Center of Monrovia.
              </Typography>
            </Slide>


            {/* Call-to-action */}
            <Slide direction="up" in={isVideoLoaded} timeout={1400}>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  
                  variant="contained"
                  size="large"
                  endIcon={<East />}
                  sx={{
                    backgroundColor: '#7fe261ff',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: '0 8px 25px rgba(127, 226, 97, 0.3)',
                    '&:hover': {
                      backgroundColor: '#6bd14aff',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(127, 226, 97, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Discover our services.
                </Button>
              </Box>
            </Slide>
          </Box>
        </Fade>
      </Container>

      {/* Indicateur de scroll */}
      <Fade in={isVideoLoaded} timeout={2000}>
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 3,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 2, 
              opacity: 0.8,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            explore more.
          </Typography>
          <Box
            sx={{
              width: 2,
              height: 40,
              backgroundColor: '#7fe261ff',
              margin: '0 auto',
              borderRadius: 1,
              animation: 'scrollBounce 2s infinite ease-in-out',
              '@keyframes scrollBounce': {
                '0%, 100%': { 
                  transform: 'translateY(0)',
                  opacity: 1
                },
                '50%': { 
                  transform: 'translateY(-10px)',
                  opacity: 0.7
                },
              },
            }}
          />
        </Box>
      </Fade>

      {/* Indicateur de lecture automatique (discret) */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: 'white',
          opacity: 0.6,
          fontSize: '0.8rem',
        }}
      >
        <PlayArrow sx={{ fontSize: 16 }} />
        <Typography variant="caption"></Typography>
      </Box>

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
};

export default ImmersiveVideoPresentation;