import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Box, 
  Typography, 
  TextField, 
  Button,
  Divider,
  Snackbar,
  Alert
} from '@mui/material';
import { useState } from 'react';
import {sendEmail} from '../services/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    countrie: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici vous pouvez ajouter votre logique pour envoyer le formulaire
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      countrie: '',
      message: ''
    });

    try {
      // Créer le contenu de l'email
      const emailSubject = `Nouveau message de contact de ${formData.name} ${formData.company}`;
      const emailContent = `
        Nouveau message de contact:
        ----------------------------
        Nom: ${formData.name}
        ----------------------------
        Email: ${formData.email}
        ----------------------------
        Company/Organization: ${formData.company}
        ----------------------------
        Countries: ${formData.countrie}
        ----------------------------
        Message: ${formData.message}
        ----------------------------
        Veuillez répondre à ce message pour plus de détails.
      `;

      // Adresse email de l'admin (remplacez par votre adresse)
      const ADMIN_EMAIL = 'greencycleliberia@gmail.com'
      
      // Envoyer l'email à l'admin
      const emailResult = await sendEmail({
        to: ADMIN_EMAIL,
        subject: emailSubject,
        text: emailContent,
      });
      
      if (!emailResult.success) {
        throw new Error("Échec de l'envoi de l'email: " + emailResult.error);
      }

      setSuccess("Votre message a été envoyé avec succès ! Veuillez patienter, vous recevrez une réponse dans les plus brefs délais.");
      
      // Réinitialiser le formulaire après soumission réussie
      setFormData({
        name: '',
        email: '',
        company: '',
        countrie: '',
        message: ''
      });
      setActiveStep(0);
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setError("Une erreur s'est produite lors de l'envoi de votre message");
    };
  };
  


  return (
    <Box sx={{ 
      p: { xs: 2, sm: 3, md: 4 },
      backgroundColor: 'background.paper',
      borderRadius: { xs: '8px', sm: '12px', md: '16px' },
      width: { xs: '100%', sm: '90%', md: '800px', lg: '1000px', xl: '1200px' },
      height: { xs: 'auto', md: '600px' },
      mx: 'auto',
      my: { xs: 4, sm: 6, md: 8, lg: 10 },
      minHeight: { xs: '500px', md: '600px' }
    }}>
      {/* Conteneur principal avec flex row */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: 4, sm: 5, md: 6 },
        height: '100%'
      }}>
        
        {/* Section Texte à gauche */}
        <Box sx={{ 
          flex: 1, 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            fontWeight="bold" 
            color='#b1e88dff'
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Sent us a message
          </Typography>
          
          <Typography 
            variant="h6" 
            paragraph
            sx={{ 
              mb: 3,
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
              lineHeight: { xs: 1.5, sm: 1.6 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            GreenCycle Liberia INC. is a flagship 
            initiative dedicated to transforming Liberia's solid waste challenges
            into sustainable economic opportunities. Through recycling, composting, 
            and innovative waste-to-value solutions, we are building a cleaner and 
            more resilient nation while creating green jobs, supporting local farmers 
            with organic fertilizers, and producing clean biogas for energy.
          </Typography>
        </Box>

        {/* Section Formulaire à droite */}
        <Box sx={{ 
          flex: 1, 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 2, sm: 3 }
            }}
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <TextField
              id="filled-basic"
              name="email"
              label="Business email"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <TextField
             id="filled-basic"
              name="company"
              label="Company/organization and job title"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.company}
              onChange={handleChange}
              required
            />
             <TextField
              id="filled-basic"
              name="countrie"
              label="Countries"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.countrie}
              onChange={handleChange}
              required
            />
            <TextField
              name="message"
              label="Message"
              multiline
              rows={ { xs: 3, sm: 4 } }
              placeholder="Enter your message ..."
              variant="outlined"
              fullWidth
              size="small"
              value={formData.message}
              onChange={handleChange}
              required
            />
            
            <Button 
              type="submit"
              variant="contained" 
              size="large" 
              sx={{ 
                mt: { xs: 1, sm: 2 },
                py: { xs: 1, sm: 1.5 },
                px: { xs: 3, sm: 4 },
                fontWeight: 'bold',
                alignSelf: { xs: 'center', md: 'flex-start' },
                backgroundColor: '#c0e493ff',
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ 
        my: { xs: 3, sm: 4 },
        display: { xs: 'none', sm: 'block' }
      }} />
      <Snackbar 
          open={openSnackbar} 
          autoHideDuration={6000} 
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            Votre message a été envoyé avec succès !
          </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;