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
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box 
      sx={{ 
      background: '#1e201e', 
        color: 'black', 
        py: { xs: 4, md: 6 },
        width:'100%'
      }}
    >
      <Container maxWidth="lg"
      sx={{
        height: { xs: 'auto', md: '700px' }
      }}>
        <Grid container spacing={4}>
          {/* Colonne d'informations de l'entreprise */}
          <Grid item xs={12} md={4}>
           <Box sx={{ display:'flex', 
            flexDirection:{ xs:'column',md:'row'}}}>
            <Avatar
            alt='Logo' 
            src="/assets/Capture d'écran 2025-09-17 091439.png"
            sx={{ height: { xs: '30px', md: '60px' }, width: { xs: '30px', md: '60px' } }}/>
            <Typography 
            variant='h4'
            component='h1'
            sx={{fontWeight:'bold', color:'#aee38aff',fontStyle:'italic'}}>
              GreenCycle <br/>
              Liberia INC.
            </Typography>
            </Box>
           <Box sx={{display:'flex',width:'50%'}}>
            <Typography variant="p" sx={{ mb: 2, mt: 1 ,fontWeight:'bold', color:'background.paper',fontSize: { xs: '0.9rem', md: '1rem' }}}>
                  GreenCycle Liberia is a flagship initiative dedicated to transforming Monrovia's 
                  solid waste challenges into sustainable economic opportunities. 
            </Typography>
          </Box>  
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton  href="https://www.facebook.com/profile.php?id=61579787403771" size="small"  >
                <Facebook fontSize={window.innerWidth < 600 ? "small" : "medium"} sx={{color:'#ace78fff'}}/>
              </IconButton>
              <IconButton  href="#" size="small" color='#ace78fff'> 
                <LinkedIn fontSize={window.innerWidth < 600 ? "small" : "medium"} sx={{color:'#ace78fff'}} />
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
            <Typography variant="h4" gutterBottom color='#adef78ff' fontSize={{ xs: '1.1rem', md: '1.25rem' }}
            sx={{fontWeight:'bold', fontStyle:'italic'}}>
              Company.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="background.paper" underline="hover"  sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' },fontWeight:'bold' }}>
               <ChevronRightIcon /> Home
              </Link>
              <Link href="/activity" color="background.paper" underline="hover"   sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' }, fontWeight:'bold' }}>
                <ChevronRightIcon/>Products
              </Link>
              <Link href="/about" color="background.paper" underline="hover"   sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon/>About Us
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover"   sx={{ mb: 1, fontSize: { xs: '0.9rem', md: '1.1rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon/>Services
              </Link>
              <Link href="/soustainbility" color="background.paper" underline="hover"   sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon/>Sustainability
              </Link>
               <Link href="/action" color="background.paper" underline="hover"   sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' },fontWeight:'bold' }}>
                <ChevronRightIcon/>NewProject
              </Link>
               <Link href="/contact" color="background.paper" underline="hover"   sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon/>Contact Us
              </Link>
            </Box>
          </Grid>
         </Box>  

          <Box sx={{ display: 'flex'}}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom color='#b1e886ff' fontSize={{ xs: '1.1rem', md: '1.25rem' }}
            sx={{fontWeight:'bold', fontStyle:'italic'}}>
              Services.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon sx={{fontWeight:'bold'}}/>Recycled Plastic Products.
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' },fontWeight:'bold' }}>
                  <ChevronRightIcon sx={{fontWeight:'bold'}}/>Waste Collection & Sorting.
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' },fontWeight:'bold' }}>
                <ChevronRightIcon sx={{fontWeight:'bold'}}/>Biogas & Composting Solutions.
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' },fontWeight:'bold' }}>
                <ChevronRightIcon sx={{fontWeight:'bold'}}/>Plastic Recycling & Upcycling.
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' },fontWeight:'bold' }}>
                <ChevronRightIcon sx={{fontWeight:'bold'}}/>Training & Capacity Building.
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ mb: 1, fontSize: { xs: '0.8rem', md: '0.9rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon sx={{fontWeight:'bold'}}/>Community Awareness & Outreach.
              </Link>
              <Link href="/solutions" color="background.paper" underline="hover" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } ,fontWeight:'bold'}}>
                <ChevronRightIcon sx={{fontWeight:'bold'}}/>Partnership & Advisory Support.
              </Link>
            </Box>
          </Grid>
          </Box>  

          {/* Colonne de contacts */}
          <Box sx={{ display:'flex'}}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom color='#ace785ff' fontSize={{ xs: '1.1rem', md: '1.25rem' }} 
            sx={{
              fontWeight:'bold',
              fontStyle: 'italic'
            }}>
              Contact us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 2, fontSize: { xs: '1rem', md: '1.25rem' },color:'#beec9fff' }} />
              <Typography variant="h5"  color="background.paper" fontSize={{ xs: '0.8rem', md: '0.9rem' }}
              sx={{fontWeight:'bold'
                   
              }}>
                greencycle.liberia@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column'}}>
              <Box sx={{display:'flex',flexDirection:'row'}}>
                 <Phone sx={{ mr: 2,color:'#beec9fff', fontSize: { xs: '1rem', md: '1.5rem' } }} />
                 <Typography variant="h5" color="background.paper" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                   (+231)888378250 
                 </Typography>
              </Box> 
               <Box sx={{display:'flex',flexDirection:'row'}}>
                 <Phone sx={{ mr: 2, color:'#beec9fff', fontSize: { xs: '1rem', md: '1.5rem' } }} />
                 <Typography variant="h5"  color="background.paper" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                  (+231)772063061
                 </Typography>
              </Box> 
               <Box sx={{display:'flex',flexDirection:'row'}}>
                 <Phone sx={{ mr: 2, color:'#beec9fff', fontSize: { xs: '1rem', md: '1.5rem' } }} />
                 <Typography variant="h5"  color="background.paper" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                     (+221)771148115 
                 </Typography>
               </Box> 
               <Box sx={{display:'flex',flexDirection:'row'}}>
                 <Phone sx={{ mr: 2, color:'#beec9fff', fontSize: { xs: '1rem', md: '1.5rem' } }} />
                 <Typography variant="h5" color="background.paper" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                      (+225)75150339
                 </Typography>
               </Box> 
                <Box sx={{display:'flex',flexDirection:'row'}}>
                 <LocationOnIcon sx={{ mr: 2, color:'#beec9fff', fontSize: { xs: '1rem', md: '1.5rem' } }} />
                 <Typography variant="h5" color="background.paper" fontSize={{ xs: '0.8rem', md: '0.9rem' }}>
                      72nd Boulevard,Monrovia,Liberia 
                 </Typography>
               </Box> 
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
          <Typography variant="body2" fontSize={{ xs: '0.8rem', md: '0.8rem', fontStyle:'italic' }} 
           sx={{ color:'#c1ef93ff', fontWeight:'bold'}}>
            © {new Date().getFullYear()}  GreenCycle Liberia, INC. Powered by POLYCREATION.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;