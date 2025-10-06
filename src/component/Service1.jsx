import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Link, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, PlayArrow, Pause } from '@mui/icons-material';

const products = [
  {
    id: 1,
    name: 'Community Awareness & Outreach',
    href: '#',
    imageSrc: 'public/assets/34204c51035ddd03d3662a4e3512262a.jpg',
    imageAlt: "",
  },
  {
    id: 2,
    name: 'Training & Capacity Building',
    href: '#',
    imageSrc: 'public/assets/WhatsApp Image 2025-09-05 à 04.57.08_a3700c07.jpg',
    imageAlt: "",
  },
  {
    id: 3,
    name: 'Plastic Recycling & Upcycling',
    href: '#',
    imageSrc: 'public/assets/86b859fb263bd11addd26e21e252864f.jpg',
    imageAlt: "",
  },
  {
    id: 4,
    name: 'Waste Collection & Sorting',
    href: '#',
    imageSrc: 'public/assets/b1301743216ed33be27bb938b462159e.jpg',
    imageAlt: "",
  },
  {
    id: 5,
    name: 'Biogas & Composting Solutions',
    href: '#',
    imageSrc: 'public/assets/540462698_122103984806992913_8996062062461794680_n.jpg',
    imageAlt: "",
  },
  {
    id: 6,
    name: 'Partnership & Advisory Support',
    href: '#',
    imageSrc: 'public/assets/e7697ff24ce8c6f99e1b0b11472cbc61.jpg',
    imageAlt: "",
  },
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef(null);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Calcul du nombre d'éléments visibles selon l'écran
  useEffect(() => {
    if (isMobile) {
      setItemsPerView(1);
    } else if (isTablet) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  }, [isMobile, isTablet]);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, activeIndex]);

  // Calcul de la largeur de chaque item
  const itemWidth = 100 / itemsPerView;

  return (
    <Box sx={{ backgroundColor: 'grey.50', py: 6 }}>
      <Box sx={{
        maxWidth: { xs: '42rem', sm: '48rem', lg: '100rem' },
        mx: 'auto',
        px: { xs: 2, sm: 3, lg: 4 },
      }}>
        <Typography 
          variant="h2" 
          component="h2"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: 'green',
            textAlign: 'center',
            mb: 4,
            fontSize: { xs: '2rem', sm: '2.5rem', lg: '3rem' }
          }}
        >
          Our Services
        </Typography>

        {/* Conteneur principal avec overflow hidden */}
        <Box sx={{ 
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          mx: { xs: 0, sm: 2 }
        }}>
          {/* Boutons de navigation */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              boxShadow: 3,
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'grey.100',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
              opacity: 0.9,
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              boxShadow: 3,
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'grey.100',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
              opacity: 0.9,
            }}
          >
            <KeyboardArrowRight />
          </IconButton>

          {/* Conteneur défilant */}
          <Box 
            ref={carouselRef}
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 3, lg: 4 },
              transform: `translateX(-${activeIndex * itemWidth}%)`,
              transition: 'transform 0.5s ease-in-out',
              padding: { xs: '10px 0', sm: '20px 0' },
            }}
          >
            {products.map((product, index) => (
              <Card 
                key={product.id}
                sx={{ 
                  minWidth: `calc(${itemWidth}% - ${itemsPerView > 1 ? '20px' : '0px'})`,
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  height: '100%',
                }}
              >
                <Link 
                  href={product.href} 
                  underline="none"
                  sx={{
                    display: 'block',
                    height: '100%',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={product.imageAlt}
                    image={product.imageSrc}
                    sx={{
                      width: '100%',
                      height: { xs: 200, sm: 250, lg: 300 },
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ 
                        color: 'text.primary',
                        fontWeight: '600',
                        textAlign: 'center',
                        fontSize: { xs: '1rem', sm: '1.1rem', lg: '1.2rem' },
                        minHeight: { xs: 'auto', sm: 60 }
                      }}
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Contrôles du carousel */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          mt: 4,
          gap: 3 
        }}>
          {/* Bouton play/pause */}
          <IconButton 
            onClick={() => setAutoPlay(!autoPlay)} 
            color="primary"
            size="large"
            sx={{
              backgroundColor: autoPlay ? 'green' : 'grey.300',
              color: autoPlay ? 'white' : 'grey.600',
              '&:hover': {
                backgroundColor: autoPlay ? 'darkgreen' : 'grey.400',
              }
            }}
          >
            {autoPlay ? <Pause /> : <PlayArrow />}
          </IconButton>

          {/* Indicateurs de slide */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: index === activeIndex ? 'green' : 'grey.400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: index === activeIndex ? 'darkgreen' : 'grey.600',
                    transform: 'scale(1.2)',
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Compteur de slides */}
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            color: 'text.secondary',
            mt: 2
          }}
        >
          {activeIndex + 1} / {maxIndex + 1}
        </Typography>

        {/* Indication visuelle du défilement */}
        <Typography 
          variant="body2" 
          sx={{ 
            textAlign: 'center', 
            color: 'grey.600',
            mt: 1,
            fontStyle: 'italic'
          }}
        >
          {itemsPerView} services visibles • {products.length} au total
        </Typography>
      </Box>
    </Box>
  );
}