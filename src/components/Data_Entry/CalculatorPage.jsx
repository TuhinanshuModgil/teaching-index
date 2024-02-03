import { useState, useEffect } from 'react'
import AcademicYear from './AcademicYear'
import { NavLink, useNavigate } from 'react-router-dom'

// import { trialFunction1 } from '../Firebase/firestore';

import CourseDropdown from './CourseDropdown'
import NumberSetter from './NumberSetter'
import { auth } from '../Firebase/firebase'
import { addCourseToUser, addCourseToUser1, addUserCorse, trialFunction1 } from '../Firebase/firestore'
import { useAuth } from '../Context/AuthContext'
import { useUserDatabse } from '../Context/UserContext';

function CalculatorPage() {
  // console.log("loaded calculator page")
  const currentAcadYear = "2023-2024 Sem 2, Jan-May 24"

  // stating all the variables on which the formula dependends
  const [acadYear, setAcadYear] = useState(currentAcadYear)
  const [lecture, setLecture] = useState(1);
  const [turorial, setTutorial] = useState(1);
  const [practical, setPractical] = useState(1);
  const [courseStrength, setCourseStrength] = useState(25)
  const [faculty, setFaculty] = useState(1)
  const [course, setCourse] = useState(null);
  const [teachingIndex, setTeachingIndex] = useState(0)
  const [displayMoodleSuccess, setDisplayMoodleSuccess] = useState(0)
  const [displayMoodleFailure, setDisplayMoodleFailure] = useState(0)
  // const [selfStudy, setSelfStudy] = useState(1);
  // const [credits, setCredits] = useState(1);

  // function that will run when we will click calculate
  // It contains the formula to calculate the teaching Index

  const { user } = useAuth()
  const { setUserTaughtCoures } = useUserDatabse()
  const navigate = useNavigate();

  const calculateIndex = () => {
    const formula = (lecture * 1 + turorial * 0.5 + practical * 0.5 + courseStrength * 0.01) / (faculty)
    setTeachingIndex(prev => formula)
  }

  const saveTaughtCourse = async() => {


    calculateIndex();
    const formula = (lecture * 1 + turorial * 0.5 + practical * 0.5 + courseStrength * 0.01) / (faculty)
    console.log("calculated index: ", teachingIndex)
    const courseAdded = await addCourseToUser1({
      courseName: course,
      teachingIndex: formula,
      academicYear: acadYear

    })

    if(courseAdded){
      // display course success moodle
      console.log("Course added succesfully")
      setDisplayMoodleSuccess(1)
      setTimeout(()=>{
        setDisplayMoodleSuccess(0)
      },2000 )
      // reset the form
      setCourse("")
      setFaculty(1)
      setCourseStrength(25)
      setTeachingIndex(0)





    }
    else{
      // display course failure moodle
      console.log("Failed to add course")
      setDisplayMoodleFailure(1)
      setTimeout(()=>{
        setDisplayMoodleFailure(0)
      },3000 )
    }
  }
  useEffect(() => {
    console.log("use E 1")
    trialFunction1().then((res) => {
      setUserTaughtCoures(res)


    })
      .catch(e => console.log("error in setting userTaughtCourses", e))
  }, [user])

 

  const consoleLog = () => {
    // const user = auth.currentUser;
    // trialFunction1()
    console.log(user.uid)


  }




  return (
    <>

      <div className='py-10 px-6'>
        <h1 className='text-4xl mb-5'>Data Entry</h1>


        {displayMoodleSuccess?<div className='w-full h-9 rounded-lg bg-green-500 flex items-center text-gray-800 text-lg font-bold'><h1 className='mx-auto'>Course Added Succesfully !!</h1></div>: <div></div>}
        {displayMoodleFailure?<div className='w-full h-9 rounded-lg bg-red-500 flex items-center text-gray-800 text-lg font-bold'><h1 className='mx-auto'>Failed to Add Course !!</h1></div>: <div></div>}

        <AcademicYear lable="Academic Year" acadYear={acadYear} setAcadYear={setAcadYear} />
        <CourseDropdown
          lable="Course"
          course={course}
          setCourse={setCourse}
          setlecture={setLecture}
          setPractical={setPractical}
          setTutorial={setTutorial}
          

        />
        <NumberSetter label='Strength' number={courseStrength} setNumber={setCourseStrength} />
        <NumberSetter label='Faculty' number={faculty} setNumber={setFaculty} />

        <div className='flex flex-row gap-5'>
          <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium'
            onClick={calculateIndex}
          >Calculate</button>
          {/* <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium'
            onClick={()=>console.log(course)}
          >Console Log</button> */}
          <button className='bg-gray-600 px-6 py-2 rounded-md shadow-md my-6 font-medium'
            onClick={saveTaughtCourse}
          >Save</button>
        </div>


        <h1>{teachingIndex}</h1>





      </div>


    </>
  )
}

export default CalculatorPage