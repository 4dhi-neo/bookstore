import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (
        <>
    <Header/>
    <div className="min-h-[60vh]">
        <div className="grid grid-cols-2">
            <div className="flex justify-center">
                <img src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="success" />
            </div>
            <div className="flex justify-center flex-col items-center">
                <h1 className="text-3xl text-green-500">Payment Success!!</h1>
                <Link to={'/'} className='underline text-blue-500'>{'<<'}Go Home</Link>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentSuccess