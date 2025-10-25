import React from 'react'
import Service1 from '../component/Service1.jsx'
import Choose2 from '../component/Choose2.jsx'
import Service2 from '../component/Service2.jsx'
import Footer1 from '../component/Footer1.jsx'
import Video2 from '../component/Video2.jsx'
import Choose1 from '../component/Choose1.jsx'
import Choose3 from '../component/Choose3.jsx'
import WhatWeDo from '../component/WhatWeDo.jsx'
import Project from '../component/Project.jsx'

import {Box} from '@mui/material'





export default function Dashboard() {
  return (
    <Box>
         <Video2/>
         <Choose2/>
         <Service2 mt={20}/>
         <Choose1/>
         <Choose3/>
         <WhatWeDo/>
      
        <Service1/>
        <Project/>
      <Footer1/>
        
    </Box>
  )
}
