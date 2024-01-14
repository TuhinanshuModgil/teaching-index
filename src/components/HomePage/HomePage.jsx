import React from 'react'
import UserTab from '../Dashboard/UserTab'

function HomePage() {
  return (
   <>
   <div className='w-full h-screen bg-black/20 flex justify-center align-middle items-center'>
    {/* <h1 className='text-white text-center p-10 w-1/4 h-1/4'>The Home Page</h1> */}
    <UserTab/>
   </div>
   </>
  )
}

export default HomePage
