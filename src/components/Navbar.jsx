import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'

function Navbar() {
  // console.log("loaded navbar")

  const {logout, user} = useAuth()

  // const userChecker = ({children})=>{
  //   if(user){
  //     return <>{children}</>
  //   }
  //   else{
  //     return <></>
  //   }
  // }

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
   <header className='py-1 px-6 flex justify-between items-center border-b-2 border-b-black/10 shadow-md 	'>
    <div className='flex gap-8'>

      
      {user?<>
      <NavLink to={'calculate'}>Data Entry</NavLink>
      <NavLink to={'dashboard'}>Dashboard</NavLink>
      <NavLink to={'home'}>Home</NavLink>
      </>:<></>}
      
      
    </div>


    <div className='flex gap-8 items-center	'>
      
      
       
      {user?<></>:<div className='my-6 flex gap-8 items-center'><NavLink to={'login'}>Login</NavLink>
      <NavLink to={'signup'}>Signup</NavLink></div>}
      {user?<>
      
      <h3>{user.displayName?user.displayName:"No username"}</h3>
      <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
        onClick={handleLogout}
      >Logout</button></>:<></>}
      
      

    </div>
   </header>
   </>
  )
}

export default Navbar
