import { useState } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {
  Dialog,
  Drawer,
  IconButton,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export default function Example() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: 'green',
          color: 'grey.50',
          '&:hover': {
            backgroundColor: 'grey.800',
          },
          textTransform: 'none',
          fontWeight: 'semibold',
          fontSize: '0.875rem',
          px: 2.5,
          py: 1.5,
        }}
      >
        Short Projects
      </Button>

      {isMobile ? (
        // Version mobile - Drawer
        <Drawer
          anchor="right"
          open={open}
          onClose={handleClose}
          sx={{
            '& .MuiDrawer-paper': {
              width: '100vw',
              maxWidth: 400,
            },
          }}
        >
          <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Bouton de fermeture */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 16,
                left: -48,
                color: 'grey.300',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                zIndex: 1300,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Contenu du drawer */}
            <Box sx={{ p: 3, flex: 1, overflow: 'auto' }}>
             <Box sx={{ maxWidth: 300 }}>
      {/* Image */}
          <Box
           component="img"
            src="/assets/14b4b575555fe1658e16d6b858550eb3.jpg" // Remplacez par votre image
           alt="Le Biogaz en Afrique"
            sx={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: 1,
          mb: 2
        }}
      />

      {/* Titre lien */}
      <Typography
        component={RouterLink}
        to="/stproject" // Remplacez par votre lien
        variant="h6"
        sx={{
          fontWeight: '600',
          color: 'primary.main',
          textDecoration: 'none',
          display: 'block',
          lineHeight: 1.3,
          '&:hover': {
            color: 'primary.dark',
            textDecoration: 'underline'
          }
        }}
      >
        Short term projects 
      </Typography>
    </Box>
              <Box sx={{ mt: 3 }}>
                {/* Votre contenu ici */}
              </Box>
            </Box>
          </Box>
        </Drawer>
      ) : (
        // Version desktop - Dialog avec backdrop
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          PaperProps={{
            sx: {
              position: 'fixed',
              right: 0,
              top: 0,
              bottom: 0,
              margin: 0,
              height: '100vh',
              width: '100%',
              maxWidth: 400,
              borderRadius: 0,
              transform: open ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.5s ease-in-out',
            }
          }}
          BackdropProps={{
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              opacity: open ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }
          }}
        >
          <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Bouton de fermeture */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 16,
                left: -48,
                color: 'grey.300',
                '&:hover': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Contenu du panneau */}
            <Box sx={{ p: 3, flex: 1, overflow: 'auto' }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'semibold', mb: 3 }}>
                Panel title
              </Typography>
              <Box sx={{ mt: 3 }}>
                {/* Votre contenu ici */}
              </Box>
            </Box>
          </Box>
        </Dialog>
      )}
    </div>
  );
}
