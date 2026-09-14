import React from 'react'
import { IoIosLogOut } from "react-icons/io";


function AdminHeader() {
  return (
    <>
    <div className="w-full">
      <div className="w-full p-3 flex justify-between">
        <div className="flex gap-3 items-center">
          <img src="/bookstoreicon.png" alt="icon" className='w-[60px]' />
          <h1 className="text-3xl">BOOK STORE</h1>
        </div>
        <button className='flex gap-1 items-center p-3 border-2 rounded-lg hover:bg-black hover:text-white'>
          Logout
          <IoIosLogOut/>
        </button>
      </div>
      <div className="bg-black w-full p-1.5">
        <marquee behavior="" direction="">
          <h1 className="text-white">Welcome, Admin! You're all set to manage the system</h1>
        </marquee>
      </div>
    </div>
    </>
  )
}

export default AdminHeader