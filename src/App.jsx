import { useState } from 'react'
import './App.css'
import AcademicYear from './components/AcademicYear'
import Navbar from './components/Navbar'
import CourseDropdown from './components/CourseDropdown'

function App() {
  const currentAcadYear = "AY 2023 Sem II"
  const [acadYear, setAcadYear] = useState(currentAcadYear)

  return (
   <>
   <Navbar/>
   <div className='py-10 px-6'>
    <h1 className='text-4xl mb-5'>Calculator</h1>
      
    <AcademicYear lable="Academic Year" acadYear={acadYear} setAcadYear={setAcadYear}/>
    <CourseDropdown lable='Course' />
    


   </div>


   </>
  )
}

export default App