import React, { useState, useEffect } from 'react';
import HomePage from '../component/HomePage.jsx';
import {Link as RouterLink} from 'react-router-dom'
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  IconButton,
  useTheme,
  useMediaQuery,
  Button ,
  Paper

} from '@mui/material';
import { styled } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

// Styles personnalisés
const StyledCard = styled(Card)(({ theme }) => ({
  width:'100%',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  position: 'absolute',
}));


const CarouselButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: 10,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

// Données pour le carrousel
const carouselData = [
  {
    imageSrc: 'public/assets/6d15ecacd2d4f4482668cfdec891ca99.jpg',
    title: 'Turning Waste into Value !',
    subtitle: 'We transform everyday waste into useful and innovative products that benefit both people and the planet.'
  },
  {
    imageSrc: 'public/assets/69aa1d88b60ce3858557a7e5a7581ad2.jpg',
    title: 'For a Cleaner Tomorrow',
    subtitle: 'Our mission is to reduce pollution and create sustainable solutions for healthier communities in Liberia and beyond.'
  },
  {
    imageSrc: 'spublic/assets/542723233_122106111518992913_6057981429094286876_n.jpg',
    title: 'Innovation Through Recycling',
    subtitle: 'We harness creativity and technology to give waste a second life and drive the circular economy forward.'
  },
    {
    imageSrc: 'public/assets/550097351_122112349808992913_480860411663089177_n.jpg',
    title: 'Sustainability at the Core',
    subtitle: 'Every action we take is guided by our commitment to protect the environment and promote responsible resource use.'
  },
    {
    imageSrc: 'public/assets/49b566ae50cb6ab0ca4106bf54518c4f.jpg',
    title: 'Empowering Communities, Protecting Nature',
    subtitle: 'By working with local communities, we create jobs, raise awareness, and build a greener future together.'
  }
];

