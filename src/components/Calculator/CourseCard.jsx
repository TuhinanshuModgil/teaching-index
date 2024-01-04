import React,{useEffect, useState} from 'react'
import CourseDropdown from './CourseDropdown';
import NumberSetter from './NumberSetter';
import { useLoad } from '../Context/LoadContext';

function CourseCard({cardID, cardAcademicYear, cardStrength, cardFaculty, cardCourse,cardLecture=10101, cardTutorial=10101, cardPractical=10101}) {
  // Now each card has access to the id of the which was assigned to it
  // with this id it should know which course it belongs to
  
  const {updateCourse} = useLoad()

  // bringing course data

  // Initializing variables for the calculations
  const [lecture, SetLecture] = useState(cardLecture);
  const [tutorial, SetTutorial] = useState(cardTutorial);
  const [practical, setPractical] = useState(cardPractical);
  const [courseCode,setCourseCode] = useState("");
  const [course, setCourse] = useState(cardCourse);
  const [courseStrength, setCourseStrength] = useState(cardStrength)
  const [faculty,setFaculty] = useState(cardFaculty)  
  // const [selfStudy, setSelfStudy] = useState(1);
  // const [credits, setCredits] = useState(1);

  useEffect(()=>{

    const courseLoad = (lecture*1 + tutorial*0.5 + practical*0.5 + courseStrength*0.01)/(faculty)
  
    updateCourse(cardID,{
      cardID,
      AY: cardAcademicYear,
      lectures: lecture,
      tutorials: tutorial,
      practicals: practical,
      strength: courseStrength,
      faculty,
      teachingLoad: courseLoad


    })
  },
  [course,lecture,tutorial,practical,courseStrength,faculty])
  

  return (
    <div className='bg-gray-800 w-1/2 rounded-lg '>
       <CourseDropdown 
    lable='Course' 
    course={course}
    setCourse={setCourse} 
    setlecture={SetLecture} 
    setTutorial={SetTutorial} 
    setPractical={setPractical}
    setCourseCode = {setCourseCode}
    />
    
    <NumberSetter label='Strength' number={courseStrength} setNumber={setCourseStrength}/>
    <NumberSetter label='Faculty' number={faculty} setNumber={setFaculty} />
    </div>
  )
}

export default CourseCard