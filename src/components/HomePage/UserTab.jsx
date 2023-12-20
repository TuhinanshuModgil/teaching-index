import React from 'react'
import accountImage from '../../assets/SL.png'


function UserTab() {
    // component 1
    // <div className="bg-white p-6 rounded-md shadow-md">
    //   <img
    //     src={accountImage}
    //     alt="ax"
    //     className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
    //   />
    //   <h2 className="text-xl font-bold mb-2">name</h2>
    //   <p className="text-gray-600 mb-2">Title</p>
    //   <p className="text-gray-700">User Load:</p>
    // </div>

    //component I made
    // <div className='w-1/4  rounded-md h-[6rem] bg-white flex'>
    //     <div className='felx w-1/4 justify-center p-2'>
    //         <img src={accountImage} alt="accountImage" className=' w-full h-full object-cover rounded-full' />
    //     </div>
    //     <div className='flex-col text-black p-2 px-5'>
    //         <h1>Professor Name</h1>
    //         <h4 className='text-sm'>Title</h4>
    //         <h4 className='text-sm'>AY-2023-II</h4>
    //         <h4 className='text-sm'>Load: 3.5</h4>
    //     </div>

    // </div>



  return (
    <>
    
    
    <div className="bg-white p-4 rounded-md shadow-md w-64 md:w-96 lg:w-80 xl:w-96 flex items-center">
      <img
        src={accountImage}
        alt="ac"
        className="w-16 h-16 rounded-full mr-4 object-cover"
      />
      <div className='px-3 '>
        <h2 className="text-xl font-bold mb-2 text-gray-700 leading-snug">{"Dr. Zing Chang Woo"}</h2>
        <p className="text-gray-600 mb-2 leading-snug">{"title"}</p>
        <p className="text-gray-700">User Load: {"3.5"}</p>
      </div>
    </div>
    </>
  )
}

export default UserTab
