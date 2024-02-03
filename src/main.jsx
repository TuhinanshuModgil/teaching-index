import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import CalculatorPage from './components/Data_Entry/CalculatorPage';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import { UserContextprovider } from './components/Context/AuthContext';
import ProtectedRoute from './components/Firebase/protectedRoutes';
import { UserDatabaseContextProvider } from './components/Context/UserContext';
// console.log("loaded main")

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "myCourse",
        element: <ProtectedRoute><HomePage /></ProtectedRoute>
      },

      {
        path: "calculate",
        element: <ProtectedRoute><CalculatorPage /></ProtectedRoute>
      },
      {
        path: "dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextprovider>
      <UserDatabaseContextProvider>
        <RouterProvider router={router} />
      </UserDatabaseContextProvider>
    </UserContextprovider>
  </React.StrictMode>,
)
