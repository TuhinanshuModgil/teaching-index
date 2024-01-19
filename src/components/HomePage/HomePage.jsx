import React, { useEffect, useState } from 'react'
import UserTab from '../Dashboard/UserTab'
import { useUserDatabse } from '../Context/UserContext'
import UserTaughtCourseCard from './UserTaughtCourseCard';
import { trialFunction1 } from '../Firebase/firestore';

function HomePage() {
  const { userSnapshot, user,userTaughtCourses } = useUserDatabse();
  const [cards, setCards] = useState([])



  
 




  return (
    <>
      <div className='w-full h-screen flex-col bg-black/20 flex justify-center align-middle items-center gap-1'>
        {/* <h1 className='text-white text-center p-10 w-1/4 h-1/4'>The Home Page</h1> */}
        {/* <UserTab/> */}
        
        {userTaughtCourses.map((userCourse,i) => {
          console.log("tried to card")
          return (
          <div key={i}> 
            <UserTaughtCourseCard courseName={userCourse.courseName} academicYear={userCourse.academicYear} load={userCourse.teachingIndex} />
          </div>
          )
        })

        }

        {cards}
        <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
          onClick={() => handleClg()}
        >console Log</button>
        <button className='bg-green-700 px-6 py-2 rounded-md h-10 shadow-md my-6 font-medium'
          onClick={() => console.log("this is userTaughtCourses ",userTaughtCourses)}
        >console Log</button>



      </div>
    </>
  )
}

export default HomePage
