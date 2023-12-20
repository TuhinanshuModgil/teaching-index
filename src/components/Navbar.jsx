import React from 'react'
import accountImage from '../assets/SL.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <header className='py-6 px-6 flex justify-between items-center border-b-2 border-b-black/10 shadow-md 	'>
    <div className='flex gap-8'>
      <NavLink to={'home'}>Home</NavLink>
      <NavLink to={'calculate'}>Calculate</NavLink>
      <NavLink to={'dashboard'}>Dashboard</NavLink>
      
      
    </div>


    <div className='flex gap-8 items-center	'>
      <img src={accountImage} alt="image" className='w-10 h-10 object-cover rounded-full	' />
      <h3>Dr. Zin Chang Woo</h3>
       
      <h1>Log-out</h1>
      <h1>Sign-Up</h1>
      <h1>Log-in</h1>

    </div>
   </header>
   </>
  )
}

export default Navbar
