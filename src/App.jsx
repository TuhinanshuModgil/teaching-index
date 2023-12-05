import { useState } from 'react'
import './App.css'
import accountImage from './assets/SL.png'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <header className='py-6 px-6 flex justify-between items-center	'>
    <div className='flex gap-8'>
      <a href="/">Home</a>
      <a href="/">Calculate</a>
      <a href="/">Dashboard</a>
    </div>


    <div className='flex gap-8 items-center	'>
      <img src={accountImage} alt="image" className='w-10 h-10 object-cover rounded-full	' />
      <h3>Dr. Zin Chang Woo</h3>
    </div>
   </header>
   <div className='py-10 px-6'>
    <h1 className='text-4xl mb-5'>Calculator</h1>
    <div className='flex gap-4 items-center'>
    <h2>Academic Year</h2>  
    {/* <Dropdown/> */}
    <input type="text" name="city" list="cityname" className='p-2 flex items-center'/>
    <datalist id="cityname" className='w-full'>
      <option value="AY 2023 Sem-I" className='w-full'/> 
      <option value="AY 2023 Sem-II"/>
    </datalist>

    </div>
    
   </div>


   </>
  )
}

export default App