import React,{useState} from 'react'
import { FaRegUserCircle } from "react-icons/fa";


function Auth() {
  const [authStatus,setAuthStatus]= useState(false)
  return (
    <>
    <div className="w-full min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqBwB6nm3ECEXZ4WiI2qdX4ZRPX2BUcE3NSWGk23FQ6rIDi6THweMT5_F&s=10')] bg-no-repeat bg-cover ">
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-extrabold text-white my-10">BOOK STORE</h1>
        <div className="bg-gray-900 text-white p-10 w-[50%]">
          <p className="flex justify-center">
            <FaRegUserCircle className='text-9xl'/>
          </p>
          {
            authStatus?
            <h1 className="text-center text-2xl mb-3 font-bold">Register</h1>
            :
            <h1 className="text-center text-2xl mb-3 font-bold">Login</h1>
          }
          
          <div className="my-10 border-b-2">
            <input type="email" placeholder='Email' className='bg-white text-black p-3 w-full rounded-lg my-2' />
            {
              authStatus&&
              <input type="text" placeholder='Username' className='bg-white text-black p-3 w-full rounded-lg my-2' />

            }
            
            <input type="password" placeholder='Passsword' className='bg-white text-black p-3 w-full rounded-lg my-2' />
            <div className="flex justify-between mb-3">
              <p className="text-amber-600">Never share your passwords with others</p>
              {
                !authStatus&&
                <a href="#" className='text-white underline'>Forgot Password</a>

              }
              
            </div>
            <button className='p-3 bg-green-600 w-full rounded-md mb-3'>Login</button>
          </div>
          {/* Google Auth */}
          <div>

          </div>
          <div className="flex justify-center gap-3">
            {
              authStatus?
              <p>Already a user?</p>
              :
              <p> Are you a new user?</p>
            }
            {
              authStatus?
              <p className="text-blue-600 underline cursor-pointer" onClick={()=>{setAuthStatus(!authStatus)}}>Login Here</p>
              :
              <p className="text-blue-600 underline cursor-pointer" onClick={()=>{setAuthStatus(!authStatus)}}>Register Here!</p>

            }
           
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Auth