import { useState } from 'react'
import './App.css'
import accountImage from './assets/SL.png'

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
   


   </>
  )
}

export default App