import React, { useRef, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  Zoom
} from '@mui/material';
import { PlayArrow, East, Menu as MenuIcon } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ImmersiveVideoPresentation = () => {
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Chemins des assets - À ADAPTER selon votre structure
  const VIDEO_PATH = "src/assets/WhatsApp Vidéo 2025-10-17 à 15.28.32_5e790baf.mp4"; // Remplacer par votre chemin
  const IMAGE_PATH = "src/assets/WhatsApp Image 2025-10-07 à 10.29.32_8b888d74.jpg"; // Image de secours pour mobile
  const LOGO_PATH = "src/assets/Capture d'écran 2025-09-17 091439.png"; // Votre logo

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lecture automatique de la vidéo (uniquement sur desktop)
  useEffect(() => {
    if (isMobile) {
      setIsVideoLoaded(true); // Pas de vidéo sur mobile
      return;
    }

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
      if (video) {
        video.removeEventListener('loadeddata', startVideo);
      }
    };
  }, [isMobile]);

  // Menu items
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/activity' },
    { label: 'Services', path: '/solutions' },
    { label: 'Sustainability', path: '/soustainbility' },
    { label: 'New Project', path: '/action' },
  ];

  // Scroll to top
  function ScrollTop({ children }) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: { xs: 80, md: 100 },
            right: { xs: 16, md: 30 },
            zIndex: 1000,
          }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  // Gestion du bouton scroll bottom
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

  // Scroll to bottom
  function ScrollBottom({ children, showBottomButton }) {
    const handleClick = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
      <Zoom in={showBottomButton}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 30 },
            right: { xs: 16, md: 30 },
            zIndex: 1000,
          }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  // Menu mobile
  const MobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              },
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                  color: 'text.primary',
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
        margin: 0,
        padding: 0
      }}
    >
      {/* Navbar Responsive */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 1 : 0}
        sx={{
          backgroundColor: scrolled ? 'white' : 'transparent',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
            {/* Logo */}
            <Box 
              component="a" 
              href="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
             
                textDecoration: 'none',
                '&:hover': { opacity: 0.9 }
              }}
            >
              <Avatar
                alt="GreenCycle Logo"
                src={LOGO_PATH}
                sx={{
                  height: { xs: 35, sm: 45, md: 50 },
                  width: { xs: 35, sm: 45, md: 50 }
                }}
              />
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  color: '#6bd14aff',
                  fontStyle: 'italic',
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.2
                }}
              >
                GreenCycle<br />
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
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            )}

            {/* Menu Mobile */}
            {isMobile && (
              <IconButton
                sx={{ color: scrolled ? 'text.primary' : 'white' }}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <MobileMenu />

      {/* ARRIÈRE-PLAN : Vidéo sur Desktop, Image sur Mobile */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        {/* Image de fond pour mobile/tablet */}
        {(isMobile || isTablet) && (
          <Box
            component="img"
            src={IMAGE_PATH}
            alt="GreenCycle Liberia"
            onLoad={() => setImageLoaded(true)}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85) contrast(1.05)',
              transition: 'opacity 1s ease-in-out',
              opacity: imageLoaded ? 1 : 0,
            }}
          />
        )}

        {/* Vidéo de fond pour desktop uniquement */}
        {!isMobile && !isTablet && (
          <Box
            component="video"
            ref={videoRef}
            muted
            playsInline
            loop
            preload="auto"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
              filter: 'brightness(0.9) contrast(1) saturate(1.1)',
              transition: 'opacity 1s ease-in-out',
              opacity: isVideoLoaded ? 1 : 0,
            }}
          >
            <source src={VIDEO_PATH} type="video/mp4" />
          </Box>
        )}
      </Box>

      {/* Overlay sombre pour améliorer la lisibilité */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(
            135deg,
            ${alpha('#262c20ff', 0.65)} 0%,
            ${alpha('#656705ff', 0.45)} 50%,
            ${alpha('#292724ff', 0.65)} 100%
          )`,
          zIndex: 1,
        }}
      />

      {/* Contenu principal */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 10 },
          px: { xs: 2, sm: 3 }
        }}
      >
        <Fade in={isVideoLoaded || imageLoaded} timeout={1500}>
          <Box sx={{ maxWidth: { xs: '100%', md: '65%', lg: '60%' } }}>
            {/* Titre principal */}
            <Slide direction="right" in={isVideoLoaded || imageLoaded} timeout={1000}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
                  mb: 3,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                  lineHeight: 1.2
                }}
              >
                Integrated Waste Recovery Center of Monrovia
              </Typography>
            </Slide>

            {/* Sous-titre */}
            <Slide direction="right" in={isVideoLoaded || imageLoaded} timeout={1200}>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: '400',
                  fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                  mb: 4,
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                  maxWidth: '90%'
                }}
              >
                Transforming waste into value for a sustainable future
              </Typography>
            </Slide>

            {/* Call-to-action */}
            <Slide direction="up" in={isVideoLoaded || imageLoaded} timeout={1400}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={RouterLink}
                  to="/solutions"
                  variant="contained"
                  size="large"
                  endIcon={<East />}
                  sx={{
                    backgroundColor: '#7fe261ff',
                    color: 'white',
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.25, sm: 1.5 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
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
                  Discover Our Services
                </Button>

                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.25, sm: 1.5 },
                    fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.1rem' },
                    fontWeight: '600',
                    borderRadius: 2,
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#7fe261ff',
                      backgroundColor: alpha('#7fe261ff', 0.1),
                      borderWidth: 2,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Slide>
          </Box>
        </Fade>
      </Container>

      {/* Indicateur de scroll */}
      <Fade in={isVideoLoaded || imageLoaded} timeout={2000}>
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 30, md: 40 },
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 3,
            display: { xs: 'none', sm: 'block' }
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              opacity: 0.8,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              textTransform: 'uppercase',
              letterSpacing: 1
            }}
          >
            Explore More
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

      {/* Boutons de navigation scroll */}
      <ScrollTop>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: '#41b156ff',
            '&:hover': {
              backgroundColor: '#2e7d32',
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
