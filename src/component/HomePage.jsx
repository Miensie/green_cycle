import React, { useState, useEffect } from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function CompleteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Fonction pour fermer le drawer après navigation
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier l'état initial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour gérer le défilement vers les sections
  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleDrawerClose(); // Fermer le drawer après navigation
  };

  // Composant pour gérer le défilement automatique lors du chargement de la page
  const ScrollToHashSection = () => {
    const location = useLocation();
    
    React.useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, [location]);
    
    return null;
  };

  // Contenu du drawer mobile
  const drawerContent = (
   
    <Box
      sx={{ 
        width: 280,
        height: '100%',
        background: 'linear-gradient(135deg, rgba(12, 189, 237, 0.1), rgba(66, 57, 126, 0.1))',
        backdropFilter: 'blur(10px)',
      }}
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      {/* En-tête du drawer */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid rgba(200, 200, 200, 0.3)'
      }}>
        <Avatar
           alt='Logo' 
           src="assets/Capture d'écran 2025-09-17 091439.png"
           sx={{ height: { xs: '60px', md: '80px' }, width: { xs: '60px', md: '80px' } }}
           />
       
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Menu items */}
      <List sx={{ pt: 0 }}>
        <ListItem disablePadding>
          <ListItemButton 
           component={RouterLink}
            to="/"
            sx={{ 
              py: 2,
              '&:hover': {
                backgroundColor: 'rgba(12, 189, 237, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary="Home" 
              primaryTypographyProps={{
                fontWeight: 'bold',
                background: 'linear-gradient(90deg,#0cbded,#42397e)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={RouterLink}
            to="/about"
            sx={{ 
              py: 2,
              '&:hover': {
                backgroundColor: 'rgba(12, 189, 237, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary="About Us" 
              primaryTypographyProps={{
                fontWeight: 'bold',
                color:'green'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={RouterLink}
            to="/activity"
            sx={{ 
              py: 2,
              '&:hover': {
                backgroundColor: 'rgba(12, 189, 237, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary="Activity" 
              primaryTypographyProps={{
                fontWeight: 'bold',
                color:'green'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={RouterLink} 
            to="/"
            sx={{ 
              py: 2,
              '&:hover': {
                backgroundColor: 'rgba(12, 189, 237, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary="Sustainability" 
              primaryTypographyProps={{
                fontWeight: 'bold',
                color:'green'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            component={RouterLink}
            to="/contact"
            sx={{ 
              py: 2,
              '&:hover': {
                backgroundColor: 'rgba(12, 189, 237, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary="Contact Us" 
              primaryTypographyProps={{
                fontWeight: 'bold',
               color:'green'
              }}
            />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 2 }} />

      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ScrollToHashSection />
      
      {/* Navbar principale */}
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(8px)', 
          boxShadow: 'none',
          zIndex: 1300,
          borderBottom: hasScrolled ? '1px solid rgba(200, 200, 200, 0.3)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography 
              variant="" 
              component="" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold', 
                color:'green',
                fontSize:'35px',
                display:'flex',
                flexDirection:'row'
              }}
            >
           <Avatar
           alt='Logo' 
           src="assets/Capture d'écran 2025-09-17 091439.png"
           sx={{ height: { xs: '60px', md: '70px' }, width: { xs: '60px', md: '70px' } }}
           />
              <Typography
                variant='h4'
                component='h1'
                sx={{
                 color:'green',
                 fontSize:{xs:'0.9rem', md:'1.2rem'},
                 fontWeight:'bold',
                 marginTop:'10px'
            }}>
              GreenCycle <br/>
              Liberia INC.
            </Typography>
            </Typography>
            
 
            

            {/* Menu complet desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button color="inherit" 
               component={RouterLink} 
                to={"/"}
              sx={{ 
                color:'green',
                fontWeight:'bold' ,
                fontStyle:'italic',
                textTransform:'capitalize'
              }}>
                Home
              </Button>
              <Button 
                color="inherit" 
                component={RouterLink} 
                to={"/about"}
                sx={{ 
                  color:'green',
                  fontWeight:'bold',
                  fontStyle:'italic',
                  textTransform:'capitalize' 
                }}
              >
                About Us
              </Button>
              <Button 
                color="inherit" 
                component={RouterLink}
                to= "/activity"
                sx={{ 
                  color:'green',
                  fontWeight:'bold',
                  fontStyle:'italic',
                  textTransform:'capitalize'
                }}
              >
                Activity
              </Button>
              <Button
                component={RouterLink} 
                to="/"
                color="inherit" 
                sx={{
                  color:'green',
                  fontWeight:'bold',
                  fontStyle:'italic',
                  textTransform:'capitalize' 
                }}
              >
                Sustainability
              </Button>
              <Button 
                color="inherit" 
                component={RouterLink}
                to="/contact"
                sx={{ 
                  color:'green',
                  fontWeight:'bold',
                  fontStyle:'italic',
                  textTransform:'capitalize'
                }}
              >
                Contact Us
              </Button>
              
            </Box>

            {/* Menu burger pour mobile */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                color: '#333' 
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Meilleure performance sur mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      
      {/* Espace pour pousser le contenu sous la navbar */}
      <Toolbar />

      {/* Contenu principal */}
      <Box sx={{ 
        zIndex: 1,
        position: 'relative'
      }}>
        {/* Insérez ici le contenu de votre page */}
      </Box>
    </Box>
  );
}