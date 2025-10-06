import React from 'react';
import Eco from '../component/Eco.jsx'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import RecyclingIcon from '@mui/icons-material/Recycling';

export default function BentoExample() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ bgcolor: 'grey.50', py: { xs: 12, sm: 16 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 8 } }}>
          
          <Typography
            variant="h2"
            sx={{
              mt: 1,
              maxWidth: '32rem',
              mx: 'auto',
              fontWeight: 600,
              fontSize: { xs: '2.25rem', sm: '3rem' },
              lineHeight: 1.1,
              color: 'green'
            }}
          >
           We work together to build  a healthier Liberia
          </Typography>
        </Box>

        {/* Bento Grid */}
        <Grid container spacing={2}  sx={{display:'flex', justifyContent:'center'}}>
          {/* Mobile friendly - Large card (spans 2 rows) */}
          <Eco/>
        </Grid>
      </Container>
    </Box>
  );
}