import React, { useEffect, useState } from 'react';
import courseData from "../Database/courseData";
import Select from 'react-select';


function CourseDropdown({lable ="",course,courseCode,setCourse,setlecture,setTutorial,setPractical,setSelfStudy,setCredits,setCourseCode}) {

const settingCourse = (selectedOption)=>{
  setCourse(selectedOption.label)
  setCourseCode(selectedOption.value)
  setlecture(selectedOption.lecture)
  setPractical(selectedOption.practical)
  setTutorial(selectedOption.tutorial)
  // setSelfStudy(selectedOption.selfStudy)
  // setCredits(selectedOption.credits)
  // console.log(selectedOption.lecture)
  // console.log(selectedOption.ltpse)

}
 
const runDefault = ()=>
{
  let dataIndex = 0;
  for(let i =0; i <courseData.length;i++){
    if(courseData[i].label===course){
      dataIndex = i
      console.log(dataIndex)
    }
  }

  return dataIndex
}

// useEffect(()=>
//     {
      
//       for(let i =0; i <courseData.length;i++){
//       if(courseData[i].label===course){
//         dataIndex = i
//         console.log(dataIndex)
//       }
//     }})


// const defaultCourse =  courseData.filter((obj)=>(obj.label === course))


const defaultAY = courseData[Number(courseData.length)-1]

  return (
   
      <div className='flex items-center p-4 gap-5'>
      <h2 className='w-1/4'>{lable}</h2>
      

      {/* Select component is taken from the react-select package
      Read the documentation from the react-select on npms website to see how to operate */}
      <Select
        
        onChange={settingCourse}
        options={courseData}
        defaultValue = {courseData[runDefault()]}
        
        styles={{  
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'blueviolet',
            width: '300px',
            
          }),
          option:(baseStyles,state)=>({
            ...baseStyles,
            color: state.isSelected?'white':'black',
          })
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'green',
            primary: 'black',
          },
        })}
      />
      
    </div>   
    
  )
}

export default CourseDropdown

