

import React from 'react';
import Producthome from '../component/Producthome.jsx'
import Footer1 from '../component/Footer1.jsx';
import { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery, Divider,useScrollTrigger,Fab,Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductList = ({ products }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Données des produits directement dans le composant
  const defaultProducts = [
    {
      id: 1,
      name: "Biogas",
      description: "Methane-rich gas produced from organic waste through anaerobic digestion. Used for clean cooking, electricity generation, and heating. A sustainable alternative to traditional fuels that reduces greenhouse gas emissions and promotes energy independence.",
      image: "/assets/WhatsApp Image 2025-09-01 à 03.30.34_80485baa.jpg",
      price: "Biofuels"
    },
    {
      id: 2,
      name: "Briquettes",
      description: "Solid biofuel manufactured from compressed organic residues and agricultural waste. Provides a smokeless, efficient, and eco-friendly alternative to charcoal and firewood. Ideal for cooking and heating with higher energy efficiency and lower environmental impact.",
      image: "/assets/WhatsApp Image 2025-09-05 à 04.57.08_babcc4f4.jpg",
      price: "Biofuels"
    },
    {
      id: 3,
      name: "Future Energy Solutions",
      description: "GreenCycle Liberia is committed to expanding into innovative waste-to-energy technologies. Our future initiatives include advanced biogas systems, solar integration, and biofuel refinement to ensure sustainable energy security and environmental protection for communities.",
      image: "/assets/WhatsApp Image 2025-09-05 à 17.13.07_b9caf33d.jpg",
      price: "Innovative Energy"
    },
    {
      id: 4,
      name: "Compost Fertilizer",
      description: "High-quality organic compost produced from biodegradable waste through controlled decomposition. Enriches soil fertility, improves water retention, and boosts agricultural yields. Reduces dependence on chemical fertilizers while restoring degraded farmland and promoting sustainable agriculture.",
      image: "/assets/WhatsApp Image 2025-09-01 à 03.05.21_868a39aa.jpg",
      price: "Organic Fertilizers"
    },
    {
      id: 5,
      name: "Recycled Plastic Products",
      description: "We transform plastic waste into valuable products through advanced recycling processes. Our range includes durable construction materials (plastic lumber, tiles), household items, furniture, and innovative landscaping products. Helps reduce plastic pollution while creating economic opportunities.",
      image: "/assets/WhatsApp Image 2025-09-05 à 04.59.35_2090401d.jpg",
      price: "Recycled Products"
    }
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

  // Utiliser les produits passés en props ou les produits par défaut
  const displayProducts = products && Array.isArray(products) && products.length > 0 ? products : defaultProducts;

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
 

  return (
    <Box Width="100%" sx={{margin: '0px',padding:'0px'}}>

       <Producthome/>
      <Divider sx={{ mb: 5, backgroundColor: 'green.400' }} />
      
      
      <Typography variant="body1" component="p" color='text.secondary' sx={{ mb: 6, lineHeight: 1.8 }}>
        We produce clean, renewable energy from waste, helping households and industries 
        reduce reliance on charcoal, firewood, and fossil fuels. Our sustainable solutions 
        contribute to environmental protection and energy security.
      </Typography>

      {displayProducts.map((product, index) => {
        const isEven = index % 2 === 0;
        
        // ALTERNANCE CORRECTE :
        // Index 0 (pair) : Image à GAUCHE, Description à DROITE
        // Index 1 (impair) : Description à GAUCHE, Image à DROITE
        const imageOnLeft = isEven;

        // Layout flex pour desktop
        const desktopLayout = (
          <Box
            sx={{
              display: 'flex',
              flexDirection: imageOnLeft ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: 6,
              width: '100%'
            }}
          >
            {/* Image */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 4,
                  backgroundColor: '#f5f5f5'
                }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                }}
              />
            </Box>

            {/* Description */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                textAlign: imageOnLeft ? 'left' : 'right'
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight="bold" color='green'>
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
                {product.description}
              </Typography>
              {product.price && (
                <Typography 
                  variant="h5" 
                  color="#374e2eff" 
                  sx={{ 
                    fontWeight: 'bold',
                    backgroundColor: 'green.100',
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    display: 'inline-block'
                  }}
                >
                  {product.price}
                </Typography>
              )}
            </Box>
          </Box>
        );

        // Layout mobile (toujours vertical)
        const mobileLayout = (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
          >
            {/* Image */}
            <Box>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 4,
                  backgroundColor: '#f5f5f5'
                }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                }}
              />
            </Box>

            {/* Description */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom fontWeight="bold" color='green.800'>
                {product.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                {product.description}
              </Typography>
              {product.price && (
                <Typography 
                  variant="h6" 
                  color="primary" 
                  sx={{ 
                    mt: 2, 
                    fontWeight: 'bold',
                    backgroundColor: 'green.100',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    display: 'inline-block'
                  }}
                >
                  {product.price}
                </Typography>
              )}
            </Box>
          </Box>
        );

        return (
          <Paper 
            key={product.id} 
            elevation={0} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white',
              mb: 4,
              border: '1px solid',
              borderColor: 'grey.200'
            }}
          >
            {isMobile ? mobileLayout : desktopLayout}
          </Paper>
        );
      })}
      <Box sx={{width:'100%',margin:'none'}}>
        <Footer1/>
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
};

export default ProductList;