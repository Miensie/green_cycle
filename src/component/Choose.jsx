import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Container,Paper } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card 
      sx={{ 
        height: { xs: 'auto', md: '300px' },
        width: '300px', 
        display: 'flex',
        borderRadius: 3,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
        },
        position: 'relative',
        overflow: 'visible',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '10%',
          width: '80%',
          height: '3px',
          backgroundColor: '#414543',
          borderRadius: '2px'
        }
      }}
    >
      <CardContent sx={{ 
        flexGrow: 1, 
        p: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' }
      }}>
        <Box 
          sx={{ 
            mb: 2, 
            display: 'inline-flex',
            backgroundColor: '#28d55f',
            borderRadius: 2,
            p: 1.5
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" component="h2" gutterBottom fontWeight="600">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <VolunteerActivismIcon color="black" fontSize="large" />,
      title: "Compassion",
      description: "We work towards building awareness and boosting team spirit."
    },
    {
      icon: <SwapHorizIcon color="black" fontSize="large" />,
      title: "Respect",
      description: "We maintain mutual relationships with our clients with respect and integrity."
    },
    {
      icon: <ThumbUpAltIcon color="black" fontSize="large" />,
      title: "Being positive",
      description: "We aim at starting and ending the day on a positive note."
    },
    {
      icon: <Diversity3Icon color="black" fontSize="large" />,
      title: "Working together",
      description: "We grow by respecting and working together in harmony."
    }
  ];

  return (
    <Container maxWidth='lg' sx={{ py: { xs: 12, sm: 16 }}}>
     <Box sx={{width:'100%'}}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom 
        fontWeight="bold"
        color='green'
        sx={{ 
          mb: 4,
          display:'flex',
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
        }}
      >
        Why Choose Us
      </Typography>
     
      
    <Box sx={{display:'flex',flexDirection:'row', width:'100%'}}>
     <Box sx={{display:'flex',width:'50%',flexDirection:'column'}}> 
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <CheckCircleIcon sx={{color:'#8fe908ff',
          fontSize:'50px',
          paddingTop:'15px',
          transition: 'transform 0.6s ease-in-out',
          '&:hover': {
            transform: 'rotate(360deg)'
          }
        }}
          /> 
        <Typography
                variant='body2'
                color="text.secondary"
                sx={{
                  fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px',
                   flexGrow: 1
                    
                }}
      >
        Our work goes beyond waste management, it's about environmental stewardship, 
        community empowerment, and contributing to Liberia's long-term sustainable development.
       </Typography>
       </Box>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <CheckCircleIcon sx={{color:'#065c0bff',
          fontSize:'50px',
          paddingTop:'15px',
          transition: 'transform 0.6s ease-in-out',
          '&:hover': {
            transform: 'rotate(360deg)'
          }
        }}
          /> 
        <Typography
                variant='body2'
                color="text.secondary"
                sx={{
                  fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px',
                   flexGrow: 1
                    
                }}
      >
           We constantly aim at working together to further advance 
           our performance to achieve sustainable benefits and maintain 
           good relationships with our clients and patners.
       </Typography>
       </Box>
       <Box sx={{display:'flex',flexDirection:'row'}}>
        <CheckCircleIcon sx={{color:'#32705aff',
          fontSize:'50px',
          paddingTop:'15px',
          transition: 'transform 0.6s ease-in-out',
          '&:hover': {
            transform: 'rotate(360deg)'
          }
        }}
          />
         <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px',
                   flexGrow: 1
                }}
      >
          At GreenCycle Liberia, we believe that every discarded item has potential, 
          and through innovation and responsibility, we are turning waste into a resource that benefits people, 
          the planet, and future generations.
       </Typography>
       </Box>
        <Box sx={{display:'flex',flexDirection:'row'}}>
        <CheckCircleIcon 
        sx={{color:'#d9f48fff',
          fontSize:'50px',
          paddingTop:'15px',
          transition: 'transform 0.6s ease-in-out',
          '&:hover': {
            transform: 'rotate(360deg)'
          }
        }}
        /> 
        <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  fontWeight:'bold',
                   fontSize: { xs: '0.8rem', md: '0.9rem' },
                   padding:'10px',
                   paddingTop:'20px',
                   flexGrow: 1
                }}
      >
              We  work together to build  a healthier Liberia.
       </Typography>
       </Box>
      </Box> 
      <Box sx={{display:'flex'}}>
        <Grid 
        container 
        spacing={{ xs: 2, sm: 3, md: 4 }} 
        sx={{ 
          display:'flex',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        {features.map((feature, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3} 
            key={index}
            sx={{
              display: 'flex'
            }}
          >
            <FeatureCard 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          </Grid>
        ))}
        </Grid>
      </Box>
    </Box>  
    </Box> 
    </Container>
  );
};

export default FeatureCards;