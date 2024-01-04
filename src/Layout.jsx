import React from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'


function Layout() {
  // It shows the layout of the website 
  // the outlet tag is where the components will be added by the react router dom
  
  return (
   <>
   <Navbar/>
    <Outlet/>
   </>
  )
}

export default Layout
