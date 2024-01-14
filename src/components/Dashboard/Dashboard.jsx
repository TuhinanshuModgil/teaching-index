import React from 'react'
import UserTab from './UserTab'
import { useUserDatabse } from '../Context/UserContext'


function Dashboard() {

  const { userSnapshot } = useUserDatabse()
  console.log(userSnapshot)

  return (
    <>
      <div className='w-full h-screen bg-black/20 flex justify-center align-middle items-center p-2 gap-2'>


        <div className='w-1/4 h-full bg-slate-800 flex rounded-md md:w-96 lg:w-80 xl:w-96 flex-col gap-4'>
          {userSnapshot.map((userSnap) => {
            console.log(userSnap)
            return (<div key={userSnap.createdat}>
              <UserTab username={userSnap.userName} />
            </div>)
          })}

        </div>
        <div className='w-3/4 h-full bg-slate-800 flex  rounded-md'>
          <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => console.log(userSnapshot)}
          >console Log</button>
        </div>

      </div>
    </>
  )
}

export default Dashboard
