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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "home",
        element:<HomePage/> 
      },
      {
        path: "calculate",
        element: <CalculatorPage/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      }
    ]
  },  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
