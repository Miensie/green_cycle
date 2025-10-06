import React from 'react';
import {Link as RouterLink} from 'react-router-dom'
import Icon from '../component/Icon.jsx';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button,
  Paper,
  Slide
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
const Apropos = () => {
  return (
    <Box sx={{ 
      bgcolor: '#f3f3f3', // Fond blanc beige
      py: 8, 
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{display:'flex'}}>
        <Box sx={{display:'flex',
          flexDirection:{xs:'column',md:'row'}
          }}>    
          <Grid item xs={12} md={6} sx={{width:'50%'}}>
            <Typography 
               variant="h3"
                 component="h1"
                 sx={{
                  fontWeight:'bold',
                   fontStyle: 'italic',
                   fontSize: { xs: '1.1rem', md: '3rem' },
                   color:'green',
                   
                 }}
            >
            
                Who We Are ?
            </Typography>
          
            <Box sx={{ mb: 4 }}>
              <Typography 
             variant='body1'
             color='text.secondary'
                sx={{
                   fontSize: { xs: '0.9rem', md: '1.5rem' },
                   color:'black',
                   padding:'15px',
                   flexGrow: '1'
                }}>
                  We are GreenCycle Liberia Inc.  a waste management company
                   dedicated to promoting sustainability through recycling, 
                   reuse, and waste reduction. 
                   Our vocation is to transform waste
                   into valuable resources by creating eco-friendly products and 
                   innovative solutions that protect the environment while supporting 
                   local communities. By turning challenges of waste into opportunities,
                   we contribute to a cleaner, greener, and more sustainable Liberia.
              </Typography>

              <Box>

              </Box>
              
            <Button 
              variant="contained" 
              startIcon={<ArrowForwardIcon />}
              component={RouterLink}
              to="/solutions"
              sx={{ 
                bgcolor: '#0b8817ff',
                color: 'white',
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: '#aceab0ff',
                }
              }}
            >
              Read more
            </Button>
           </Box>
          </Grid>
       
          
          <Grid item xs={12} md={6} sx={{width:'50%'}}>
            <Box sx={{ 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                bgcolor: '#0b8817ff',
                opacity: 0.2,
                zIndex: 0
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                bgcolor: '#5bdf9dff',
                opacity: 0.15,
                zIndex: 0
              }
            }}>
              <Paper elevation={3} sx={{ 
                borderRadius: '50%', 
                overflow: 'hidden',
                width:'500px',
                position: 'relative',
                zIndex: 1
              }}>
                <img 
                  src="assets/545033648_122108511362992913_5975337630202281550_n.jpg" 
                  alt="greenc" 
                  style={{ 
                    width: '500px', 
                    height: '500px',
                    display: 'block',
                    borderRadius: '50%'
                  }} 
                />
              </Paper>
            </Box>
          </Grid>
        </Box>
        </Grid>
        <Box>
        </Box>
        <Box sx={{marginTop:'150px'}}>
          <Icon/>
        </Box>
      </Container>
    </Box>
  );
};

export default Apropos;