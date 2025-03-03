import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from './layout/MainLayout.jsx';
import { Home } from './component/Home.jsx';
import { Login } from './component/Login.jsx';
import { Register } from './component/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>,
)
