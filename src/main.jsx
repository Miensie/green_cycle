import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard  from './dashboard/Dashboard.jsx'
import Activity from './activity/Activity.jsx'
import Contact from './contact/Contact.jsx'
import About from './about/About.jsx'
import Solutions from   './solutions/Solutions.jsx'





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
   }
  
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider 
     router={router}>
        
     </RouterProvider>
  </StrictMode>
)
