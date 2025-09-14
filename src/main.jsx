import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard.jsx'
import About from './about/About.jsx'
import Contact from './contact/Contact1.jsx'
import Activity from './activity/Activity.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: < Dashboard/>,
  },
  {
    path: "/about",
    element: < About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/activity",
    element: <Activity />
  }


])


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider 
     router={router}>
        
     </RouterProvider>
  </StrictMode>
)