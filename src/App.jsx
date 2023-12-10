import { useState } from 'react'
import './App.css'
import accountImage from './assets/SL.png'
import Dropdown from './components/Dropdown'

function App() {
  const currentAcadYear = "AY 2023 Sem II"
  const [acadYear, setAcadYear] = useState(currentAcadYear)

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
      
    <Dropdown lable="Academic Year" acadYear={acadYear} setAcadYear={setAcadYear}/>

    
    
    

   </div>


   </>
  )
}

export default App