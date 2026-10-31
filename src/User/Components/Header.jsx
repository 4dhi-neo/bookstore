import React,{useEffect, useState} from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AuthContext, { authContext } from '../../contextAPI/AuthContext';
import { useContext } from 'react';



import { Link } from 'react-router-dom';
import axiosInstance from '../../../api/axiosInstance';

function Header() {
  const [dropdown,setDropdown]=useState(false)
  const [token,setToken]=useState("")
  const [dp,setDp]=useState("")
  const [userName,setUserName]=useState("")
  const nav=useNavigate()
  const{setAuthUser}=useContext(authContext)

  useEffect(()=>{
      if(sessionStorage.getItem('token')&&sessionStorage.getItem('user')){
        const userToken=sessionStorage.getItem('token')
        const userObj =JSON.parse(sessionStorage.getItem('user'))
        console.log(userObj)
        setToken(userToken)
        setDp(userObj.picture)
        setUserName(userObj.username)
      }
  },[token])

  const logout=()=>{
    setAuthUser(false)
    sessionStorage.clear()
    nav('/auth')
  }

  
  return (
    <>
      <div className='w-full'>
        <div className='p-4 flex items-center justify-between'>

          <img
            src="/bookstoreicon.png"
            alt="icon"
            className='w-[50px]'
          />

          <h1 className='text-4xl font-bold'>
            BOOK STORE
          </h1>

          <div className='flex gap-2 items-center'>

            <FaInstagram />

            <FaXTwitter />

            <FaFacebook />
            {
              token== "" ?
               <Link
              to={'/auth'}
              className='flex gap-1 items-center border-2 px-1 py-2 rounded-lg hover:bg-black hover:text-white'
            >
              <FaUser />{' '}
              Login
            </Link>
            :
             <div className="relative">
              <button className='flex gap-1 items-center border-2 px-1 py-2 rounded-lg' onClick={()=>{setDropdown(!dropdown)}}>
                {
                  dp==""?
                  <>
                   <FaUserCircle />{' '}
                   </>
                   :
                   dp.includes("lh3.googleusercontent.com")?
                   <img src={dp} alt="" width={'30px'} className='rounded-full'/>
                   :
                   <img src={`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" width={'50px'} />

                }
                {
                  userName=="" ?
                  <>
                   user{' '}
                  </>
                  :
                  <>{userName}</>

                }
               
               
                {
                  dropdown?
                  <FaCaretDown />
                  :
                  <FaCaretUp />

                }

              </button>
              {
                dropdown&&
                <div className="border-2 rounded-sm absolute bg-white">
                  <Link to={'/profile'} className='border-b-2 px-1 hover:bg-gray-300'>profile</Link>
                  <p className="text-red-600 px-1 hover:bg-gray-300" onClick={logout}>Logout</p>
                </div>
              }
            </div>


            }

           
           

          </div>

        </div>
      </div>
      {/* Navbar */}
      <div className="w-full bg-gray-800 text-white flex justify-center gap-4 py-3.5">
        <Link to={'/'}>Home</Link>
        <Link to={'/books'}>Books</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </>
  )
}

export default Header