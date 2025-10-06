import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  alpha,
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material';
import {
  Public,
  NetworkCheck,
  LocationOn,
  Groups
} from '@mui/icons-material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const StatisticsGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Statistics data with icons and background images
  const statistics = [
    {
      title: "Compassion",
      description: "We work towards building awareness and boosting team spirit.",
      icon: <Diversity3Icon sx={{ fontSize: 80 }} />,
      bgImage: "public/assets/ac05ad7ae6455f166732adfd3d0c1829.jpg",
      overlayColor: alpha('#0a2e0a', 0.85),
      iconColor: "#7fe261"
    },
    {
      title: "Respect",
      description: "We maintain mutual relationships with our clients with respect and integrity.",
      icon: <SwapHorizIcon sx={{ fontSize: 80 }} />,
      bgImage: "public/assets/3a98cf724a37d7927141330da7472bed.jpg",
      overlayColor: alpha('#1a5a1a', 0.85),
      iconColor: "#7fe261"
    },
    {
      title: "Being positive",
      description: "We aim at starting and ending the day on a positive note.",
      icon: <ThumbUpAltIcon sx={{ fontSize: 80 }} />,
      bgImage: "public/assets/542203501_122106919454992913_3914236434073073466_n.jpg",
      overlayColor: alpha('#0a2e0a', 0.85),
      iconColor: "#7fe261"
    },
    {
      title: "Working together",
      description: "We grow by respecting and working together in harmony.",
      icon: <Diversity3Icon sx={{ fontSize: 80 }} />,
      bgImage: "public/assets/542723233_122106111518992913_6057981429094286876_n.jpg",
      overlayColor: alpha('#1a5a1a', 0.85),
      iconColor: "#7fe261"
    }
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'white',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Section Title */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
        </Fade>

        {/* Statistics Grid - 4 items in one row without gaps */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 0,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(10, 46, 10, 0.1)'
          }}
        >
          {statistics.map((stat, index) => (
            <Fade in={isVisible} timeout={800 + (index * 200)} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  flex: 1,
                  minHeight: { xs: '250px', md: '350px' },
                  borderRadius: 0,
                  overflow: 'hidden',
                  borderRight: index < statistics.length - 1 ? 
                    { xs: 'none', md: `1px solid ${alpha('#ffffff', 0.2)}` } : 'none',
                  borderBottom: { xs: index < statistics.length - 1 ? 
                    `1px solid ${alpha('#ffffff', 0.2)}` : 'none', md: 'none' },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: { md: 'scale(1.02)' },
                    zIndex: 2,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                  }
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${stat.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />

                {/* Green Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: stat.overlayColor
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    p: { xs: 3, md: 4 }
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      color:'white',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {stat.icon}
                  </Box>

                  {/* Number - ADDED BACK */}
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 'bold',
                      color: '#7fe261',
                      mb: 1,
                      lineHeight: 1,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    {stat.number}
                  </Typography>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: '600',
                      mb: 1,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {stat.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      lineHeight: 1.4,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: { xs: '0.8rem', md: '0.9rem' }
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </Card>
            </Fade>
          ))}
        </Box>

        {/* Additional Info */}
        <Fade in={isVisible} timeout={1200}>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Trusted by communities and businesses across Africa for sustainable waste management solutions
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default StatisticsGrid;