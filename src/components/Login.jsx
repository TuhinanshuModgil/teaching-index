import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from './Context/AuthContext';

console.log("loaded login")


function Login() {

  const [email, setEmail] = useState('');              
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {loginUser} = useAuth()

  const loginTheUser = async (e)=>{
    e.preventDefault();
    setError('');
    try {
      await loginUser(email, password);
      e.target.reset();
      navigate('/calculate')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <div className='flex w-full  justify-center items-center h-[900px] text-black/70 '>
      <div className='min-h-[50%] min-w-[50%] bg-white flex flex-col rounded-lg shadow-xl p-10'>
      <h1 className='text-2xl font-bold py-2'>Login to your account</h1>
      <p className='py-2'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
          </p>

      <form onSubmit={loginTheUser}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='border rounded-lg p-3 text-white'
            type='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium '>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3 rounded-lg text-white'
            type='password'
          />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white rounded-lg'>
          Login
        </button>
      </form>
      </div>
    </div>
  )
}

export default Login
