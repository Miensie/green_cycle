import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Paper,
  Button
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const ContactInfo = () => {
  const contactData = {
    address: {
      line1: " 72nd Boulevard, Roland Duo Estate",
      line2: "Paynesville, Montserrado County, Liberia"
    },
    phones: [
      "(+231) 88 83 78 250",
      "(+231) 77 20 63 061",
      "(+221) 77 11 48 115",
      "(+225) 75 15 03 39",
    ],
    emails: [
      "greencycleliberia@gmail.com",
      "greencycleliberia@gmail.com"
    ]
  };

  const ContactCard = ({ icon, title, content, avatarColor }) => (
    <Card 
      elevation={0} 
      sx={{ 
        textAlign: 'center',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display:'flex',
        marginLeft: { xs: '0px', sm: '20px', md: '50px', lg: '100px' }
      }}
    >
      <CardContent sx={{ pb: 2, width: '100%' }}>
        <Avatar
          sx={{
            bgcolor: avatarColor,
            width: { xs: 60, sm: 70, md: 80 },
            height: { xs: 60, sm: 70, md: 80 },
            mx: 'auto',
            mb: { xs: 2, md: 3 }
          }}
        >
          {icon}
        </Avatar>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            fontWeight: 'bold',
            mb: 2,
            color: '#333',
            letterSpacing: '0.1em',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {title}
        </Typography>
        <Box>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <Typography 
                key={index}
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  mb: 0.5,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  lineHeight: 1.4
                }}
              >
                {item}
              </Typography>
            ))
          ) : (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
            >
              {content}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 }, 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh' 
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align='center'
          sx={{
            color: 'white',
            fontWeight: 600,
            color:'green',
            mb: { xs: 3, md: 2 },
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
            letterSpacing: '-0.025em',
          }}>
          Contact Us
        </Typography>
        
        {/* Section des informations de contact */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard
              icon={<AddLocationAltIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: 'white' }} />}
              title="ADDRESS"
              content={[contactData.address.line1, contactData.address.line2]}
              avatarColor="#8B4513"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <ContactCard
              icon={<LocalPhoneIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: 'white' }} />}
              title="PHONE"
              content={contactData.phones}
              avatarColor="#333333"
            />
          </Grid>
          
          <Grid item xs={12} sm={12} md={4} sx={{ 
            display: 'flex', 
            justifyContent: { xs: 'center', sm: 'flex-start', md: 'center' } 
          }}>
            <ContactCard
              icon={<MailOutlineIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: 'white' }} />}
              title="E-MAIL"
              content={contactData.emails}
              avatarColor="#333333"
            />
          </Grid>
        </Grid>

        {/* Section de la carte */}
        <Paper 
          elevation={3}
          sx={{ 
            height: { xs: 300, sm: 350, md: 400 },
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Intégration Google Maps pour Monrovia, Liberia */}
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63180.47891!2d-10.8037!3d6.3014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09867c04b7dfb7%3A0x8e7c8b10d5a5c1e2!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
            sx={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: 2
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Monrovia, Liberia"
          />
          
          {/* Overlay avec informations de l'entreprise */}
          <Paper
            elevation={2}
            sx={{
              position: 'absolute',
              top: { xs: 10, sm: 15, md: 20 },
              left: { xs: 10, sm: 15, md: 20 },
              right: { xs: 10, sm: 'auto' },
              p: { xs: 1.5, sm: 2 },
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(5px)',
              borderRadius: 2,
              minWidth: { xs: 'auto', sm: 250 },
              maxWidth: { xs: 'none', sm: 280, md: 320 }
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 1,
                color: 'green',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
              }}
            >
              GreenCycle Liberia Inc.
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                mb: 1,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
             Paynesville, Montserrado County, Liberia
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              mb: { xs: 1, sm: 2 } 
            }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#4CAF50'
                }}
              />
              
            </Box>
            <Button
              variant="text"
              size="small"
              sx={{
                color: '#1976d2',
                textTransform: 'none',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                p: 0
              }}
            >
              Agrandir le plan
            </Button>
          </Paper>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactInfo;