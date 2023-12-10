import React from 'react'
import accountImage from '../assets/SL.png'
function Navbar() {
  return (
   <>
   <header className='py-6 px-6 flex justify-between items-center	'>
    <div className='flex gap-8'>
      <a href="/">Home</a>
      <a href="/">Calculate</a>
      <a href="/">Dashboard</a>
    </div>


    <div className='flex gap-8 items-center	'>
      <img src={accountImage} alt="image" className='w-10 h-10 object-cover rounded-full	' />
      <h3>Dr. Zin Chang Woo</h3>
    </div>
   </header>
   </>
  )
}

export default Navbar
