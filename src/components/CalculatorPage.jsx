import { useState } from 'react'
import AcademicYear from './AcademicYear'
import CourseDropdown from './CourseDropdown'
import NumberSetter from './NumberSetter'

function CalculatorPage() {
  const currentAcadYear = "AY 2023 Sem II"

  // stating all the variables on which the formula dependends
  const [lecture, SetLecture] = useState(1);
  const [turorial, SetTutorial] = useState(1);
  const [practical, setPractical] = useState(1);
  const [selfStudy, setSelfStudy] = useState(1);
  const [credits, setCredits] = useState(1);
  const [course, setCourse] = useState(1);
  const [acadYear, setAcadYear] = useState(currentAcadYear)
  const [courseStrength, setCourseStrength] = useState(25)
  const [faculty,setFaculty] = useState(1)
  const [teachingIndex, setTeachingIndex] = useState(0)

  // function that will run when we will click calculate
  // It contains the formula to calculate the teaching Index
  const calculateIndex = ()=>{
    const formula = (lecture*10 + turorial*7 + practical*5 + selfStudy*1 + credits*5 + courseStrength*0.2)/(faculty)
    setTeachingIndex(formula)
  }

  
  return (
   <>
   
   <div className='py-10 px-6'>
    <h1 className='text-4xl mb-5'>Calculator</h1>
    
    <AcademicYear lable="Academic Year" acadYear={acadYear} setAcadYear={setAcadYear}/>
    <CourseDropdown 
    lable='Course' 
    setCourse={setCourse} 
    setlecture={SetLecture} 
    setTutorial={SetTutorial} 
    setPractical={setPractical}
    setSelfStudy={setSelfStudy}
    setCredits={setCredits}
    />
    <NumberSetter label='Strength' number={courseStrength} setNumber={setCourseStrength}/>
    <NumberSetter label='Fuculty' number={faculty} setNumber={setFaculty} />
    <button className='bg-green-700 px-6 py-2 rounded-md shadow-md my-6 font-medium' 
    onClick={calculateIndex}
    >Calculate</button>

    <h1>{teachingIndex}</h1>



    

   </div>


   </>
  )
}

export default CalculatorPage