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
      line1: "Broad Street, Centre de Monrovia",
      line2: "1000 Monrovia, Liberia"
    },
    phones: [
      "+231 77 123 456",
      "+231 88 654 321"
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
        marginLeft:'100px'
      }}
    >
      <CardContent sx={{ pb: 2 }}>
        <Avatar
          sx={{
            bgcolor: avatarColor,
            width: 80,
            height: 80,
            mx: 'auto',
            mb: 3
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
            fontSize: '1rem'
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
                  fontSize: '0.9rem',
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
              sx={{ fontSize: '0.9rem' }}
            >
              {content}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography
        variant="h2"
            component="h1"
            align='center'
            sx={{
              color: 'white',
              fontWeight: 600,
              color:'green',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem' },
              letterSpacing: '-0.025em',
            }}>
            Contact Us
        </Typography>
        {/* Section des informations de contact */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <ContactCard
              icon={<AddLocationAltIcon sx={{ fontSize: 40, color: 'white' }} />}
              title="ADDRESS"
              content={[contactData.address.line1, contactData.address.line2]}
              avatarColor="#8B4513"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ContactCard
              icon={<LocalPhoneIcon sx={{ fontSize: 40, color: 'white' }} />}
              title="PHONE"
              content={contactData.phones}
              avatarColor="#333333"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ContactCard
              icon={<MailOutlineIcon sx={{ fontSize: 40, color: 'white' }} />}
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
            height: 400,
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
              top: 20,
              left: 20,
              p: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(5px)',
              borderRadius: 2,
              minWidth: 280,
              maxWidth: 320
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 1,
                color: 'green'
              }}
            >
              GreenCycle Liberia Inc.
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 1 }}
            >
              Broad Street, Centre de Monrovia
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              mb: 2 
            }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#4CAF50'
                }}
              />
              <Typography variant="caption" color="text.secondary">
                4,5 ★★★★☆ 142 avis
              </Typography>
            </Box>
            <Button
              variant="text"
              size="small"
              sx={{
                color: '#1976d2',
                textTransform: 'none',
                fontSize: '0.8rem',
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