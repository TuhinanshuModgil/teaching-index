import { useState } from 'react'
import AcademicYear from './AcademicYear'
import CourseCard from './CourseCard'
import { useLoad } from '../Context/LoadContext'

function CalculatorPage() {
  const currentAcadYear = "AY 2023 Sem II"
  const {courses, addCourses} = useLoad()

  // stating all the variables on which the formula dependends
  
  const [acadYear, setAcadYear] = useState(currentAcadYear)
  const [teachingIndex, setTeachingIndex] = useState(0)
  const [numberCourses, setNumberCourses] = useState(0)

  function handleAddCourse(){
    addCourses({
      AY: acadYear,
      courseName:"",
      lectures: 0,
      tutorials: 0,
      practicals: 0,
      strength: 25,
      faculty: 1,
      teachingLoad: 0 

    })
  }

  function handleCalculateTotalIndex(){

    let totalLoad = 0; 
    for(let i =0; i <courses.length;i++){
      totalLoad += courses[i].teachingLoad
    }

    setTeachingIndex(totalLoad)
  }

  // function that will run when we will click calculate
  // It contains the formula to calculate the teaching Index
  


  // const calculateIndex = ()=>{
  //   const formula = (lecture*1 + turorial*0.5 + practical*0.5 + courseStrength*0.01)/(faculty)
  //   setTeachingIndex(formula)
  // }

  
  return (
   <>
   
    
   <div className='py-10 px-6'>
    <h1 className='text-4xl mb-5'>Calculator</h1>
    <div className='w-1/2 '>
    
    <AcademicYear lable="Academic Year" acadYear={acadYear} setAcadYear={setAcadYear}/>

    </div>
   
    {/*Loop and Add TodoItem here */}
    {courses.map((course) => (
      <div key={course.id}
      className='w-full'
      >
        <CourseCard 
          key={course.id} 
          cardID={course.id} 
          cardAcademicYear={acadYear} 
          cardCourse={course.courseName} 
          cardStrength={course.strength} 
          cardFaculty={course.faculty}
          cardPractical={course.practicals}
          cardTutorial={course.tutorials}
          cardLecture={course.lectures}
          />
      </div>
    ))}
    <div className='flex flex-row gap-5'>
    <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
    onClick={handleCalculateTotalIndex}
    >Calculate</button> 

    <button className='bg-gray-600 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
    onClick={handleAddCourse} 
    >Add Course</button>

    <button className='bg-gray-600 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
    >Save</button>
    </div>
    <button onClick={()=>(console.log(courses))}>console log</button>
    

    <h1>{teachingIndex}</h1>



    

   </div>


    
   </>
  )
}

export default CalculatorPage