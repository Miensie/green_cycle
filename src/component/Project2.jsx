import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import{ Link as RouterLink} from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '400px',
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'green',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(45deg, #4CAF50 0%, #8BC34A 100%)',
  },
  [theme.breakpoints.down('md')]: {
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '300px',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: '#9fe036ff',
  color: 'white',
  padding: '20px 40px',
  borderRadius: '10px',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#2f332fff',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(76,175,80,0.3)',
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    padding: '16px 32px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 24px',
    fontSize: '0.9rem',
  }
}));

const CatalogueSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
       <Box sx={{
        display:'flex',
        flexDirection:{ xs: 'column', md: 'row' },
        gap:{ xs: '30px', md: '50px' },
        width: '100%'
       }}>
        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
          <StyledCard>
            <CardContent sx={{ 
              textAlign: 'center', 
              p: 4,
              display:'flex',
              flexDirection:{ xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap:{ xs: '30px', md: '200px' },
              width: '100%',
              height: '100%'
            }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Long term projects
              </Typography>
              <StyledButton 
              variant="contained"
              component={RouterLink}
              to="/ltprojects"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '200px', sm: 'none' }
              }}>
                Discover
              </StyledButton>
            </CardContent>
            
          </StyledCard>
        </Grid>
     
        <Grid item xs={12} md={6} sx={{ width: '100%' }}>
          <StyledCard>
            <CardContent sx={{ 
              textAlign: 'center', 
              p: 4,
              display:'flex',
              flexDirection:{ xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap:{ xs: '30px', md: '200px' },
              width: '100%',
              height: '100%'
            }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Short term projects
              </Typography>
              <StyledButton 
              variant="contained"
              component={RouterLink}
              to="/stproject"
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '200px', sm: 'none' }
              }}>
                Discover
              </StyledButton>
            </CardContent>
          </StyledCard>
        </Grid>
       </Box> 
      </Grid>
    </Container>
  );
};

export default CatalogueSection;