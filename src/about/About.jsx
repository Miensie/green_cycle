import React, { useState, useEffect } from 'react';
import About1 from '../component/About1.jsx';
import Equipe from '../component/Equipe.jsx'
import Video from '../component/Video.jsx';
import Footer1 from '../component/Footer1.jsx';
import Partnership from '../component/Partnership.jsx'
import Abouthome from '../component/Abouthome.jsx';
import Industrie from '../component/Industrie.jsx'
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  alpha,
  Fade,
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Fab,
  Zoom,
  useScrollTrigger
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ServicesPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Chemins des assets - À ADAPTER selon votre structure
  const DESKTOP_IMAGE = "src/assets/WhatsApp Image 2025-10-07 à 10.29.39_0f8c88cb.jpg";
  const MOBILE_IMAGE = "src/assets/etyuuyrreryt.jpg"; // Version plus petite
  const LOGO_PATH = "src/assets/Capture d'écran 2025-09-17 091439.png";

  // Sélection de l'image selon l'écran
  const heroImage = isMobile ? MOBILE_IMAGE : DESKTOP_IMAGE;

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

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu items avec liens
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/activity' },
    { label: 'Services', path: '/solutions' },
    { label: 'Sustainability', path: '/soustainbility' },
    { label: 'New Project', path: '/action' },
  ];

  // Navigation mobile - CORRIGÉ : Fond toujours BLANC
  const MobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: 'white', // TOUJOURS BLANC
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
              color: 'text.primary', // Texte SOMBRE pour bonne lisibilité
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
                  color: 'text.primary', // Texte SOMBRE
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
    <Box sx={{ position: 'relative' }}>
      {/* Navbar Responsive */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'white' : 'transparent',
          boxShadow: scrolled ? 1 : 'none',
          transition: 'all 0.3s ease-in-out',
          backgroundImage: scrolled ? 'none' : 'transparent',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1.5, md: 2 } }}>
            {/* Logo AMÉLIORÉ - Responsive */}
            <Box
              component="a"
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { opacity: 0.9 },
                transition: 'opacity 0.3s ease'
              }}
            >
              <Avatar
                alt="GreenCycle Logo"
                src={LOGO_PATH}
                sx={{
                  height: { xs: 35, sm: 45, md: 50 },
                  width: { xs: 35, sm: 45, md: 50 },
                  boxShadow: scrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.2)'
                }}
              />
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  color: '#6bd14aff',
                  fontStyle: 'italic',
                  fontSize: { xs: '0.85rem', sm: '1rem', md: '1.25rem' },
                  lineHeight: 1.2,
                  textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                GreenCycle<br />
                Liberia INC.
              </Typography>
            </Box>

            {/* Menu Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
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
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <MobileMenu />

      {/* Hero Section avec Image Responsive */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Image de fond RESPONSIVE */}
        <Box
          component="img"
          src={heroImage}
          alt="About GreenCycle Liberia"
          onLoad={() => setImageLoaded(true)}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.85) contrast(1.05)',
            transition: 'opacity 1s ease-in-out',
            opacity: imageLoaded ? 1 : 0,
            // Ajustement taille sur mobile
            transform: isSmallMobile ? 'scale(1.1)' : 'scale(1)',
          }}
        />

        {/* Overlay sombre amélioré */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(
              135deg,
              ${alpha('#111211ff', 0.7)} 0%,
              ${alpha('#151513ff', 0.5)} 50%,
              ${alpha('#1d1e1dff', 0.7)} 100%
            )`,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 12, sm: 14, md: 16 },
            pb: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 }
          }}
        >
          <Fade in={imageLoaded} timeout={1000}>
            <Box
              sx={{
                maxWidth: { xs: '100%', sm: '85%', md: '65%' },
                color: 'white'
              }}
            >
              {/* Main Title - Responsive */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: '#96e74fff',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  mb: { xs: 3, sm: 4, md: 5 },
                  textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                  lineHeight: 1.1
                }}
              >
                About Us
              </Typography>

              {/* Description - Responsive */}
              <Typography
                variant="h3"
                component="p"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' },
                  mb: 4,
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                  maxWidth: { xs: '100%', sm: '90%', md: '600px' },
                  fontWeight: 400
                }}
              >
                Reducing waste, restoring balance, protecting tomorrow
              </Typography>

              {/* CTA optionnel */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button
                  component="a"
                  href="#content"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#96e74fff',
                    color: '#96e74fff',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#7fe261ff',
                      backgroundColor: alpha('#96e74fff', 0.1),
                      borderWidth: 2,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>

        {/* Scroll Indicator - Masqué sur très petits écrans */}
        <Fade in={imageLoaded} timeout={1500}>
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 30, md: 40 },
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              color: 'white',
              zIndex: 2,
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
              Scroll to explore
            </Typography>
            <Box
              sx={{
                width: 2,
                height: 40,
                backgroundColor: '#96e74fff',
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
      </Box>

      {/* Contenu des sections */}
      <Box id="content" mt={{ xs: 8, md: 20 }}>
        <Abouthome />
        <Video />
        <Industrie mt={20} />
        <Equipe />
        <About1 />
        <Partnership />
        <Box mt={10}>
          <Footer1 />
        </Box>
      </Box>

      {/* Boutons de scroll */}
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

export default ServicesPresentation;