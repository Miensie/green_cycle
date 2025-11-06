import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Box, 
  Typography, 
  TextField, 
  Button,
  Divider
} from '@mui/material';
import toast from 'react-hot-toast';
import axios from 'axios';

const ContactPage = () => {
  const {handleSubmit, register,formState: {errors},reset} = useForm();
  const onSubmit = (data) => {
    
    axios.post("http://localhost:3000/Utilisateurs", data)
    .then((res)=>{
      console.log(data,errors);
      toast.success("Think you for contacting us, we will get a back soon")
     reset()
    })
    .catch((error) =>{
      toast.error("something went wrong,please try again")
    })
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
            onSubmit={handleSubmit(onSubmit)} 
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
              {...register("name", {required:"Name is required"})}
            />
            
            <TextField
              id="filled-basic"
              name="email"
              label="Business email"
              variant="outlined"
              fullWidth
              size="small"
              {...register("email" , {required:"Email is required"})}
            />
            
            <TextField
             id="filled-basic"
              name="company"
              label="Company/organization and job title"
              variant="outlined"
              fullWidth
              size="small"
              {...register("company" , {required:"Company/organisation and job title is required"})}
            />
             <TextField
              id="filled-basic"
              name="countrie"
              label="Countries"
              variant="outlined"
              fullWidth
              size="small"
              {...register("countrie")}
            />
            <TextField
              name="message"
              label="Message"
              multiline
              rows={ { xs: 3, sm: 4 } }
              placeholder="Enter your message ..."
              variant="outlined"
              fullWidth
              {...register("message")}
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
    </Box>
  );
};

export default ContactPage;