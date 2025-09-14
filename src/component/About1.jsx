import React from 'react';
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
              color: 'grey.900'
            }}
          >
           We work together to build  a healthier Liberia
          </Typography>
        </Box>

        {/* Bento Grid */}
        <Grid container spacing={2}  sx={{display:'flex', justifyContent:'center'}}>
          {/* Mobile friendly - Large card (spans 2 rows) */}
          <Grid item xs={12} lg={4}>
            <Paper
              elevation={10}
              sx={{
                height: { xs: 'auto', lg: '400px' },
                bgcolor: '#9ec199ff',
                borderRadius: { xs: 4, lg: '2rem 2rem 2rem 2rem' },
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid',
                borderColor: 'grey.100'
              }}
            >
              <CardContent sx={{ p: { xs: 4, sm: 5 }, pb: 1.5 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 1,
                    fontWeight: 500,
                    color: 'grey.900',
                    textAlign: { xs: 'center', lg: 'left' }
                  }}
                >
               <  RecyclingIcon sx={{height:'50px', width:'50px'}}/> Our Mission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    color: 'grey.900',
                    maxWidth: '24rem',
                    textAlign: { xs: 'center', lg: 'left' }
                  }}
                >
                     To create sustainable waste solutions
                     for Liberia by transforming waste through
                     recycling and composting, empowering communities
                     through active engagement, and reducing our carbon
                      footprint while improving the quality of life for 
                      our employees and the communities we serve.
                </Typography>
              </CardContent>
              
            </Paper>
          </Grid>
          {/* Powerful APIs - Large card (spans 2 rows) */}
          <Grid item xs={12} lg={4}>
            <Paper
              elevation={10}
              sx={{
                height: { xs: 'auto', lg: '400px' },
                bgcolor: '#a6ccf0ff',
                borderRadius: { xs: 4, lg: '2rem 2rem 2rem 2rem' },
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid',
                borderColor: 'grey.100'
              }}
            >
              <CardContent sx={{ p: { xs: 4, sm: 5 }, pb: 1.5 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 1,
                    fontWeight: 500,
                    color: 'grey.900',
                    textAlign: { xs: 'center', lg: 'left' }
                  }}
                >
                 <GroupWorkIcon sx={{height:'50px', width:'50px'}}/>  Our Vission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    color: 'grey.900',
                    maxWidth: '24rem',
                    textAlign: { xs: 'center', lg: 'left' }
                  }}
                >
                  To be the leading supplier of nutrient-rich organic fertilizers for agriculture,
                   clean biogas for energy, and high-value recycled materials, 
                  driving sustainability and innovation in Liberia and beyond.
                </Typography>
              </CardContent>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}