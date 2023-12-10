import React, { useState } from 'react';
import courseData from "./Database/courseData";
import Select from 'react-select';


function CourseDropdown({lable ="",course,setCourse,setlecture,setTutorial,setPractical,setSelfStudy,setCredits}) {

const settingCourse = (selectedOption)=>{
  setCourse(selectedOption.label)
  // console.log(selectedOption.ltpse)

}

const defaultAY = courseData[Number(courseData.length)-1]

  return (
   
      <div className='flex items-center p-4'>
      <h2 className='w-1/4'>{lable}</h2>
      

      {/* Select component is taken from the react-select package
      Read the documentation from the react-select on npms website to see how to operate */}
      <Select
        defaultValue={defaultAY}
        onChange={settingCourse}
        options={courseData}
        placeholder="Select Course"
        styles={{  
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'red',
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
            primary25: 'hotpink',
            primary: 'black',
          },
        })}
      />
      
    </div>   
    
  )
}

export default CourseDropdown

