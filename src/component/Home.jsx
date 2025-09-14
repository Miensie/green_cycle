import * as React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import Choose from './Choose.jsx'
import Our from './Our.jsx'
import Services2 from './Services2.jsx'
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  Grid,
  Paper,
  IconButton,
  Fab,
  Zoom,
  useScrollTrigger,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


// Images pour le carousel (remplacez par vos propres images)
const carouselImages = [
  "src/assets/WhatsApp Image 2025-09-05 à 04.59.32_e99a0ee1.jpg",
  "src/assets/WhatsApp Image 2025-08-26 à 12.35.58_62444837.jpg",
  "src/assets/WhatsApp Image 2025-09-05 à 04.59.32_ba1fb819.jpg",
  "src/assets/daw3.jpg",
  "src/assets/daw2.jpg"
];

// Types d'effets d'animation
const ANIMATION_TYPES = {
  STRIPES: 'stripes',    // Découpe en bandes
  SLIDE: 'slide',        // Glissement
  ZOOM: 'zoom',          // Zoom
  GROW: 'grow'           // Agrandissement
};

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

export default function HeroSection() {
  
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [stripes, setStripes] = useState([]);
  const [showBottomButton, setShowBottomButton] = useState(true);
  const [animationType, setAnimationType] = useState(ANIMATION_TYPES.STRIPES);

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

  // Préparer les bandes verticales pour l'effet de découpe
  useEffect(() => {
    const generateStripes = () => {
      const stripeCount = 10;
      const newStripes = [];
      
      for (let i = 0; i < stripeCount; i++) {
        newStripes.push({
          id: i,
          delay: Math.random() * 0.5,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      setStripes(newStripes);
    };
    
    generateStripes();
  }, []);

  const nextImage = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Déterminer le prochain type d'animation (cycle through all types)
    const animationKeys = Object.values(ANIMATION_TYPES);
    const currentTypeIndex = animationKeys.indexOf(animationType);
    const nextTypeIndex = (currentTypeIndex + 1) % animationKeys.length;
    setAnimationType(animationKeys[nextTypeIndex]);
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 1000);
  };

  const prevImage = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Déterminer le type d'animation précédent
    const animationKeys = Object.values(ANIMATION_TYPES);
    const currentTypeIndex = animationKeys.indexOf(animationType);
    const prevTypeIndex = (currentTypeIndex - 1 + animationKeys.length) % animationKeys.length;
    setAnimationType(animationKeys[prevTypeIndex]);
    
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 1000);
  };

  const goToImage = (index) => {
    if (isAnimating || index === currentImageIndex) return;
    
    setIsAnimating(true);
    
    // Choisir un type d'animation aléatoire pour les clics sur les indicateurs
    const animationKeys = Object.values(ANIMATION_TYPES);
    const randomAnimation = animationKeys[Math.floor(Math.random() * animationKeys.length)];
    setAnimationType(randomAnimation);
    
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsAnimating(false);
    }, 1000);
  };

  // Changement automatique d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, isAnimating]);

  // Rendu des différentes animations
  const renderAnimation = () => {
    const commonStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
    };

    switch (animationType) {
      case ANIMATION_TYPES.STRIPES:
        // Effet de découpe en bandes verticales
        return (
          <Box sx={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%',
            display: 'flex'
          }}>
            {stripes.map((stripe) => (
              <Box
                key={stripe.id}
                sx={{
                  flex: 1,
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 1s ease-in-out',
                  transitionDelay: `${stripe.delay}s`,
                  transform: isAnimating 
                    ? `translateY(${100 * stripe.direction}%)` 
                    : 'translateY(0)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${carouselImages[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: `${(stripe.id / (stripes.length - 1)) * 100}% center`,
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: isAnimating ? 0 : 1
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${carouselImages[(currentImageIndex + 1) % carouselImages.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: `${(stripe.id / (stripes.length - 1)) * 100}% center`,
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: isAnimating ? 1 : 0
                  }
                }}
              />
            ))}
          </Box>
        );

      case ANIMATION_TYPES.SLIDE:
        // Effet de glissement
        return (
          <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <Box
              component="img"
              src={carouselImages[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              sx={{
                ...commonStyles,
                transition: 'transform 1s ease-in-out',
                transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)'
              }}
            />
            <Box
              component="img"
              src={carouselImages[(currentImageIndex + 1) % carouselImages.length]}
              alt={`Next slide`}
              sx={{
                ...commonStyles,
                transition: 'transform 1s ease-in-out',
                transform: isAnimating ? 'translateX(0)' : 'translateX(100%)'
              }}
            />
          </Box>
        );

      case ANIMATION_TYPES.ZOOM:
        // Effet de zoom
        return (
          <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <Box
              component="img"
              src={carouselImages[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              sx={{
                ...commonStyles,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
                transform: isAnimating ? 'scale(1.5)' : 'scale(1)',
                opacity: isAnimating ? 0 : 1
              }}
            />
            <Box
              component="img"
              src={carouselImages[(currentImageIndex + 1) % carouselImages.length]}
              alt={`Next slide`}
              sx={{
                ...commonStyles,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
                transform: isAnimating ? 'scale(1)' : 'scale(0.5)',
                opacity: isAnimating ? 1 : 0
              }}
            />
          </Box>
        );

      case ANIMATION_TYPES.GROW:
        // Effet d'agrandissement
        return (
          <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <Box
              component="img"
              src={carouselImages[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              sx={{
                ...commonStyles,
                transition: 'clip-path 1s ease-in-out',
                clipPath: isAnimating ? 'circle(0% at 50% 50%)' : 'circle(75% at 50% 50%)'
              }}
            />
            <Box
              component="img"
              src={carouselImages[(currentImageIndex + 1) % carouselImages.length]}
              alt={`Next slide`}
              sx={{
                ...commonStyles,
                transition: 'clip-path 1s ease-in-out',
                clipPath: isAnimating ? 'circle(75% at 50% 50%)' : 'circle(0% at 50% 50%)'
              }}
            />
          </Box>
        );

      default:
        return (
          <Box
            component="img"
            src={carouselImages[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            sx={commonStyles}
          />
        );
    }
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', position: 'relative', overflow:'hidden' }}>
      {/* Header */}
      
      {/* Mobile Menu Drawer */}
        <Our/>
        <Box mt={15}>
          <Services2/>   
        </Box>
        
       <Choose />
     
      {/* Hero Section */}
      
      
      {/* Background Effects */}
      
      {/* Image section - Carousel avec différents effets */}
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        height: { xs: '300px', sm: '400px', md: '500px' },
        overflow: 'hidden',
        my: 8,
        marginBottom:'10px',
      }}>
        {/* Conteneur d'animation */}
        {renderAnimation()}
        
        {/* Bouton précédent */}
        <IconButton
          onClick={prevImage}
          disabled={isAnimating}
          sx={{
            position: 'absolute',
            left: { xs: 10, md: 20 },
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            zIndex: 2,
            '&:disabled': {
              opacity: 0.5,
            }
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        
        {/* Bouton suivant */}
        <IconButton
          onClick={nextImage}
          disabled={isAnimating}
          sx={{
            position: 'absolute',
            right: { xs: 10, md: 20 },
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            zIndex: 2,
            '&:disabled': {
              opacity: 0.5,
            }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        
        {/* Indicateurs de diapositives */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2,
          }}
        >
          {carouselImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToImage(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === currentImageIndex ? 'primary.main' : 'grey.400',
                cursor: isAnimating ? 'default' : 'pointer',
                transition: 'background-color 0.3s, transform 0.3s',
                transform: index === currentImageIndex ? 'scale(1.2)' : 'scale(1)',
                '&:hover': {
                  transform: isAnimating ? 'scale(1)' : 'scale(1.2)',
                }
              }}
            />
          ))}
        </Box>
      </Box>
     
      {/* Projets section*/}

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