import React, { useState } from 'react';
import {  useEffect } from 'react';
import HomePage from '../component/HomePage.jsx'
import Footer1 from '../component/Footer1.jsx'
import Contact2 from '../component/Contact2.jsx'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Fab,
  Zoom,
   useScrollTrigger
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { KeyboardArrowDown } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const ContactContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #b5c9bbff 0%, #0f1312ff 100%)',
  padding: theme.spacing(12, 3),
  overflow: 'hidden',
  isolation: 'isolate',
}));

const DecorativeBlur = styled(Box)({
  position: 'absolute',
  top: '-320px',
  left: '50%',
  transform: 'translateX(-50%) rotate(30deg)',
  width: '1000px',
  height: '600px',
  background: 'linear-gradient(135deg, #56d872ff 0%, #9089fc 100%)',
  borderRadius: '50%',
  filter: 'blur(100px)',
  opacity: 0.2,
  zIndex: -1,
});

const FormPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
  padding: theme.spacing(5),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}20`,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    fontWeight: 500,
  },
  '& .MuiInputBase-input': {
    color: 'white',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.4)',
      opacity: 1,
    },
  },
}));

const PhoneContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}20`,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));


// Composant pour le bouton de retour en haut
function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: { xs: 80, md: 100 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

// Composant pour le bouton de descente en bas
function ScrollBottom({ children, showBottomButton }) {
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={showBottomButton}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
        }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phone: '',
    message: '',
    agreeToPolicy: false,
  })
  const [showBottomButton, setShowBottomButton] = useState(true);

  

  // Vérifier si on est proche du bas de la page
    useEffect(() => {
      const checkScrollPosition = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;
        setShowBottomButton(scrollPosition < pageHeight - 200);
      };
  
      window.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
  
      return () => window.removeEventListener('scroll', checkScrollPosition);
    }, []);

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      agreeToPolicy: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
  <Box>
        <Box>
           <HomePage />
        </Box> 
    <ContactContainer>
      <DecorativeBlur />
      <Contact2/>
     
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        {/* En-tête */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 600,
              color:'green',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem' },
              letterSpacing: '-0.025em',
            }}
          >
            Send us a message
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '1.125rem',
              lineHeight: 1.6,
            }}
          >
            We'd love to hear from you! Send your comments to GreenCycle Liberia INC.
          </Typography>
        </Box>

        {/* Formulaire */}
        <FormPaper>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Prénom et Nom */}
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="First name"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Last name"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  autoComplete="family-name"
                />
              </Grid>

              {/* Société */}
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Company"
                  value={formData.company}
                  onChange={handleChange('company')}
                  autoComplete="organization"
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  autoComplete="email"
                />
              </Grid>

              {/* Téléphone */}
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  sx={{ 
                    color: 'white', 
                    fontWeight: 500, 
                    mb: 1,
                    fontSize: '0.875rem'
                  }}
                >
                  Phone number
                </Typography>
                <PhoneContainer>
                  <FormControl sx={{ minWidth: 80 }}>
                    <Select
                      value={formData.country}
                      onChange={handleChange('country')}
                      displayEmpty
                      IconComponent={KeyboardArrowDown}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { border: 0 },
                        '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 0 },
                        '.MuiSvgIcon-root': { color: 'rgba(255, 255, 255, 0.4)' }
                      }}
                    >
                      <MenuItem value="US">US</MenuItem>
                      <MenuItem value="CA">CA</MenuItem>
                      <MenuItem value="EU">EU</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    placeholder="123-456-7890"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { border: 0 },
                        '&:hover fieldset': { border: 0 },
                        '&.Mui-focused fieldset': { border: 0 },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                        '&::placeholder': {
                          color: 'rgba(255, 255, 255, 0.4)',
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </PhoneContainer>
              </Grid>

              {/* Message */}
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange('message')}
                  placeholder="Votre message..."
                />
              </Grid>

              {/* Checkbox de consentement */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeToPolicy}
                      onChange={handleCheckboxChange}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.2)',
                        '&.Mui-checked': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem' }}>
                      By selecting this, you agree to our{' '}
                      <Link href="#" sx={{ color: 'primary.light', fontWeight: 500 }}>
                        privacy policy
                      </Link>
                      .
                    </Typography>
                  }
                />
              </Grid>

              {/* Bouton de soumission */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
                    py: 2,
                    backgroundColor:'green',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(63, 81, 181, 0.3)',
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(63, 81, 181, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Let's talk
                </Button>
              </Grid>
            </Grid>
          </Box>
        </FormPaper>
      </Container>
    </ContactContainer>
    <Box sx={{marginTop:'50px'}}>
      <Footer1/>
    </Box>

     {/* Bouton de retour en haut */}
      <ScrollTop>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: 'green',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      {/* Bouton de descente en bas */}
      <ScrollBottom showBottomButton={showBottomButton}>
        <Fab
          color="secondary"
          size="medium"
          aria-label="scroll to bottom"
          sx={{
            backgroundColor: '#41b156ff',
            '&:hover': {
              backgroundColor: '#2e7d32',
            },
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          }}
        >
          <KeyboardArrowDownIcon />
        </Fab>
      </ScrollBottom>
      
</Box> 
  );
}