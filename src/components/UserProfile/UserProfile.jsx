import React, {useState} from 'react'
import { useAuth } from '../Context/AuthContext'
import { auth } from '../Firebase/firebase';


function UserProfile() {
    const { user, updateUserPassword } = useAuth()

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');



   const user1 = auth.currentUser;
    




  const handleSubmit = (event) => {
    console.log("moved to submit")
    event.preventDefault();
    handlePasswordChange(password);
    setPassword('');
  };

  const handlePasswordChange = (value) => {
    updateUserPassword(value)
    
  };


    

  return (
    <div className='py-10 px-6'>
      <h1 className='text-4xl mb-5'>User Profile</h1>

      <h1 className='text-xl my-5'>User name: {user.displayName}</h1> 
      <h1 className='text-xl my-5'>Email: {user.email}</h1> 

      <form onSubmit={handleSubmit} className="max-w-md mt-8 p-4 bg-white shadow-md rounded-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {/* Enter Old Password:
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="mt-1 p-2 block w-full text-white border rounded-md focus:outline-none focus:border-blue-500"
        />
        <br /> */}
        Enter New Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 block  text-white w-full border rounded-md focus:outline-none focus:border-blue-500"
        />


      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Submit
      </button>
    </form>

      
      <button className='bg-gray-600 px-6 py-2 rounded-md shadow-md my-6 font-medium'
            onClick={()=>{console.log(user," \n" , user1) }}
          >Save</button>
    </div>
  )
}

export default UserProfile
