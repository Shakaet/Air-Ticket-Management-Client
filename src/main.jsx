import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from './layout/MainLayout.jsx';
import { Home } from './component/Home.jsx';

import { Register } from './component/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './component/Login.jsx';
import ForgetPass from './component/ForgetPass.jsx';
import { AllFlights } from './component/AllFlights.jsx';
import { FlightsDetails } from './component/flightsDetails.jsx';
import { Mybooking } from './component/Mybooking.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/forget-password",
        element:<ForgetPass></ForgetPass>
      },
      {
        path:"/allflights",
        element:<AllFlights></AllFlights>
      },
      {
        path:"/flightDetails/:id",
        element:<FlightsDetails></FlightsDetails>
      },
      {
        path:"/mybookings",
        element:<Mybooking></Mybooking>
      }
    ]
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>,
</QueryClientProvider>
)
