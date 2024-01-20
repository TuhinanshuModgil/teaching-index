import { useState,useEffect } from 'react'
import AcademicYear from './AcademicYear'
// import { trialFunction1 } from '../Firebase/firestore';

import CourseDropdown from './CourseDropdown'
import NumberSetter from './NumberSetter'
import { auth } from '../Firebase/firebase'
import { addCourseToUser, addCourseToUser1, addUserCorse, trialFunction1 } from '../Firebase/firestore'
import { useAuth } from '../Context/AuthContext'
import { useUserDatabse } from '../Context/UserContext';

function CalculatorPage() {
  // console.log("loaded calculator page")
  const currentAcadYear = "AY 2023 Sem II"

  // stating all the variables on which the formula dependends
  const [acadYear, setAcadYear] = useState(currentAcadYear)
  const [lecture, setLecture] = useState(1);
  const [turorial, setTutorial] = useState(1);
  const [practical, setPractical] = useState(1);
  const [courseStrength, setCourseStrength] = useState(25)
  const [faculty,setFaculty] = useState(1)
  const [course, setCourse] = useState(1);
  const [teachingIndex, setTeachingIndex] = useState(0)
  // const [selfStudy, setSelfStudy] = useState(1);
  // const [credits, setCredits] = useState(1);
  
  // function that will run when we will click calculate
  // It contains the formula to calculate the teaching Index

  const {user} = useAuth()
  const{setUserTaughtCoures} = useUserDatabse()

  const calculateIndex = ()=>{
    const formula = (lecture*1 + turorial*0.5 + practical*0.5 + courseStrength*0.01)/(faculty)
    setTeachingIndex(formula)
  }

  const saveTaughtCourse = ()=>{


    calculateIndex();
    addCourseToUser1({
      courseName: course,
      teachingIndex,
      academicYear:acadYear
      
    })
  }
  useEffect(()=>{
    console.log("use E 1")
    trialFunction1().then((res)=>{
      setUserTaughtCoures(res)
      
      
    })
    .catch(e => console.log("error in setting userTaughtCourses", e))
  },[user])

  const consoleLog = ()=>{
    // const user = auth.currentUser;
    // trialFunction1()
    console.log(user.uid)


  }
  
  
  
  
  return (
   <>
   
   <div className='py-10 px-6'>
    <h1 className='text-4xl mb-5'>Data Entry</h1>
    
    <AcademicYear lable="Academic Year" acadYear={acadYear} setAcadYear={setAcadYear}/>
    <CourseDropdown 
    lable='Course' 
    setCourse={setCourse} 
    setlecture={setLecture} 
    setPractical={setPractical}
    setTutorial={setTutorial}
    
    />
    <NumberSetter label='Strength' number={courseStrength} setNumber={setCourseStrength}/>
    <NumberSetter label='Fuculty' number={faculty} setNumber={setFaculty} />

    <div className='flex flex-row gap-5'>
    <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
    onClick={calculateIndex}
    >Calculate</button> 
    <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
    onClick={consoleLog}
    >Console Log</button> 
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