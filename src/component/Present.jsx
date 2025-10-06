import React from 'react'
import Project2 from '../component/Project2.jsx'
import Project from '../component/Project.jsx'
import Project3 from '../component/Project3.jsx'
import Eco from '../component/Eco.jsx'
import {
    Box,
    Typography,
    Paper,
    Divider
} from '@mui/material'
import RecyclingIcon from '@mui/icons-material/Recycling';
import DeleteIcon from '@mui/icons-material/Delete';
import CompostIcon from '@mui/icons-material/Compost';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const present=  [
    {
        Icon:<RecyclingIcon/>,
        name: 'Reuse'
    },
    {
        Icon: <DeleteIcon/>,
        name: 'Reduce'
    },
    {
        Icon: <CompostIcon/>,
        name: 'Recovery'
    }
]

export default function Present() {
  return (
    <Box Width="100%" 
    sx={{backgroundColor:'grey.50'}}>
       <Typography 
            variant="h3"
            component="h2"
            align='center'
            sx={{
             fontWeight: 'bold',
             color: 'green',
             mb: 3
                }} >
          Our Sustainability
       </Typography> 
       <Box sx={{display:'flex',
            flexDirection:{xs:'column', md:'row'},
            alignItems:'center',
            gap:{xs:'10px',md:'15px'},
            marginTop:{xs:'10px',md:'50px'},
            alignItems:'center',
            marginLeft:{xs:'10px', md:'20px'},
            justifyContent:{xs:'center', md: 'flex-start' },
            }}>
          <Paper 
          elevation={0}
           sx={{
                width:{ xs: '90%', md: '30%' },
                height: { xs: 'auto', md: '200px' },
                borderRadius: '16px ',
                 minHeight: '200px',
                backgroundColor:'background.paper',
                 marginTop: { xs: '15px', md: '20px' },
                 marginLeft: { xs: '0', md: '15px' },
                marginLeft:'15px',
                padding: { xs: '15px', md: '20' },
              }}>
          <Box sx={{display:'flex',flexDirection:'row'}}>     
          <CheckCircleIcon sx={{fontSize:'50px',color:'#0b5e18'}}/>
          <Typography 
          variant='body1'
           component='p'
           padding='10'
           color='text.secondary'
           >
             At GreenCycle Liberia Inc,
             sustainability is not just a goal it is our foundation. 
             We believe that waste should never be seen as the end of a product’s life, 
             but as the beginning of something new.
          </Typography>
          </Box> 
         </Paper> 
         
         <Paper
           elevation={0} 
          sx={{
                width:{ xs: '90%', md: '30%' },
                height: { xs: 'auto', md: '200px' },
                borderRadius: '16px ',
                 minHeight: '200px',
                backgroundColor:'background.paper',
                 marginTop: { xs: '15px', md: '20px' },
                 marginLeft: { xs: '0', md: '15px' },
                marginLeft:'15px',
                padding: { xs: '15px', md: '20' },
              }}>
          <Box sx={{display:'flex',flexDirection:'row'}}>      
           <CheckCircleIcon sx={{fontSize:'50px',color:'#6af40e'}}/>
           <Typography
             variant='body1'
             component='p'
             padding='10'
             color='text.secondary'
              >
              By embracing the circular economy, 
              we aim to create long-term solutions
              that benefit both people and the environment. 
              We believe that a potentiel waste transform for create 
              .
           </Typography>
          </Box>
         </Paper>
         <Paper
           elevation={0} 
          sx={{
                width:{ xs: '90%', md: '30%' },
                height: { xs: 'auto', md: '200px' },
                borderRadius: '16px ',
                 minHeight: '200px',
                backgroundColor:'background.paper',
                 marginTop: { xs: '15px', md: '20px' },
                 marginLeft: { xs: '0', md: '15px' },
                marginLeft:'15px',
                padding: { xs: '15px', md: '20' },
              }}>
           
            <Box sx={{display:'flex',flexDirection:'row'}}>
              <CheckCircleIcon sx={{fontSize:'50px',color:'#527027ff'}}/>
              <Typography
             variant='body1'
             component='p'
             padding='10'
             color='text.secondary'
              >
              Our projects not only tackle waste management challenges 
              but also empower communities, create green jobs, and promote 
              awareness about sustainable living. 
              </Typography>
            </Box>
         </Paper>
         </Box> 
         <Divider sx={{fontSize:'20px',fontWeight:'bold',color:'green',marginTop:'20px'}}/>
          <Eco/>
         <Box sx={{display:'flex',
                flexDirection:{xs:'column',md:'row'},
                width:'100%',
                gap:{xs:'10px',md:'20px'},
                marginTop:'100px',
                marginBottom:'50px'}}>  
                <Box sx={{width:'30%'}}>
                  <Project />
                </Box>
                <Box sx={{width:'30%'}}>
                  <Project2/>
                </Box>
                <Box sx={{width:'30%'}}>
                  <Project3/>
                </Box>
              
              </Box>
    </Box>
  )
}
