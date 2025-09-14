import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';



const stats = [
  { name: 'Compassion',description:'We work towrds building awareness and boosting team spirit.', icon:<VolunteerActivismIcon color="black" fontSize="large"/> },
  { name: 'Being positive',description:'We aim at starting and ending the day on a positive note.' ,icon: <ThumbUpAltIcon color="black" fontSize="large" /> },
  { name: 'Respect', description: 'We maintain mutual relationships with our clients with respect and integrity.' ,icon: <SwapHorizIcon color="black" fontSize="large"/> },
   { name: 'Working Together', description: 'We grow by respecting and working together in harmony.' ,icon: <Diversity3Icon color="black" fontSize="large"/> },
 
];

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  Height: '100vh',
  background: 'linear-gradient(135deg, #151716ff 0%, #0f100fff 100%)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  color: 'white',
}));

const BackgroundImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.3,
  zIndex: 0,
});

const GradientOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, rgba(11, 52, 20, 0.8) 0%, rgba(13, 14, 13, 0.9) 100%)',
  zIndex: 1,
});

const DecorativeBlur = styled(Box)(({ theme, variant }) => ({
  position: 'absolute',
  background: 'linear-gradient(135deg, #ff4694 0%, #776fff 100%)',
  borderRadius: '50%',
  filter: 'blur(100px)',
  opacity: 0.2,
  zIndex: 1,
  ...(variant === 'blur1' && {
    top: -200,
    right: '50%',
    width: 400,
    height: 300,
  }),
  ...(variant === 'blur2' && {
    top: -300,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 500,
    height: 400,
    filter: 'blur(120px)',
    opacity: 0.15,
  }),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  fontWeight: 500,
  padding: '8px 0',
  borderBottom: '2px solid transparent',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: theme.palette.info.light,
    borderBottomColor: theme.palette.info.light,
    '&::after': {
      transform: 'translateX(4px)',
    },
  },
  '&::after': {
    content: '"→"',
    marginLeft: '8px',
    transition: 'transform 0.3s ease',
  },
}));

const StatCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 12,
  textAlign: 'center',
  transition: 'transform 0.3s ease, background 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    background: 'rgba(255, 255, 255, 0.08)',
  },
}));

export default function HeroSection() {
  return (
    <HeroContainer>
      {/* Image de fond */}
      <BackgroundImage
        src="src/assets/WhatsApp Image 2025-08-26 à 12.35.58_62444837.jpg"
        alt="Background"
      />
      
      {/* Overlay de gradient */}
      <GradientOverlay />
      
      {/* Éléments décoratifs */}
      <DecorativeBlur variant="blur1" />
      <DecorativeBlur variant="blur2" />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 12 ,height:'200vh'}}>
        {/* Contenu principal */}
        <Box sx={{ Width:'100%' , mb: 5 }}>
       
             <Typography
                variant="h1"
                component="h1"
                sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
                fontWeight: 600,
                lineHeight: 1.1,
                mb: 4,
                letterSpacing: '-0.02em',
               }}
             >
                 Work with us
             </Typography>
          <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            flexDirection:{xs:'column', md:'row'},
            gap:'20px'
          }}>  
           <Box sx={{
            display:'flex'
           
           }}>
             <Typography
                variant="h6"
                sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem' },
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 400,
                mb: 6,
                 }}
             >
               Our work goes beyond waste management, it’s about environmental stewardship, 
               community empowerment, 
               and contributing to Liberia’s long-term sustainable development. 
            </Typography>
          </Box>
          <Box sx={{
            display:'flex',
            marginLeft:'100px'
          }}>
            <Typography 
            variant="h6"
            sx={{
              fontSize:{ xs:'1.125rem',sm:'1.25rem'},
              lineHeight:1.6,
              color:'rgba(255, 255, 255, 0.8)',
              fontWeight:400,
              mb: 6,

            }}
             >
                   At GreenCycle Liberia, we believe that every discarded item has potential, 
                   and through innovation and responsibility, we are turning waste into a resource that benefits people, 
                   the planet, and future generations.
            </Typography>
          </Box>
           <Box sx={{
            display:'flex',
            marginLeft:'100px'
          }}>
            <Typography 
            variant="h6"
            sx={{
              fontSize:{ xs:'1.125rem',sm:'1.25rem'},
              lineHeight:1.6,
              color:'rgba(255, 255, 255, 0.8)',
              fontWeight:400,
              mb: 6,

            }}
             >
                   At GreenCycle Liberia, we believe that every discarded item has potential, 
                   and through innovation and responsibility, we are turning waste into a resource that benefits people, 
                   the planet, and future generations.
            </Typography>
          </Box>
         </Box>  
        </Box>
        
        {/* Liens de navigation */}
       
       
            <Typography
                variant="h1"
                component="h1"
                sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
                fontWeight: 600,
                lineHeight: 1.1,
                mb: 4,
                letterSpacing: '-0.02em',
               }}
             >
                 Why Choose us
             </Typography>
             <Typography 
                   variant="h6"
                   component="h1"
                   align="center"
                   sx={{mb:6}}
                   >
                      We constantly aim at working together to further advance
                      our performance to achieve sustainable benefits and maintain 
                      good relationships with our clients and patners.
                   </Typography>
        {/* Statistiques */}
        <Grid container spacing={4} sx={{ maxWidth: 800 ,display:'flex',
                justifyContent:'space-between',
                flexDirection:{xs:'column', md:'row'},
                gap:'250px'}}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} md={3} key={stat.name} sx={{
                
            }}>
              <StatCard sx={{
                position:'absolute',
                width:'20%',
                height:'20%',
                marginTop:'100px',
                zIndex:100
                
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontSize: { xs: '2rem', sm: '2.5rem' },
                      fontWeight: 700,
                      mb: 1,
                      color: 'info.light',
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.icon}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </CardContent>
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </HeroContainer>
  );
}