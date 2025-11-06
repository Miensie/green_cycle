import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard  from '../src/dashboard/Dashboard.jsx'
import Activity from '../src/activity/Activity.jsx'
import Contact from '../src/contact/Contact.jsx'
import About from '../src/about/About.jsx'
import Solutions from   '../src/solutions/Solutions.jsx'
import Soustainbility  from '../src/soustainbility/Soustainbility.jsx'
import Action from '../src/action/Action.jsx'
import LtProject from '../src/ltprojects/LtProject.jsx'
import StProject from '../src/stproject/StProject.jsx'
import { Toaster } from 'react-hot-toast'


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        
        '#root': {
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh',
        },
      },
    },
  },
})




const router = createBrowserRouter([
   {
    path: "/",
    element:<Dashboard />,
   },
   {
      path: "/activity",
      element:<Activity/>,
   },
   {
      path: "/contact",
      element: <Contact/>
   },
   {
      path: "/about",
      element: <About/>
   },
   {
      path: "/solutions",
      element: <Solutions/>
   },
   {
      path:"/soustainbility",
      element: <Soustainbility/>
   },
   {
      path:"/action",
      element:<Action/>
   },
   {
      path:"/ltprojects",
      element:<LtProject/>
   },
   {
      path:"/stproject",
      element:<StProject/>
   }
  
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
      <Toaster />
      <CssBaseline /> 
     <RouterProvider 
     router={router} />
   </ThemeProvider>  
  </StrictMode>
)
