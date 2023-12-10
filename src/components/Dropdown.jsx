import React, { useState } from 'react';
import array from "./academicYear"
import Select from 'react-select';


function Dropdown({lable ="",acadYear,setAcadYear}) {

// the Data for the academic year is taken from the array in the acadmeicYear.js file
// I will try to move it to the backend once the database is set up


// the react-select takes the onChange function as a callback and passes it the object of options
// hence to be able to change the stage we can use that object to extract the value and then pass
// it to our use state hook's function
const settingAcadYear = (selectedOption)=>{
  setAcadYear(selectedOption.label)
  // console.log(selectedOption.ltpse)

}

const defaultAY = array[Number(array.length)-1]

  return (
   
      <div className='flex gap-8 items-center'>
      <h2>{lable}</h2>
      

      {/* Select component is taken from the react-select package
      Read the documentation from the react-select on npms website to see how to operate */}
      <Select
        defaultValue={defaultAY}
        onChange={settingAcadYear}
        options={array}
        placeholder="Select Academic year"
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

export default Dropdown

// -----My previous meathod to take input----
// {/* <input type="text" name="city" list="cityname" className='p-2 flex items-center' />
//         <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black/80 w-1/6"
//         value={acadYear}
//         onChange={(e)=>setAcadYear && setAcadYear(e.target.value)}
//         >
//         {/* Creating the options for academic year */}
//         {dropdownList.map((opt)=> {
//         return <option value={opt.ayYear} key={opt.ayYear}>{opt.ayYear}</option>
//         } )}
//         </select>
//         */}
