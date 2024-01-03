import React from 'react'
import accountImage from '../assets/SL.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'

function Navbar() {

  const {logout, user} = useAuth()

  const userChecker = ({children})=>{
    if(user){
      return <>{children}</>
    }
    else{
      return <></>
    }
  }

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
   <>
   <header className='py-3 px-6 flex justify-between items-center border-b-2 border-b-black/10 shadow-md 	'>
    <div className='flex gap-8'>

      
      {user?<><NavLink to={'home'}>Home</NavLink>
      <NavLink to={'calculate'}>Calculate</NavLink>
      <NavLink to={'dashboard'}>Dashboard</NavLink></>:<></>}
      
      
    </div>


    <div className='flex gap-8 items-center	'>
      
      
       
      {user?<></>:<><NavLink to={'login'}>Login</NavLink>
      <NavLink to={'signup'}>Signup</NavLink></>}
      {user?<>
      <img src={accountImage} alt="image" className='w-10 h-10 object-cover rounded-full	' />
      <h3>Dr. Tuhinanshu</h3>
      <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
        onClick={handleLogout}
      >Logout</button></>:<></>}
      
      

    </div>
   </header>
   </>
  )
}

export default Navbar
