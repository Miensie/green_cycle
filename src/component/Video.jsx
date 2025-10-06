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
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
    }}>
      <video
        ref={videoRef}
        width="100%"
        height="600px"
        style={{
          display: 'block',
          objectFit: 'cover',
          minHeight: '600px',
          borderRadius: 'inherit'
        }}
        poster=""
        onEnded={() => setIsPlaying(false)}
      >
        <source src="assets/WhatsApp Vidéo 2025-09-25 à 14.28.35_ebfdf6c0.mp4" type="video/mp4" />
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
            }
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
              width: { xs: 70, md: 100 },
              height: { xs: 70, md: 100 },
              mb: 3
            }}
          >
            <PlayArrowIcon sx={{ 
              fontSize: { xs: 35, md: 50 }, 
              color: 'white',
              animation: `${blink} 2s ease-in-out infinite`
            }} />
          </IconButton>

          {/* Texte avec effet d'apparition */}
          <Typography variant="h2" sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '3.5rem' },
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            animation: `${blink} 3s ease-in-out infinite`,
            mb: 1
          }}>
            Sustainability
          </Typography>
          <Typography variant="h4" sx={{
            textTransform: 'uppercase',
            fontWeight: '300',
            textAlign: 'center',
            fontSize: { xs: '1.2rem', md: '2rem' },
            textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
            animation: `${blink} 3s ease-in-out infinite`,
            animationDelay: '0.5s'
          }}>
            at the Core
          </Typography>

          {/* Texte d'appel à l'action */}
          <Typography variant="body1" sx={{
            position: 'absolute',
            bottom: 30,
            textAlign: 'center',
            fontSize: { xs: '0.9rem', md: '1.1rem' },
            opacity: 0.9,
            animation: `${blink} 2s ease-in-out infinite`,
            fontStyle: 'italic'
          }}>
            Click to discover our sustainable journey
          </Typography>
        </Box>
      )}
      
      {isPlaying && (
        <IconButton 
          sx={{ 
            position: 'absolute',
            bottom: 20,
            right: 20,
            backgroundColor: 'rgba(76, 175, 80, 0.8)',
            color: 'white',
            animation: `${glow} 2s ease-in-out infinite`,
            '&:hover': {
              backgroundColor: 'rgba(76, 175, 80, 1)',
              transform: 'scale(1.1)'
            },
            width: { xs: 50, md: 60 },
            height: { xs: 50, md: 60 }
          }}
          onClick={togglePlay}
        >
          <PauseIcon sx={{ fontSize: { xs: 25, md: 30 } }} />
        </IconButton>
      )}
    </Box>
  );
};

export default VideoPresentation;