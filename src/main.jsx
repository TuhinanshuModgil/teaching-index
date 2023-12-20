import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import CalculatorPage from './components/CalculatorPage';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import { UserContextprovider } from './components/Context/AuthContext';
import ProtectedRoute from './components/Firebase/protectedRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element:<Signup/> 
      },
      {
        path: "/signup",
        element:<Signup/> 
      },
      {
        path: "home",
        element:<ProtectedRoute><HomePage/> </ProtectedRoute>
      },
      {
        path: "calculate",
        element: <ProtectedRoute><CalculatorPage/></ProtectedRoute>
      },
      {
        path: "dashboard",
        element: <ProtectedRoute><Dashboard/></ProtectedRoute>
      },
      {
        path: "login",
        element: <Login/>
      }
    ]
  },  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextprovider>

    <RouterProvider router={router} />
    </UserContextprovider>
  </React.StrictMode>,
)
