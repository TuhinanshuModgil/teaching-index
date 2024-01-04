import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import CalculatorPage from './components/Calculator/CalculatorPage';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import { UserContextprovider } from './components/Context/AuthContext';
import ProtectedRoute from './components/Firebase/protectedRoutes';
import { LoadContextprovider } from './components/Context/LoadContext';


// Creating different routes for the navigation of the website
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element:<ProtectedRoute><HomePage/> </ProtectedRoute>
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
        element: <ProtectedRoute>
                  <LoadContextprovider>
                    <CalculatorPage/>
                  </LoadContextprovider>
                 </ProtectedRoute>
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
