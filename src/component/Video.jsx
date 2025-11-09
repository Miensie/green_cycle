import React, { useState, useRef } from 'react';
import { Box, IconButton, Typography, keyframes } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const VideoPresentation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Animation de zoom pulsant
  const zoomPulse = keyframes`
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
    }
    50% {
      transform: scale(1.15);
      box-shadow: 0 0 0 20px rgba(76, 175, 80, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    }
  `;

  // Animation de clignotement
  const blink = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  `;

  // Animation de lueur
  const glow = keyframes`
    0% {
      filter: drop-shadow(0 0 5px rgba(76, 175, 80, 0.5));
    }
    50% {
      filter: drop-shadow(0 0 20px rgba(76, 175, 80, 0.8));
    }
    100% {
      filter: drop-shadow(0 0 5px rgba(76, 175, 80, 0.5));
    }
  `;

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      borderRadius: { xs: 1, md: 2 },
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      // Cadre responsive qui s'adapte à l'écran mobile
      height: {
        xs: '70vh', // 70% de la hauteur de l'écran sur mobile
        sm: '500px',
        md: '600px'
      },
      maxHeight: {
        xs: '500px', // Limite maximum sur mobile
        md: 'none'
      }
    }}>
      {/* Conteneur vidéo responsive */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <video
          ref={videoRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
            borderRadius: 'inherit'
          }}
          poster=""
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/assets/WhatsApp Vidéo 2025-10-17 à 15.28.32_5e790baf.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        {!isPlaying && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(76,175,80,0.2) 100%)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(76,175,80,0.3) 100%)',
              },
              // Adaptation pour mobile
              padding: { xs: 2, md: 4 }
            }}
            onClick={togglePlay}
          >
            {/* Bouton Play avec effets combinés */}
            <IconButton 
              sx={{ 
                backgroundColor: '#4caf50',
                animation: `${zoomPulse} 2s ease-in-out infinite, ${glow} 3s ease-in-out infinite`,
                '&:hover': {
                  backgroundColor: '#388e3c',
                  animation: `${zoomPulse} 1s ease-in-out infinite, ${glow} 1.5s ease-in-out infinite`,
                  transform: 'scale(1.1)'
                },
                width: { 
                  xs: 60,   // Plus petit sur mobile
                  sm: 80,   // Tablet
                  md: 100   // Desktop
                },
                height: { 
                  xs: 60, 
                  sm: 80, 
                  md: 100 
                },
                mb: { xs: 2, md: 3 }
              }}
            >
              <PlayArrowIcon sx={{ 
                fontSize: { 
                  xs: 30,   // Plus petit sur mobile
                  sm: 40,   // Tablet
                  md: 50    // Desktop
                }, 
                color: 'white',
                animation: `${blink} 2s ease-in-out infinite`
              }} />
            </IconButton>

            {/* Texte avec effet d'apparition - Adapté mobile */}
            <Typography variant="h2" sx={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: { 
                xs: '1.5rem',  // Plus petit sur mobile
                sm: '2.5rem',  // Tablet
                md: '3.5rem'   // Desktop
              },
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              animation: `${blink} 3s ease-in-out infinite`,
              mb: { xs: 0.5, md: 1 },
              lineHeight: { xs: 1.2, md: 1.3 }
            }}>
              Sustainability
            </Typography>
            <Typography variant="h4" sx={{
              textTransform: 'uppercase',
              fontWeight: '300',
              textAlign: 'center',
              fontSize: { 
                xs: '1rem',    // Plus petit sur mobile
                sm: '1.5rem',  // Tablet
                md: '2rem'     // Desktop
              },
              textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
              animation: `${blink} 3s ease-in-out infinite`,
              animationDelay: '0.5s',
              lineHeight: { xs: 1.2, md: 1.3 }
            }}>
              at the Core
            </Typography>

            {/* Texte d'appel à l'action - Position adaptative */}
            <Typography variant="body1" sx={{
              position: 'absolute',
              bottom: { xs: 15, md: 30 }, // Plus proche du bord sur mobile
              textAlign: 'center',
              fontSize: { 
                xs: '0.8rem',   // Plus petit sur mobile
                md: '1.1rem'    // Desktop
              },
              opacity: 0.9,
              animation: `${blink} 2s ease-in-out infinite`,
              fontStyle: 'italic',
              width: '90%', // Prend moins de largeur sur mobile
              mx: 'auto'
            }}>
              Click to discover our sustainable journey
            </Typography>
          </Box>
        )}
        
        {isPlaying && (
          <IconButton 
            sx={{ 
              position: 'absolute',
              bottom: { xs: 10, md: 20 }, // Plus proche du bord sur mobile
              right: { xs: 10, md: 20 },  // Plus proche du bord sur mobile
              backgroundColor: 'rgba(76, 175, 80, 0.8)',
              color: 'white',
              animation: `${glow} 2s ease-in-out infinite`,
              '&:hover': {
                backgroundColor: 'rgba(76, 175, 80, 1)',
                transform: 'scale(1.1)'
              },
              width: { 
                xs: 40,   // Plus petit sur mobile
                sm: 50,   // Tablet
                md: 60    // Desktop
              },
              height: { 
                xs: 40, 
                sm: 50, 
                md: 60 
              }
            }}
            onClick={togglePlay}
          >
            <PauseIcon sx={{ 
              fontSize: { 
                xs: 20,   // Plus petit sur mobile
                sm: 25,   // Tablet
                md: 30    // Desktop
              } 
            }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default VideoPresentation;