import React, { useEffect, useState } from 'react'
import UserTab from './UserTab'
import { useTable } from "react-table"
import { useUserDatabse } from '../Context/UserContext'
// import AcademicYear from '../Data_Entry/AcademicYear'
import AcademicYearMulti from './AcademicYearMulti'
import { fetchDataOfCourses } from '../Firebase/firestore'
import array from '../Database/ayData'
import { useStateManager } from 'react-select'


// temp teesting data
const data1 = [
  {
    name: "Sarang Gumphekar",
    courses: [{ courseName: "CH303 XXXXX", academicYear: "AY XXXXX" }, { courseName: "CH304 XXXXX", academicYear: "AY XXXXX" }],
    totalLoad: 10
  }
]

function Dashboard() {
  // console.log("loaded Dashboard")


  const [data, setData] = useState([])

  const [selectedUsers, setSelectedUsers] = useState([])

  const [queryAcadYears, setQueryAcadYears] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const { userSnapshot } = useUserDatabse()

  const handleLoadData = () => {

    if (selectedUsers.length) {
      setData([])

      selectedUsers.forEach(async (selectedUser) => {
        // return the courses for the selected user
        const returnedCourseData = await fetchDataOfCourses(selectedUser, queryAcadYears)

        let totalLoad = 0;
        let courses = [];
        console.log("this is retured data: ", returnedCourseData)
        returnedCourseData.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("this is query DATA: ")
          console.log(doc.data().teachingIndex)
          totalLoad += doc.data().teachingIndex
          courses.push(doc.data())
          console.log(doc.id, " => ", doc.data());
        });

        setData(prev => [...prev, {
          name: selectedUser.name,
          courses,
          totalLoad
        }])


      })

    }
    else {
      console.log("no user selected")

    }
  }

  // useEffect(()=>{
  //   console.log("rerendered using useEffect")
  // },[data])

  // console.log(userSnapshot)

  return (
    <>


      <div className='w-full h-screen bg-black/20 flex justify-center align-middle items-center p-2 gap-2'>


        <div className='w-1/4 h-full bg-gray-800 flex rounded-md md:w-96 lg:w-80 xl:w-96 flex-col gap-4 items-center overflow-scroll'>

          <AcademicYearMulti setAcadYear={setQueryAcadYears} />
          {userSnapshot.map((userSnap) => {
            // console.log(userSnap)
            return (<div key={userSnap.createdat} className='mx-2 w-full'>
              <UserTab username={userSnap} setSelectedUsers={setSelectedUsers} selectAll={selectAll} />
            </div>)
          })}
          {/* <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => setSelectAll(true)}
          >{selectAll ? "Deselect All" : "Select All"}</button> */}

          


        </div>
        <div className='w-3/4 h-full bg-gray-800 flex-col  rounded-md'>
        <button className='bg-blue-400 px-6 py-2 mx-4 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => handleLoadData()}
          >Load Data</button>
          <div className='w-full bg-cyan-700 flex-col  flex-nowrap'>
            <div className='flex w-full flex-nowrap'>
              <div className='max-w bg-gray-700 border-2 p-3 flex-1 min-w-16'>
                Name
              </div>
              <div className='w-[750px] bg-gray-700 p-3 border-2'>
                Courses
              </div>
              <div className='w-[100px] bg-gray-700 p-3 border-2'>
                Load
              </div>
            </div>

            {data.map((i, index) => (

              <div className='flex w-full flex-nowrap' key={index}>

                <div className='w-[100px] bg-gray-700 border-2 p-3 flex-1 min-w-16'>
                  {i.name}
                </div>
                <div className='w-[750px] bg-gray-700 border-2'>

                  {i.courses.map((course, index1) => (<div className='flex'>

                    <div className='w-[400px] p-2'>

                      <h1 key={index1 * 2}>{course.courseName}</h1>

                    </div>

                    <div className='flex-1 p-2'>

                      <h1 key={index1 * 2}> {course.academicYear} </h1>

                    </div>

                  </div>))}
                  <br />

                </div>
                <div className='w-[100px] bg-gray-700 p-3 border-2'>
                  {i.totalLoad}
                </div>

              </div>

            ))}

          </div>

          {/* <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => console.log(selectedUsers)}
          >console Log</button> */}
          <br />

        </div>

      </div>
    </>
  )
}

export default Dashboard
