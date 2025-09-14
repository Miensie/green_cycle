import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  Avatar
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const UniverselleFooter = () => {
  const navigationLinks = [
    { label: 'À PROPOS', href: '#apropos' },
    { label: 'PRODUITS', href: '#produits' },
    { label: 'SERVICES', href: '#services' },
    { label: 'REVENDEURS', href: '#revendeurs' },
    { label: 'ACTUALITÉS', href: '#actualites' },
    { label: 'CONTACTS', href: '#contacts', active: true }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 40 0 L 0 0 0 40" fill="none" stroke="%23333" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%" height="100%" fill="url(%23grid)"/%3E%3C/svg%3E")',
        color: 'white',
        py: 6,
        position: 'relative'
      }}
    >
      <Container maxWidth="xl">
        {/* Logo et mission */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  fontWeight: 'bold',
                  fontSize: '2rem'
                }}
              >
                 <Avatar
                  alt='Logo' 
                  src="src/assets/Capture d'écran 2025-08-27 123502.png"
                  sx={{ height: { xs: '60px', md: '80px' }, width: { xs: '60px', md: '80px' } }}/>

              </Box>
              <Box sx={{ fontSize: '2rem' }}>
                GREENCYCLE<br />LIBERIA INC.
              </Box>
            </Typography>
          </Box>
          
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              color: '#cccccc',
              fontStyle: 'italic'
            }}
          >
                     Our mission is to create sustainable waste solutions
                      for Liberia by transforming waste through
                      recycling and composting, empowering communities
                      through active engagement, and reducing our carbon
                      footprint while improving the quality of life for 
                      our employees and the communities we serve.
          </Typography>
        </Box>

        {/* Sections principales */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Contactez-nous */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'white'
              }}
            >
              Contact Us
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <AddLocationAltIcon sx={{ color: '#ff5722', mr: 1, mt: 0.5 }} />
              <Typography variant="body2" sx={{ color: '#cccccc' }}>
                Monrovia, Liberia.
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MailOutlineIcon sx={{ color: '#ff5722', mr: 1 }} />
              <Typography variant="body2" sx={{ color: '#cccccc' }}>
                greencycleliberia@gmail.com
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocalPhoneIcon sx={{ color: '#ff5722', mr: 1 }} />
              <Typography variant="body2" sx={{ color: '#cccccc' }}>
                (225) 27 23 46 78 83
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
              <Typography variant="body2" sx={{ color: '#cccccc' }}>
                (225) 05 45 00 30 00
              </Typography>
            </Box>
          </Grid>

          {/* Horaires d'ouverture */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'white'
              }}
            >
              Services.
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#cccccc', mb: 0.5 }}>
                <strong>Lundi - Vendredi :</strong> 8h à 16h non stop
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#cccccc', mb: 0.5 }}>
                <strong>Samedi :</strong> 8h à 12h
              </Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#cccccc', mb: 0.5 }}>
                <strong>Dimanche :</strong> Fermé
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ color: '#cccccc' }}>
                <strong>Assistance :</strong> du Lundi -Samedi 8h à 18h
              </Typography>
            </Box>
          </Grid>

          {/* Suivez-nous sur */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: 'white'
              }}
            >
              Suivez-nous sur
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
              <Link
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#ff5722',
                    textDecoration: 'underline'
                  }
                }}
              >
                Facebook
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#ff5722',
                    textDecoration: 'underline'
                  }
                }}
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#ff5722',
                    textDecoration: 'underline'
                  }
                }}
              >
                Twitter
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: '#333', mb: 3 }} />

        {/* Navigation et copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          {/* Navigation */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              alignItems: 'center'
            }}
          >
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{
                  color: link.active ? '#ff5722' : '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: link.active ? 'bold' : 'normal',
                  '&:hover': {
                    color: '#ff5722',
                    textDecoration: 'underline'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="caption"
            sx={{
              color: '#999',
              fontSize: '0.75rem'
            }}
          >
            © 2025 GREENCYCLE LIBERIA INC. POWERED BY{' '}
            <Link
              href="#"
              sx={{
                color: '#ff5722',
                textDecoration: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              POLYCREATION
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UniverselleFooter;