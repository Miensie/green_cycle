import React, { useState, useRef } from 'react';
import { Box, IconButton, Paper, Typography } from '@mui/material';
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

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        width="100%"
        height="500px"
        style={{
          display: 'block',
          objectFit: 'cover',
          minHeight: '500px'
        }}
        poster="src/assets/WhatsApp Image 2025-08-26 à 12.35.58_62444837.jpg" // Optionnel: image de prévisualisation
        onEnded={() => setIsPlaying(false)}
      >
        <source src="src\assets\WhatsApp Vidéo 2025-09-05 à 04.19.22_61beed17.mp4" type="video/mp4" />
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
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={togglePlay}
        >
          <IconButton 
            sx={{ 
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              width: 80,
              height: 80
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 40, color: 'white' }} />
          </IconButton>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Discover our activity.
          </Typography>
        </Box>
      )}
      
      {isPlaying && (
        <IconButton 
          sx={{ 
            position: 'absolute',
            bottom: 16,
            right: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }
          }}
          onClick={togglePlay}
        >
          <PauseIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default VideoPresentation;