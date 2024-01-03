import { createContext, useContext, useState } from "react";


const LoadContext = createContext()




export const LoadContextprovider = ({children})=>{
    const [courses, setCourses] = useState([])
    
    const addCourses = (course)=>{
        setCourses((prev)=>([{id: Date.now(),...course},...prev]))
    } 

    const updateCourse = (id, course)=>{
        setCourses((prev) => prev.map((prevCourse) => (prevCourse.id === id ? course : prevCourse )))
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