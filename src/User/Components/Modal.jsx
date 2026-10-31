import React from 'react'
import axiosInstance from '../../../api/axiosInstance';

function Modal({ isOpen, onClose,images }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-lg mx-4">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              Uploaded Images
            </h2>

            <button
              onClick={onClose}
              className="text-2xl text-gray-500 hover:text-black"
            >
              &times;
            </button>
          </div>

          <div>
            {images?.length>0?
            <>
            <div className='flex gap-3 overflow-auto'>
            { 
                images.map(item=>(
                    <img src={`${axiosInstance.defaults.baseURL}/uploads/${item}`} width={'200pzx'} alt="" />
                ))
                
            }
            </div>
            </>
            :
            <h1 className='text-center-red-400'>No Images Available</h1>
            }
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Modal;