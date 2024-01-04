import { createContext, useContext, useState } from "react";


const LoadContext = createContext()




export const LoadContextprovider = ({children})=>{
    const [courses, setCourses] = useState([])
    
    const addCourses = (course)=>{
        console.log("yo")
        setCourses((prev)=>([
            {id: Date.now(),
             AY: course.AY,
             courseName: course.courseName,
             lectures: course.lectures,
             tutorials: course.tutorials,
             practicals: course.practicals,
             strength: course.strength,
             faculty: course.faculty,
             teachingLoad: course.teachingLoad 
            
            },
            ...prev]))
        console.log(courses)
    } 

    const updateCourse = (id, course)=>{
        setCourses((prev) => prev.map((prevCourse) => (prevCourse.id === id ? course : prevCourse )))
        console.log("ran update function")
    }

    const deleteCourse = (id) => {
        setCourses((prev) => prev.filter((Course) => Course.id !== id))
      }

    return (
        <LoadContext.Provider value={{addCourses,deleteCourse,updateCourse,courses}}>
            {children}
        </LoadContext.Provider>
    )
} 

export const useLoad = ()=> useContext(LoadContext)