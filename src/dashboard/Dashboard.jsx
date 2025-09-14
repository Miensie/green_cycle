import React from 'react'
import Home from '../component/Home.jsx'
import HomePage from '../component/HomePage.jsx'
import Carte from '../component/Carte.jsx'
import Footer1 from '../component/Footer1.jsx'
import Services1 from '../component/Services1.jsx'
import {Box} from '@mui/material'

export default function Dashboard() {
  return (
    <Box>
       
         <HomePage mt={0} />,
        <Home />
        <Box >
           <Services1/>
          <Carte/>
        </Box>
       <Box mt={25}>
          <Footer1 />
       </Box> 
    </Box>
    
  )
}
