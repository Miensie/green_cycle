import React, { useState, useEffect } from 'react';
import Project2 from '../component/Project2.jsx';
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
  Zoom,
  useScrollTrigger,
  Fab
} from '@mui/material';
import {  Menu as MenuIcon } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ServicesPresentation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
            backgroundColor: scrolled ? 'white' : 'rgba(0, 0, 0, 0.9)',
            boxShadow: 'none',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <List sx={{ mt: 8 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.label}
              component="a"
              href={item.path}
              sx={{
                textAlign: 'left',
                color: scrolled ? 'text.primary' : 'white',
                textDecoration: 'none',
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                    fontSize: '1.1rem',
                  },
                }}
              />
            </ListItem>
          ))}
          <ListItem 
            component="a"
            href="/contact"
            sx={{
              textAlign: 'center',
              mt: 3,
              backgroundColor: '#7fe261ff',
              color: 'white',
              borderRadius: 2,
              mx: 2,
              py: 2,
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#6bd14aff',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ListItemText 
              primary="Contact Us" 
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
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
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            py: { xs: 1, sm: 2 },
            minHeight: { xs: '70px', sm: '80px' } 
          }}>
            {/* Logo avec lien */}
            <Box sx={{ 
              display:'flex', 
              flexDirection:'row',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 }
            }}>
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
                     GreenCycle<br/>
                     Liberia INC.
                 </Typography>
             </Box>

            {/* Menu Desktop */}
            {!isMobile && (
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 1, sm: 2, md: 3, lg: 4 } 
              }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component="a"
                    href={item.path}
                    sx={{
                      color: scrolled ? 'text.primary' : 'white',
                      fontWeight: 600,
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                      textTransform: 'none',
                      textDecoration: 'none',
                      minWidth: 'auto',
                      px: { xs: 1, sm: 1.5 },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        opacity: 0.8,
                        transform: 'translateY(-1px)',
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
                    px: { xs: 2, sm: 3 },
                    py: { xs: 0.8, sm: 1 },
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: '#6bd14aff',
                      transform: 'translateY(-2px)',
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
                  padding: { xs: 1, sm: 1.5 },
                }}
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon fontSize={isSmallMobile ? "medium" : "large"} />
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
          minHeight: { xs: '70vh', sm: '80vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url("/assets/WhatsApp Image 2025-09-05 à 04.59.34_3ef60bcb.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: alpha('#000000', 0.4),
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
                   ${alpha('#373a37ff', 0.4)} 50%,
                   ${alpha('#0a2e0a', 0.6)} 100%
                 )`,
                 zIndex: 1,
               }}
             />

        {/* Content */}
        <Container maxWidth="lg" sx={{ 
          position: 'relative', 
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 } 
        }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ 
              maxWidth: { xs: '100%', md: '90%', lg: '80%', xl: '60%' },
              color: 'white',
              textAlign: { xs: 'center', md: 'left' }
            }}>
              {/* Main Title */}
             <Typography 
             variant="h2" 
             component="h1" 
             color='#a3eb4aff'
              sx={{ 
                fontWeight: 'bold',
                mb: { xs: 3, sm: 4, md: 5 },
                mt: { xs: 12, sm: 14, md: 15 },
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
              }}>
                 New PROJECTS
            </Typography>

              {/* Description */}
              <Typography
                variant="h3"
                component="p"
                sx={{
                  lineHeight: { xs: 1.5, sm: 1.6 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                  mb: { xs: 3, sm: 4 },
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                  maxWidth: '100%'
                }}
              >
               GreenCycle Liberia is committed to expanding its impact through 
               innovative sustainability initiatives. Our upcoming projects focus 
               on waste-to-energy solutions, biodegradable packaging, community 
               recycling programs, and eco-friendly product development — all aimed
                at building a cleaner and more resilient Liberia.
              </Typography>

              {/* Call to Action */}
            </Box>
          </Fade>
        </Container>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 20, sm: 30, md: 40 },
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
              fontSize: { sm: '0.8rem', md: '0.875rem' }
            }}
          >
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 2,
              height: { sm: 30, md: 40 },
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
      <Project2/>
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