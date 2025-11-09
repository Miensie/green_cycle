'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
  Chip,
  Paper
} from '@mui/material';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import CompostIcon from '@mui/icons-material/Compost';
import EngineeringIcon from '@mui/icons-material/Engineering';  

const products = [
  {
    id: 1,
    name: 'Energy Solutions',
    href: '/action',
    imageSrc: '/assets/WhatsApp Image 2025-10-08 à 01.00.06_9ce40b63.jpg',
    imageAlt: "",
    icon: <EnergySavingsLeafIcon sx={{display:'flex',
                                     justifyContent:'center',
                                     fontSize:'80px',
                                     alignItems:'center',
                                    position:'absolute',
                                    left:'30%',
                                    top:'-20%',
                                    zIndex:'11',
                                    color:'green'
                                  }}/>
  },
  {
    id: 2,
    name: 'Composting Services',
    href: '/action',
    imageSrc: '/assets/WhatsApp Image 2025-10-08 à 01.01.07_a6c32420.jpg',
    imageAlt: "",
    icon: <CompostIcon sx={{display:'flex',
                                     justifyContent:'center',
                                     fontSize:'80px',
                                     alignItems:'center',
                                    position:'absolute',
                                    left:'30%',
                                    top:'-20%',
                                    zIndex:'11',
                                    color:'green'
                        
    }}/>
  },
  {
    id: 3,
    name: 'Industrial Recycling',
    href: '/action',
    imageSrc: '/assets/WhatsApp Image 2025-10-08 à 00.58.10_499d008d.jpg',
    imageAlt: "",
     icon: <EngineeringIcon sx={{display:'flex',
                                 justifyContent:'center',
                                 fontSize:'80px',
                                 alignItems:'center',
                                 position:'absolute',
                                 left:'30%',
                                 top:'-20%',
                                 zIndex:'11',
                                 color:'green'
                    
     }}/>
  },
  
];

const ProductGrid = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: 8 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Titre */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: 'green',
            mb: 10,
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}
        >
         Projects
        </Typography>

        {/* Grille de produits */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                 
                }}
              >
                {/* Lien invisible couvrant toute la carte */}
                <Link
                  href={product.href}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }
                  }}
                />

                {/* Image du produit */}
                <CardMedia
                  component="img"
                  height="350"
                  image={product.imageSrc}
                  alt={product.imageAlt}
                  className="product-image"
                  sx={{
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease-in-out',
                    backgroundColor: 'grey.100'
                  }}
                />

                {/* Contenu du produit */}
                <CardContent sx={{ p: 2, position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ flex: 1 }}>
                      {/* Nom du produit */}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: '600',
                          color: 'text.primary',
                          fontSize: '0.95rem',
                          mb: 0.5,
                          textAlign:'center'
                        }}
                      >
                        {product.name}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
               {/* icon */}
                <Box sx={{
                  display:'flex',
                   position:'relative',
                   zIndex:10,
                   paddingBottom:'30px',
                   marginBottom:'30px'

                    }}>
                    <Paper sx={{
                      bgcolor:'background.paper',
                      width:250,
                      height:100,
                      position:'absolute',
                      top:'-50%',
                      left:'15%',
                      borderRadius:'16px'
                      
                      
                        
                        
                      }}>
                        {product.icon}
                      </Paper>
                    </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGrid;