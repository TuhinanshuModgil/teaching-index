import React, { useEffect, useState } from 'react'
import accountImage from '../../assets/SL.png'
import { useAuth } from '../Context/AuthContext'
// console.log("loaded userTab")


function UserTab({username, setSelectedUsers, selectAll}) {
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
  const [userSelected, setUserSelected] = useState(false)

  // console.log("This is userSnap: ", username)

  
  const addUserToSelected = ()=>{
    console.log( {name: username.userName, uid: username.uid})
    setSelectedUsers(prev => [...prev, {name: username.userName, uid: username.uid}])
    console.log("ran to this 1")

  }

  const deleteUserFromSelected = ()=>{
    setSelectedUsers(prev => (
      prev.filter((element => element.name !== username.userName ))
    ))
    console.log("ran to this 2")

  }
  // const { user } = useAuth()
  const handleUserSelected = () => {
    setUserSelected(prev => !prev)
    console.log(userSelected)
    
    // console.log(userSelected)
    
  }
  

  useEffect(()=>{
    if(userSelected) addUserToSelected()
    if(!userSelected ) deleteUserFromSelected()
  },[userSelected])

  return (
    <>


      <div className="bg-white p-4 rounded-md shadow-md flex  items-center h-14 ">
        <input type="checkbox" checked={userSelected||selectAll} onChange={handleUserSelected} />
        <div className='px-3 '>
          <h2 className="text-xl font-bold mb-2 text-gray-700 leading-snug">{username.userName}</h2>
          {/* <p className="text-gray-600 mb-2 leading-snug">{user && user.email}</p>
        <p className="text-gray-700">User Load: {"3.5"}</p> */}
        </div>
        {/* <button onClick={()=>console.log(userSelected)} className='bg-green-700'>clg</button> */}
      </div>
    </>
  )
}

export default UserTab
