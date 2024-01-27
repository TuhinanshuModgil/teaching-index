import React, { useState } from 'react'
import UserTab from './UserTab'
import { useTable } from "react-table"
import { useUserDatabse } from '../Context/UserContext'
// import AcademicYear from '../Data_Entry/AcademicYear'
import AcademicYearMulti from './AcademicYearMulti'


const data = [
  {
    name: "Sarang Gumphekar",
    courses: ["course1: AY1 log log",
      "course1: AY2 log lgo"],
    totalLoad: 10
  },
  {
    name: "Sarang Gumphekar",
    courses: ["course1: AY1 log log",
      "course1: AY3 diad akfa","course 3: hlownw"],
    totalLoad: 10
  }
]

function Dashboard() {
  // console.log("loaded Dashboard")



  const [selectedUsers, setSelectedUsers] = useState([])
  
  const [queryAcadYears, setQueryAcadYears] = useState([])
  const { userSnapshot } = useUserDatabse()

  const handleLoadData = ()=>{

    if(selectedUsers.length){

    }
  }



  // console.log(userSnapshot)

  return (
    <>


      <div className='w-full h-screen bg-black/20 flex justify-center align-middle items-center p-2 gap-2'>


        <div className='w-1/4 h-full bg-slate-800 flex rounded-md md:w-96 lg:w-80 xl:w-96 flex-col gap-4'>

          <AcademicYearMulti setAcadYear={setQueryAcadYears} />
          {userSnapshot.map((userSnap) => {
            // console.log(userSnap)
            return (<div key={userSnap.createdat} className='mx-2'>
              <UserTab username={userSnap} setSelectedUsers={setSelectedUsers} />
            </div>)
          })}

        </div>
        <div className='w-3/4 h-full bg-slate-800 flex-col  rounded-md'>
          <div className='w-full bg-cyan-700 flex-col  flex-nowrap'>
            <div className='flex w-full flex-nowrap'>
            <div className='max-w bg-gray-700 border-2 p-3 flex-1 min-w-28'>
              Name
            </div>
            <div className='w-[700px] bg-gray-700 p-3 border-2'>
              Courses
            </div>
            <div className='w-[100px] bg-gray-700 p-3 border-2'>
              Load
            </div>
            </div>
            

            {data.map((i,index) => (
              
                <div className='flex w-full flex-nowrap' key={index}>

                <div className='w-[100px] bg-gray-700 border-2 p-3 flex-1 min-w-28'>
                  {i.name}
                </div>
                <div className='w-[700px] bg-gray-700 p-3 border-2'>
                  {i.courses.map((course, index1) =>(
                    <h1 key={index1*2}>{course} <br /></h1>
                  ))}
                  
                </div>
                <div className='w-[100px] bg-gray-700 p-3 border-2'>
                  Load
                </div>
                
                </div>
              
            ))}

          </div>

          <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => console.log(queryAcadYears)}
          >console Log</button>
          <br />
          <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => handleLoadData()}
          >Load Data</button>
        </div>

      </div>
    </>
  )
}

export default Dashboard
