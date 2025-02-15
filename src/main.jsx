import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router';
import AuthProvider from './provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <HelmetProvider>

   <AuthProvider>
   <ToastContainer></ToastContainer>
   <RouterProvider router={router} />
    </AuthProvider>

   </HelmetProvider>

  </StrictMode>,
)
