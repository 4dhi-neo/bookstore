import React from 'react'

function ProfileUpdate({setSidebar}) {
  return (
    <div className='h-screen w-screen fixed z-1 top-0 bg-[rgba(0,0,0,0.5)]'>
        <div className="w-[50vh] h-screen bg-white border-2 rounded-lg text-xl">
          <div className='bg-black text-white px-2 py-3 rounded-t-lg font-bold flex justify-between'>
            <h1 className='text-2xl'>Edit Profile</h1>
            <button onClick={()=>{setSidebar(false)}}>X</button>
          </div>
          <div className="h-full px-5 ">
            <label htmlFor="fileinp">
              <input type="file"name='' className='hidden' id='fileinp' />
              <img src="https://static.vecteezy.com/system/resources/thumbnails/000/379/559/small/Universal__2838_29.jpg" alt="profileicon" className='w-full' />
            </label>
            <input type="email" placeholder='Email' className='bg-white border w-full p-1 mb-2' />
            <input type="password" placeholder='Password' className='bg-white border w-full p-1 mb-2' />
            <input type="text" placeholder='Bio' className='bg-white border w-full p-1 mb-2' />
            <div className="flex justify-between">
              <button className="px-2 py-1 bg-red-600 text-white rounded-lg">Cancel</button>
              <button className="px-2 py-1 bg-green-400  text-white rounded-lg">Update</button>
            </div>
          </div>
        </div>
            
    </div>
  )
}

export default ProfileUpdate