const NousConnaitre = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  // Rotation automatique des slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <Box maxWidth="lg" sx={{ }}>
      <StyledCard >
        {/* Badge d'expérience */}
       
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>

       <HomePage/>
       
         <Box sx={{ position: 'relative', height: isMobile ? '300px' : '700px',width:'100%' }}>
          {/* Image de fond avec overlay */}
          <Box
            sx={{
              backgroundImage: `url(${carouselData[currentSlide].imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'background-image 0.5s ease',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }
            }}
          />
          
          {/* Boutons de navigation du carrousel */}
          <CarouselButton 
            onClick={prevSlide} 
            sx={{ left: 16 }}
            aria-label="Image précédente"
          >
            <KeyboardArrowLeft />
          </CarouselButton>
          
          <CarouselButton 
            onClick={nextSlide} 
            sx={{ right: 16 }}
            aria-label="Image suivante"
          >
            <KeyboardArrowRight />
          </CarouselButton>
          
          {/* Indicateurs de slide */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 10,
            }}
          >
            {carouselData.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: index === currentSlide ? 'primary.main' : 'grey.400',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </Box>

          {/* Contenu superposé */}
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent:'center',
              alignItems: 'center',
              color: 'white',
              textAlign:'left',
              textTransform:'uppercase',
              p: 4
            }}
          >
            <Typography 
              variant="h1" 
              component="h2" 
              gutterBottom
              fontWeight="bold"
              sx={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontSize: { xs: '1.75rem', md: '3.5rem' }
              }}
            >
              {carouselData[currentSlide].title}
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: '800px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                mb: 4,
                fontSize: { xs: '1rem', md: '2rem' }
              }}
            >
              {carouselData[currentSlide].subtitle}
            </Typography>
          </Box>
        </Box>
    </Box>   
      </StyledCard>

          <Box sx={{display:'flex',
            flexDirection:{xs:'column', md:'row'},
            gap:{xs:'10px',md:'45px'},
            marginTop:{xs:'10px',md:'10px'},
            zIndex:50,
            alignItems:'center',
            marginLeft:{xs:'10px', md:'25px'},
            justifyContent:{xs:'center', md: 'flex-start' }
           
            }}>
              <Paper elevation={1} 
              sx={{
                width:{ xs: '90%', md: '30%' },
                height: { xs: 'auto', md: '250px' },
                borderRadius: '16px ',
                 minHeight: '250px',
                backgroundColor:'background.paper',
                zIndex:10,
                 marginTop: { xs: '400px', md: '680px' },
                 marginLeft: { xs: '0', md: '20px' },
                marginLeft:'20px',
                padding: { xs: '15px', md: '0' },
                 transition: 'transform 0.3s,box-shadow 0.3s',
               '&:hover':{
                transform: 'translate Y(-5px)',
                boxShadow: '0px 8px 20px rgba(0,0,0,0.1)'

            }
              }}>
                <Typography 
                variant='h4'
                component="h1"
                align='center'
                sx={{
                  fontWeight:'bold',
                   fontStyle: 'italic',
                   fontSize: { xs: '0.9rem', md: '1.2rem' },
                   color:'green',
                   pt: { xs: 1, md: 0 }

                }}>
                    Our vision 
                </Typography>
                <Typography
                variant='body2'
                component='p'
                color='text.primary'
                sx={{
                   fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px'
                  
                }}>
                  To be the leading supplier of nutrient-rich organic fertilizers for agriculture,
                   clean biogas for energy, and high-value recycled materials, 
                  driving sustainability and innovation in Liberia and beyond.
                </Typography> 
              </Paper>
               <Paper elevation={1} 
              sx={{
               width:{ xs: '90%', md: '30%' },
                height: { xs: 'auto', md: '250px' },
                borderRadius: '16px ',
                 minHeight: '250px',
                backgroundColor:'background.paper',
                zIndex:10,
                 marginTop: { xs: '20px', md: '680px' },
                 marginLeft: { xs: '0', md: '20px' },
                marginLeft:'20px',
                padding: { xs: '15px', md: '0' },
                 transition: 'transform 0.3s,box-shadow 0.3s',
               '&:hover':{
                transform: 'translate Y(-5px)',
                boxShadow: '0px 8px 20px rgba(0,0,0,0.1)'

            }
              }}>
                <Typography
                variant='h4'
                component="h1"
                align='center'
                sx={{
                  fontWeight:'bold',
                  fontWeight:'bold',
                   fontStyle: 'italic',
                   fontSize: { xs: '0.9rem', md: '1.2rem' },
                   color:'green'

                }}>
                    Our mission
                </Typography>
                <Typography
                variant='body2'
                color='text.primary'
                component='p'
                sx={{
                  fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px'
                }}>
                      To create sustainable waste solutions for Liberia by transforming waste through recycling and composting, empowering communitiesthrough active engagement, and reducing our carbonfootprint while improving the quality of life for our employees and the communities we serve.
                </Typography>
              </Paper>
               <Paper elevation={1} 
              sx={{
               width:{ xs: '90%', md: '30%' },
                height: { xs: 'auto', md: '250px' },
                borderRadius: '16px ',
                 minHeight: '250px',
                backgroundColor:'background.paper',
                zIndex:10,
                 marginTop: { xs: '20px', md: '680px' },
                 marginLeft: { xs: '0', md: '20px' },
                marginLeft:'20px',
                padding: { xs: '15px', md: '0' },
                 transition: 'transform 0.3s,box-shadow 0.3s',
               '&:hover':{
                transform: 'translate Y(-5px)',
                boxShadow: '0px 8px 20px rgba(0,0,0,0.1)'

            }
              }}>
                  <Typography
                  variant='h4'
                component="h1"
                align='center'
                sx={{
                  fontWeight:'bold',
                   fontWeight:'bold',
                   fontStyle: 'italic',
                   fontSize: { xs: '0.9rem', md: '1.2rem' },
                   color:'green'
                }}>
                  Soustainbility
                  </Typography>
                  <Typography
                  variant='body2'
                  color='text.primary'
                  component='p'
                  sx={{
                    fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px'
                  }}>
                    At GreenCycle Liberia INC., sustainability is at the heart of everything we do. 
                    We are committed to reducing waste, promoting recycling, 
                    and transforming discarded materials into valuable resources. 
                  </Typography>
              </Paper>
          </Box>
         
    </Box>
  );
};

export default NousConnaitre;