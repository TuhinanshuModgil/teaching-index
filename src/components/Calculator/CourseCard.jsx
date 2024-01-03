import React,{useState} from 'react'
import CourseDropdown from './CourseDropdown';
import NumberSetter from './NumberSetter';
import { useLoad } from '../Context/LoadContext';

function CourseCard() {
  const {courses} = useLoad()

  const [lecture, SetLecture] = useState(1);
  const [turorial, SetTutorial] = useState(1);
  const [practical, setPractical] = useState(1);
  const [selfStudy, setSelfStudy] = useState(1);
  const [credits, setCredits] = useState(1);
  const [course, setCourse] = useState(1);
  const [courseStrength, setCourseStrength] = useState(25)
  const [faculty,setFaculty] = useState(1)  
  

  return (
    <div className='bg-gray-800 w-1/2 rounded-lg '>
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
    <NumberSetter label='Faculty' number={faculty} setNumber={setFaculty} />
    </div>
  )
}

export default CourseCard
