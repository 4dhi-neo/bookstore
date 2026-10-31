import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div className='h-screen bg-white'>
      <div className="h-100 flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl font-extrabold">Page Not Found 404!</h1>
        <img src="https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif" alt="404"
        className='h-[60%]' />
        <Link to={'/'} className='bg-amber-600 p-3 text-white rounded-2xl hover:bg-amber-800'>Go To Home Page</Link>
      </div>

    </div>
    </>
  )
}

export default Pnf