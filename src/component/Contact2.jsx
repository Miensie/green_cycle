import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Paper
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const ContactInfo = () => {
  const contactData = {
    address: {
      line1: "72nd Boulevard, Roland Duo Estate",
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
      
    ]
  };

  const ContactCard = ({ icon, title, content, avatarColor }) => (
    <Card 
      elevation={0} 
      sx={{ 
        textAlign: 'center',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
        minHeight: '300px' // Hauteur minimum pour assurer la visibilité
      }}
    >
      <CardContent sx={{ 
        pb: 2, 
        width: '100%',
        px: { xs: 1, sm: 2, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Avatar
          sx={{
            bgcolor: avatarColor,
            width: { 
              xs: 80,
              sm: 100, 
              md: 120,
              lg: 140
            },
            height: { 
              xs: 80,
              sm: 100,
              md: 120,
              lg: 140
            },
            mx: 'auto',
            mb: { xs: 3, md: 4 }
          }}
        >
          {icon}
        </Avatar>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            fontWeight: 'bold',
            mb: 3,
            color: '#333',
            letterSpacing: '0.1em',
            fontSize: { 
              xs: '1rem',
              sm: '1.1rem',
              md: '1.2rem'
            }
          }}
        >
          {title}
        </Typography>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <Typography 
                key={index}
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  mb: 1,
                  fontSize: { 
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem'
                  },
                  lineHeight: 1.5,
                  textAlign: 'center'
                }}
              >
                {item}
              </Typography>
            ))
          ) : (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontSize: { 
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem'
                },
                lineHeight: 1.5,
                textAlign: 'center'
              }}
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
      py: { xs: 6, sm: 8, md: 10 }, 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Titre */}
        <Typography
          variant="h2"
          component="h1"
          align='center'
          sx={{
            fontWeight: 600,
            color: 'green',
            mb: { xs: 6, md: 8 },
            fontSize: { 
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.5rem'
            },
            letterSpacing: '-0.025em',
          }}
        >
          Contact Us
        </Typography>
        
        {/* Section des informations de contact */}
        <Grid 
          container 
          spacing={{ xs: 4, sm: 3, md: 4 }} 
          sx={{ 
            mb: { xs: 6, md: 8 },
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {/* Adresse */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ContactCard
              icon={<AddLocationAltIcon sx={{ 
                fontSize: { 
                  xs: 40,
                  sm: 45,
                  md: 50,
                  lg: 55 
                }, 
                color: 'white' 
              }} />}
              title="ADDRESS"
              content={[contactData.address.line1, contactData.address.line2]}
              avatarColor="#8B4513"
            />
          </Grid>
          
          {/* Téléphone */}
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ContactCard
              icon={<LocalPhoneIcon sx={{ 
                fontSize: { 
                  xs: 40,
                  sm: 45,
                  md: 50,
                  lg: 55 
                }, 
                color: 'white' 
              }} />}
              title="PHONE"
              content={contactData.phones}
              avatarColor="#333333"
            />
          </Grid>
          
          {/* Email */}
          <Grid item xs={12} sm={8} md={4} sx={{ 
            display: 'flex', 
            justifyContent: 'center'
          }}>
            <ContactCard
              icon={<MailOutlineIcon sx={{ 
                fontSize: { 
                  xs: 40,
                  sm: 45,
                  md: 50,
                  lg: 55 
                }, 
                color: 'white' 
              }} />}
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
            height: { 
              xs: 350,
              sm: 400,
              md: 450,
              lg: 500 
            },
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            mx: 'auto',
            maxWidth: '1200px'
          }}
        >
          {/* Intégration Google Maps */}
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63180.47891!2d-10.8037!3d6.3014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf09867c04b7dfb7%3A0x8e7c8b10d5a5c1e2!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s"
            sx={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Monrovia, Liberia"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactInfo;