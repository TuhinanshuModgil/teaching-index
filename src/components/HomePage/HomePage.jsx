import React, { useEffect, useState } from 'react'
import UserTab from '../Dashboard/UserTab'
import { useUserDatabse } from '../Context/UserContext'
import UserTaughtCourseCard from './UserTaughtCourseCard';
import { trialFunction1 } from '../Firebase/firestore';
import { useAuth } from '../Context/AuthContext';

function HomePage() {
  // console.log("loaded haome page")

  const { userSnapshot,userTaughtCourses,setUserTaughtCoures } = useUserDatabse();
  const {user} = useAuth()
  const [refreshKey, setRefreshKey] = useState(1)
  const [cards, setCards] = useState([])
  console.log("After Loading User Taught courses", userTaughtCourses)


  useEffect(()=>{
    setCards(userTaughtCourses)
  },[userTaughtCourses])
 




  return (
    <>
      <div className='w-full  flex bg-black/20 flex-wrap justify-start items-center gap-2 p-2'>
        {/* <h1 className='text-white text-center p-10 w-1/4 h-1/4'>The Home Page</h1> */}
        {/* <UserTab/> */}
        
        {cards.map((userCourse,i) => {
          console.log("tried to card")
          return (
          <div key={userCourse.docid}> 
            <UserTaughtCourseCard courseName={userCourse.courseName} academicYear={userCourse.academicYear} load={userCourse.teachingIndex} docid ={userCourse.docid}/>
          </div>
          )
        })
        }
        

       
        

      </div>
      {/* <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
          onClick={() => setRefreshKey(refreshKey+1)}
        >Refresh</button>
        <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
          onClick={() => console.log("this is userTaughtCourses ", userTaughtCourses)}
        >User Log</button>
        <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
          onClick={() => console.log("this is Cards ", cards)}
        >Cards Log</button> */}

    </>
  )
}

export default HomePage
