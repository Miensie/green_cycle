import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  IconButton,
  Container,
  useTheme
} from '@mui/material';
import { Close as CloseIcon, ArrowForward } from '@mui/icons-material';

export default function AnnouncementBanner() {
  const theme = useTheme();
  
  const backgroundShape = {
    position: 'absolute',
    top: '50%',
    zIndex: -1,
    transform: 'translateY(-50%)',
    width: '36rem',
    height: '20rem',
    background: 'linear-gradient(to right, #0a6528ff, #066018ff)',
    opacity: 0.3,
    
  };

  return (
    <Box
      sx={{
        position: 'relative',
        isolation: 'isolate',
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[50],
        px: { xs: 2, sm: 3.5 },
        py: 1.25,
        '&::before': {
          content: '""',
          flex: 1,
          display: { xs: 'none', sm: 'block' }
        }
      }}
    >
      {/* Forme de fond gauche */}
      <Box
        sx={{
          ...backgroundShape,
          left: 'max(-7rem, calc(50% - 52rem))'
        }}
        aria-hidden="true"
      />
      
      {/* Forme de fond droite */}
      <Box
        sx={{
          ...backgroundShape,
          left: 'max(45rem, calc(50% + 8rem))'
        }}
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.grey[900],
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1
          }}
        >
          <Typography component="span" sx={{ fontWeight: 600 }}>
            Call Us:
          </Typography>
          <Box
            component="svg"
            viewBox="0 0 2 2"
            aria-hidden="true"
            sx={{
              width: 4,
              height: 4,
              fill: 'currentColor',
              mx: 1
            }}
          >
            <circle r={1} cx={1} cy={1} />
          </Box>
          +225 0151504005
        </Typography>
        
        <Button
          variant="contained"
          component='href'
          to="/greencycle.liberia@gmail.com"
          size="small"
          endIcon={<ArrowForward />}
          sx={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '9999px',
            px: 2,
            py: 0.5,
            textTransform: 'none',
            fontSize: '0.875rem',
            fontWeight: 600,
            boxShadow: theme.shadows[1],
            '&:hover': {
              backgroundColor: theme.palette.grey[700]
            },
            '&:focus-visible': {
              outline: `2px solid ${theme.palette.grey[900]}`,
              outlineOffset: 2
            }
          }}
        >
          greencycle.liberia@gmail.com
        </Button>
      </Box>

      {/* Bouton de fermeture */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          size="small"
          aria-label="Dismiss"
          sx={{
            color: theme.palette.grey[900],
            '&:focus-visible': {
              outlineOffset: -4
            }
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}