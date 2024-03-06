import React, { useEffect, useState } from 'react'
import UserTab from './UserTab'
import { useTable } from "react-table"
import { useUserDatabse } from '../Context/UserContext'
// import AcademicYear from '../Data_Entry/AcademicYear'
import AcademicYearMulti from './AcademicYearMulti'
import { fetchDataOfCourses, adminTest, adminDeleteCourseTaught } from '../Firebase/firestore'
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
  const [isUserAdmin, setIsUserAdmin] = useState(0)

  const { userSnapshot } = useUserDatabse()


  const handleLoadData = () => {
    setData([])
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

  const onDelete = (data) => {

    if(isUserAdmin){
      adminDeleteCourseTaught(data).then(() => {
        console.log("successfully DELETED!!!")
        handleLoadData()
  
      }
  
      )
      .catch((error)=>{
        console.log("not able to delete the course: ", error)
      })
    }
    else{
      console.log("Display moodle for you are not admin")
    }
    


  }


  useEffect(() => {

    adminTest()
      .then((res) => {
        setIsUserAdmin(res)
      })
      .catch(e => console.log("error in checking admin", e))
  }, [])

  // useEffect(()=>{
  //   console.log("rerendered using useEffect")
  // },[data])

  // console.log(userSnapshot)

  return (
    <>


      <div className='h-full bg-transparent grid grid-cols-12 p-2 gap-2 bg-cover bg-center bg-fixed ' style={{ backgroundImage: 'url("../../public/Dashboard_page_gradient.jpg")' }}>


        <div className=' bg-opacity-50 h-full rounded-md gap-4 flex flex-col col-span-3'>

          <AcademicYearMulti setAcadYear={setQueryAcadYears} />
          <div className='flex flex-col h-[585px] color-scrollbar overflow-scroll'>

            {userSnapshot.map((userSnap) => {
              // console.log(userSnap)
              return (<div key={userSnap.createdat} className='mx-2 my-1'>
                <UserTab username={userSnap} setSelectedUsers={setSelectedUsers} selectAll={selectAll} />
              </div>)
            })}
          </div>
          {/* <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => setSelectAll(true)}
          >{selectAll ? "Deselect All" : "Select All"}</button> */}




        </div>


        <div className='bg-transparent col-span-9 rounded-md h-[750px] color-scrollbar overflow-scroll' >
          <button className='bg-blue-400 px-6 py-2 mx-4 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => handleLoadData()}
          >Load Data</button>

          <button className='bg-button-primary px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
            onClick={() => setSelectAll(prev => !prev)}
          >{selectAll ? "Deselect All" : "Select All"}</button>



          <div className='w-full bg-cyan-700 flex-col  flex-nowrap'>
            <div className='flex w-full flex-nowrap'>
              <div className='max-w bg-gray-700 border-2 p-3 flex-1 min-w-16'>
                Name
              </div>
              <div className='w-[700px] bg-gray-700 p-3 border-2'>
                Courses
              </div>
              <div className='w-[100px] bg-gray-700 p-3 border-2'>
                Load
              </div>
            </div>

            {data.map((i, index) => (

              <div className='flex w-full flex-nowrap' key={index}>

                <div className='w-[100px] bg-gray-700 bg-opacity-25  border-2 p-3 flex-1 min-w-16'>
                  {i.name}
                </div>
                <div className='w-[700px] bg-gray-700 bg-opacity-25  border-2'>

                  {i.courses.map((course, index1) => (<div key={index1 * 2} className='flex  outline-2 outline-lime-400'>

                    <div className='w-[400px] p-2'>

                      <h1 key={index1 * 2}>{course.courseName}</h1>

                    </div>

                    <div className='flex-1 p-2'>

                      <h1 key={index1 * 2}> {course.academicYear} </h1>

                    </div>

                    <button
                      className="text-red-900 hover:text-red-700 focus:outline-none flex align-top p-2 "
                      onClick={()=>{
                        onDelete({uid: course.uid, docid: course.docid})

                      
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                  </div>))}
                  <br />

                </div>
                <div className='w-[100px] bg-gray-700 bg-opacity-25  p-3 border-2'>
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
