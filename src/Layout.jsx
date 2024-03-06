import React from 'react'
import Navbar from './components/Navbar'
import {Outlet} from 'react-router-dom'


function Layout() {
  console.log("loaded layout")
  
  return (
   <>
   
   <div className='h-screen w-screen flex flex-col overflow-hidden' >
   <Navbar/>
    <Outlet/>

   </div>
   </>
  )
}

export default Layout
