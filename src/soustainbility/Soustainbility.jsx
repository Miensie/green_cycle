import React, { useState, useEffect } from 'react';
import Container1 from '../component/Container1.jsx'
import WhatWeDo1 from '../component/WathWeDo1.jsx'
import Footer1 from '../component/Footer1.jsx'
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
import {  Menu as MenuIcon } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ServicesPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);
  
  
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
    { label: 'Newproject', path: '/action' },
  ];

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
    <Box sx={{ position: 'relative' }}>
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
                flexDirection:'row'}}>
                <Avatar
                 alt='Logo' 
                 src="/assets/Capture d'écran 2025-09-17 091439.png"
                 sx={{ 
                   height: { xs: '35px', sm: '45px', md: '50px' }, 
                   width: { xs: '35px', sm: '45px', md: '50px' } 
                 }}/>
                 <Typography 
                   variant='h5'
                   component='h1'
                     sx={{
                     fontWeight:'bold', 
                     color:'#6bd14aff',
                     fontStyle:'italic',
                     fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                     lineHeight: { xs: 1.2, sm: 1.3 }
                   }}>
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

      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url("/assets/WhatsApp Image 2025-10-07 à 10.29.37_3daed440.jpg")', // Remplacez par votre image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: alpha('#000000', 0.7), // Overlay sombre pour lisibilité
            zIndex: 1,
          }
        }}
      >

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
                   ${alpha('#161716ff', 0.6)} 0%,
                   ${alpha('#373a37ff', 0.6)} 50%,
                   ${alpha('#0a2e0a', 0.6)} 100%
                 )`,
                 zIndex: 1,
               }}
             />

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ 
              maxWidth: { xs: '100%', md: '60%' },
              color: 'white'
            }}>
              {/* Main Title */}
             <Typography 
             variant="h2" component="h1" color='#a3eb4aff'
              sx={{ fontWeight: 'bold',
               
                mb: 5 ,
                mt:15}}>
                  Our Sustainability 
            </Typography>

              {/* Description */}
              <Typography
                variant="h3"
                component="p"
                sx={{
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                  mb: 4,
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                  maxWidth: '600px'
                }}
              >
                Transforming Waste into Value, Powering Liberia's Green Future
              </Typography>

              {/* Call to Action */}
            </Box>
          </Fade>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
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
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 2,
              height: 40,
              backgroundColor: 'white',
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
      </Box>
      <Container1/>
      <WhatWeDo1/>
      <Footer1/>

      
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

export default ServicesPresentation;