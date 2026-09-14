import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <>
    <div className="max-w-screen bg-gray-800 text-white py-3 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div><h4 className="text-md font-bold mb-3">ABOUT US</h4>
      <p className='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima atque quod veniam sit! Voluptates voluptas, molestias reprehenderit totam ex accusantium vitae aliquid reiciendis cupiditate, sequi sit asperiores, vel perferendis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad!
      </p>
      </div>
      <div>
        <h4 className="font-bold text-md mb-3">NEWSLETTER</h4>
        <p className="mb-2">Stay updated with our latest trends</p>
        <div className="flex">
          <input type="text" placeholder='Email' className='bg-white text-gray-700 py-2' />
          <button className='bg-orange-400 py-2 px-1 border-2 border-orange-400'>
            <FaArrowRight/>
          </button>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-md mb-3">FOLLOW US</h4>
        <p className="mb-2">Let us be social</p>
        <div className="flex gap-2 items-center">
            <div className='flex gap-2 items-center'>

            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
            <FaLinkedin />

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer