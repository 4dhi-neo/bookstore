import React,{use, useState} from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";



import { Link } from 'react-router-dom';

function Header() {
  const [dropdown,setDropdown]=useState(false)
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

            <Link
              to={'/auth'}
              className='flex gap-1 items-center border-2 px-1 py-2 rounded-lg hover:bg-black hover:text-white'
            >
              <FaUser />{' '}
              Login
            </Link>
            <div className="relative">
              <button className='flex gap-1 items-center border-2 px-1 py-2 rounded-lg' onClick={()=>{setDropdown(!dropdown)}}>
                <FaUserCircle />{' '}
                user{' '}
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
                  <p className="text-red-600 px-1 hover:bg-gray-300">Logout</p>
                </div>
              }
            </div>

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