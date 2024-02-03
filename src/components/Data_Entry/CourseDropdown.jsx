import React, { useState, useEffect } from 'react';
import courseData from "../Database/courseData";
import Select from 'react-select';

// console.log("loaded courseDropdown")

function CourseDropdown({lable ="",course,setCourse,setlecture,setTutorial,setPractical}) {

const settingCourse = (selectedOption)=>{
  console.log("This is selected option", selectedOption)

  setCourse(selectedOption.label)
  setlecture(selectedOption.lecture)
  setPractical(selectedOption.practical)
  setTutorial(selectedOption.tutorial)
  // setSelfStudy(selectedOption.selfStudy)
  // setCredits(selectedOption.credits)
  // console.log(selectedOption.lecture)
  // console.log(selectedOption.ltpse)

}

useEffect(()=>{
console.log("Rerendered")
},[course])


const defaultAY = courseData[Number(courseData.length)-1]

  return (
   
      <div className='flex items-center p-4'>
      <h2 className='w-1/4'>{lable}</h2>
      

      {/* Select component is taken from the react-select package
      Read the documentation from the react-select on npms website to see how to operate */}
      <Select
        value={courseData.filter(function(option) {
          return option.label === course;
        })}
        onChange={settingCourse}
        options={courseData}
        placeholder="Select Course"
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

