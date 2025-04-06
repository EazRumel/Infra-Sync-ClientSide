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
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
   <AuthProvider>
   <ToastContainer></ToastContainer>
   <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)
