import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <>
    <Header/>
    <div className="min-h-[60vh]">
        <div className="grid grid-cols-2">
            <div className="flex justify-center">
                <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="failed" />
            </div>
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-2xl text-red-400">Something Went Wrong!</h1>
                <h1 className="text-3xl text-red-500">Payment Failed!!</h1>
                <Link to={'/'} className='underline text-blue-500'>{'<<'}Go Home</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentFailed