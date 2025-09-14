import React from 'react';
import {
    Box,
    Typography,
    Container,
    Divider,
    Avatar
} from '@mui/material';




export default function Footer() {
    return (
         <Container sx={{
            bgcolor: '#535852ff',
            width: '100%',
            height:'800px'
        }}>
            <Box sx={{ mt: 10}}>
                <Avatar
                    alt='Logo'
                    src='src/assets/Capture d\écran 2025-08-27 123502.png'
                    sx={{height:'30px', width:'30px'}} />
                <Typography variant="h6" component='h1'>
                    GreenCycle Liberia ,Inc is a waste management company based in Monrovia.
                </Typography>
            </Box>
            <Box variant="div" component='h1' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row'}
            }}>
               <Box variant="div" component='h1' sx={{
                display:'flex'
               }}>
                <Typography variant="h4" component='h1'>
                    Contact us
                </Typography>
                <Typography variant='h6' component='h1'>
                    • Population: Approximately 1.5 million<br/>
                    • Official Language: English<br/>
                    • Time Zone: GMT (UTC+0)<br/>
                    • Currency: Liberian Dollar (LRD)
                </Typography>
              </Box> 
              <Box variant="div" component='h1' sx={{
                display:'flex'
               }} >
                <Typography variant="h4" component='h1'>
                    Work with us
                </Typography>
                <Typography variant='h6' component='h1'>
                    • Population: Approximately 1.5 million<br/>
                    • Official Language: English<br/>
                    • Time Zone: GMT (UTC+0)<br/>
                    • Currency: Liberian Dollar (LRD)
                </Typography>
              </Box> 
              <Box  variant="div" component='h1' sx={{
                display:'flex'
               }}>
                <Typography variant="h4" component='h1'>
                    Choose us
                </Typography>
                <Typography variant='h6' component='h1'>
                    • Population: Approximately 1.5 million<br/>
                    • Official Language: English<br/>
                    • Time Zone: GMT (UTC+0)<br/>
                    • Currency: Liberian Dollar (LRD)
                </Typography>
              </Box> 
              <Box variant="div" component='h1' sx={{
                display:'flex'
               }}>
                <Typography variant="h4" component='h1'>
                    About us
                </Typography>
                <Typography variant='h6' component='h1'>
                    • Population: Approximately 1.5 million<br/>
                    • Official Language: English<br/>
                    • Time Zone: GMT (UTC+0)<br/>
                    • Currency: Liberian Dollar (LRD)
                </Typography>
              </Box> 
            </Box>

            <Divider sx={{ mt: 5,mb:5, bgcolor: 'grey.500'}}/>
            <Typography variant='h6' component='h1' sx={{mb:5}}>
                GreenCycle Liberia, INC.
            </Typography>
        </Container>
    )
}
   