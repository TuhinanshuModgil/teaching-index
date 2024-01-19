import React from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'


function Layout() {
  console.log("loaded layout")
  
  return (
   <>
   
   <Navbar/>
    <Outlet/>
   
   </>
  )
}

export default Layout
