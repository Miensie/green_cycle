import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Chip
} from '@mui/material';
import {
  Description as DescriptionIcon
} from '@mui/icons-material';

const ApplicantInformation = () => {
  const attachments = [
    {
      name: 'resume_back_end_developer.pdf',
      size: '2.4mb',
      url: '#'
    },
    {
      name: 'coverletter_back_end_developer.pdf',
      size: '4.5mb',
      url: '#'
    }
  ];

  return (
    <Box sx={{ padding:2, bgcolor: 'Background.paper'}}>
      <Box
       sx={{marginBottom:'30px',marginTop:'20px' ,px: { xs: 2, sm: 0 } }}
       align="center">
        <Typography variant="h3" fontWeight="medium" color="text.primary"
        sx={{fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: '#0d3914ff',
            
              textAlign:'center'}}>
          More Products
        </Typography>
      </Box>

       {/* Application for */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1" variant="h6" fontWeight="medium" color="black">
              We combine innovation and sustainability to reduce waste and protect our planet
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="h1" variant="h6" color="black">
            By reusing and recycling, we create eco-products that serve both people and nature.
            </Typography>
          </Grid>
        </Grid>
      
      <Divider sx={{ mt: 3, borderColor: 'grey.100' }} />
      
      <Box component="dl" sx={{ py: 0 }}>
        {/* Full Name */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1"  variant="h6" fontWeight="medium" color="black">
              Our products are designed to protect the environment while creating sustainable solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="h1" variant="h6" color="black">
              Our vision is simple: less waste, more life
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'grey.100' }} />
        
        {/* Application for */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1" variant="h6" fontWeight="medium" color="black">
              We combine innovation and sustainability to reduce waste and protect our planet
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="h1" variant="h6" color="black">
            By reusing and recycling, we create eco-products that serve both people and nature.
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'grey.100' }} />
        
        {/* Email address */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1" variant="h6" fontWeight="medium" color="black">
             Recycling is not just a process for us it is the foundation of our eco-friendly products.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="h1" variant="h6" color="black">
            We turn challenges of waste into opportunities for sustainable development.
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'grey.100' }} />
        
        {/* Salary expectation */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1" variant="h6" fontWeight="medium" color="black">
              Every item we create reflects our mission to give new life to discarded materials.m
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'grey.100' }} />
        
        {/* About */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1" variant="h6" fontWeight="medium" color="black">
              About Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="h1" variant="h6" color="black">
                We are a startup dedicated to waste reduction, reuse, and recycling. 
                Our mission is to transform waste into valuable products that protect 
                the environment and promote sustainable living. By turning waste into opportunities, 
                we create eco-friendly solutions for a cleaner and greener future
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'grey.100' }} />
        
        {/* Attachments */}
        <Grid container spacing={2} sx={{ py: 3, px: { xs: 2, sm: 0 } }}>
          <Grid item xs={12} sm={3}>
            <Typography component="h1" variant="h6" fontWeight="medium" color="black">
              Attachments
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper variant="outlined" sx={{ borderColor: 'grey.200' }}>
              <List sx={{ py: 0 }}>
                {attachments.map((attachment, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ py: 2 }}>
                      <ListItemIcon sx={{ minWidth: 40, color: 'grey.400' }}>
                        <DescriptionIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                            <Typography variant="body2" fontWeight="medium" noWrap sx={{ maxWidth: 200 }}>
                              {attachment.name}
                            </Typography>
                            <Chip
                              label={attachment.size}
                              size="small"
                              sx={{ bgcolor: 'grey.100', color: 'grey.600', fontSize: '0.75rem' }}
                            />
                          </Box>
                        }
                      />
                      <Link
                        href={attachment.url}
                        variant="body2"
                        color="primary"
                        sx={{ 
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                          ml: 2
                        }}
                      >
                        Download
                      </Link>
                    </ListItem>
                    {index < attachments.length - 1 && (
                      <Divider sx={{ borderColor: 'grey.100' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

       {/* Background Effects */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '1200px',
                top: 0,
                left: 0,
                zIndex: 0,
                overflow: 'hidden',
                pointerEvents: 'none'
              }}
            >
              {/* Top Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '600px', sm: '1200px' },
                  height: { xs: '600px', sm: '600px' },
                  top: { xs: '-160px', sm: '-320px' },
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(13, 14, 13, 0.3) 0%, rgba(242, 251, 252, 0.3) 100%)',
                  filter: 'blur(80px)',
                  opacity: 0.6
                }}
              />
              
              {/* Bottom Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '600px', sm: '1200px' },
                  height: { xs: '600px', sm: '600px' },
                  bottom: { xs: '-120px', sm: '-300px' },
                  right: { xs: '-100px', sm: '-360px' },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(37, 152, 66, 0.3) 0%, rgba(40, 40, 44, 0.3) 100%)',
                  filter: 'blur(80px)',
                  opacity: 0.6
                }}
              />
            </Box>
    </Box>
  );
};

export default ApplicantInformation;