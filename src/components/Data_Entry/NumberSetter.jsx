import React from 'react'
// console.log("loaded number setter")

function NumberSetter({label="",number = 25, setNumber}) {

    // I need to do implement some filter so that only number inputs are given to the strenght field
    const settingNumber = (e)=>{
        setNumber(e.target.value)
    }

  return (
    <>
    <div className='flex items-center p-4'>
      <h2 className='w-1/4'>{label}</h2>
      <input type="number"  className='w-[300px] h-[36px] px-3 ' value={number} onChange={settingNumber}/>

    </div>

    </>
  )
}

export default NumberSetter
