import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton ,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn, 
  Email, 
  Phone 
} from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Footer = () => {
  return (
    <Box 
      sx={{ 
      background: 'linear-gradient(135deg, #98cdbcff 25%, #e2eae3ff 20%)', 
        color: 'black', 
        py: { xs: 4, md: 6 },
        width:'100%'
      }}
    >
      <Container maxWidth="lg"
      sx={{
        height: { xs: 'auto', md: '600px' }
      }}>
        <Grid container spacing={4}>
          {/* Colonne d'informations de l'entreprise */}
          <Grid item xs={12} md={4}>
           <Box sx={{ display:'flex', 
            flexDirection:{ xs:'column',md:'row'}}}>
            <Avatar
            alt='Logo' 
            src="src/assets/Capture d'écran 2025-09-17 091439.png"
            sx={{ height: { xs: '60px', md: '80px' }, width: { xs: '60px', md: '80px' } }}/>
            <Typography 
            variant='h4'
            component='h1'
            sx={{fontWeight:'bold', color:'green',fontStyle:'italic'}}>
              GreenCycle <br/>
              Liberia INC.
            </Typography>
            </Box>

            <Typography variant="body2" sx={{ mb: 2, mt: 1 }}>
               Integrate Waste Recovery center of Monrovia.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="green" href="https://www.facebook.com/profile.php?id=61579787403771" size="small">
                <Facebook fontSize={window.innerWidth < 600 ? "small" : "medium"} />
              </IconButton>
              <IconButton color="green" href="#" size="small">
                <LinkedIn fontSize={window.innerWidth < 600 ? "small" : "medium"} />
              </IconButton>
            </Box>
          </Grid>

          {/* Colonne de liens rapides */}

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: '40px', md: '200px' }, 
        mt: { xs: 2, md: 4 },
        width: '100%'
      }}>
         <Box sx={{ display: 'flex'}}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom color='#41b156ff' fontSize={{ xs: '1.1rem', md: '1.25rem' }}>
              Company.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit" underline="hover"  sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
               <ChevronRightIcon sx={{color:'green'}}/> Home
              </Link>
              <Link href="#" color="inherit" underline="hover"   sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                <ChevronRightIcon/>Products
              </Link>
              <Link href="#" color="inherit" underline="hover"   sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                <ChevronRightIcon/>About Us
              </Link>
              <Link href="#" color="inherit" underline="hover"   sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                <ChevronRightIcon/>Services
              </Link>
              <Link href="#" color="inherit" underline="hover"   sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                <ChevronRightIcon/>Contact Us
              </Link>
            </Box>
          </Grid>
         </Box>  

          <Box sx={{ display: 'flex'}}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom color='#41b156ff' fontSize={{ xs: '1.1rem', md: '1.25rem' }}>
              Solution.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                <ChevronRightIcon sx={{color:'green'}}/>Recycled Plastic Products.
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                  <ChevronRightIcon sx={{color:'green'}}/>Waste Collection & Sorting.
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                <ChevronRightIcon sx={{color:'green'}}/>Biogas & Composting Solutions.
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                <ChevronRightIcon sx={{color:'green'}}/>Plastic Recycling & Upcycling.
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                <ChevronRightIcon sx={{color:'green'}}/>Training & Capacity Building.
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                <ChevronRightIcon sx={{color:'green'}}/>Community Awareness & Outreach.
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                <ChevronRightIcon sx={{color:'green'}}/>Partnership & Advisory Support.
              </Link>
            </Box>
          </Grid>
          </Box>  

          {/* Colonne de contacts */}
          <Box sx={{ display:'flex'}}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom color='#10d64bff' fontSize={{ xs: '1.1rem', md: '1.25rem' }}>
              Contact us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 2, fontSize: { xs: '1rem', md: '1.25rem' } }} />
              <Typography variant="body2" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                greencycle.liberia@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 2, fontSize: { xs: '1rem', md: '1.25rem' } }} />
              <Typography variant="body2" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                +228 90 00 00 00
              </Typography>
            </Box>
          </Grid>
          </Box> 
        </Box>
        </Grid>
        

        {/* Ligne de copyright */}
        <Box 
          sx={{ 
            mt: { xs: 4, md: 10 }, 
            pt: 2, 
            borderTop: '1px solid #2e2a26ff', 
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" fontSize={{ xs: '0.8rem', md: '0.9rem', fontStyle:'italic' }}>
            © {new Date().getFullYear()} 2025 GreenCycle Liberia, INC. Powered by POLYCREATION.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;