import React from 'react'
import { useState,useEffect } from 'react'
import axiosInstance from '../../../api/axiosInstance'
import { profileEditApi } from '../../services/allApi'
import { toast,ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



function ProfileUpdate({setSidebar}) {

  const [userData,setUserData]=useState({
  id:"",username:"",email:"",password:"",bio:"",role:""
})

const[existingPicture,setExistingPicture]=useState("")

const [fileType,setFileType]=useState(false)
const [preview,setPreview]=useState("")

const nav=useNavigate()

useEffect(()=>{
  if(sessionStorage.getItem('token')&&sessionStorage.getItem('user')){
    const user=JSON.parse(sessionStorage.getItem('user'))
    setUserData({...userData,email:user.email,username:user.username,role:user.role,bio:user.bio,id:user._id,picture:user.picture})
    setExistingPicture(user.picture)
  }
},[])

// console.log(userData)
// console.log(existingPicture)


const handleFileUpload=(e)=>{
  console.log(e.target.files[0])
  if(e.target.files[0].type.includes("image/")){
    setFileType(true)
    setUserData({...userData,picture:e.target.files[0]})
    setPreview(URL.createObjectURL(e.target.files[0]))
  }
  else{
    setFileType(false)

  }
}

const handleCancel=()=>{
  const user =JSON.parse(sessionStorage.getItem('user'))
  setUserData({...userData,email:user.email,username:user.username,role:user.role})
  setFileType(false)
  setPreview(false)
  setSidebar(false)
}
const handleProfileUpdate=async()=>{
  console.log(userData)
  const {username,email,password,bio}=userData
  if(!username || !email || !password || !bio){
    toast.warning("Enter Valid Inputs!!")
  }
  else{
    if(userData.picture){
      const formData=new FormData()
      formData.append('id',userData.id)
      formData.append('username',userData.username)
      formData.append('email',userData.email)
      formData.append('password',userData.password)
      formData.append('role',userData.role)
      formData.append('bio',userData.bio)
      formData.append('picture',userData.picture)
      const response=await profileEditApi(formData)
      console.log(response)
      if(response.status===200){
        toast.success("Profile Updated!!")
        setTimeout(()=>{
          handleCancel()
          nav('/auth')
        },2000)
      }
      else{
        toast.success("Something went wrong!!")
        handleCancel()
      }
    }
    else{
      const response=await profileEditApi(userData)
      console.log(response)
       if(response.status===200){
        toast.success("Profile Updated!!")
        setTimeout(()=>{
          handleCancel()
          nav('/auth')
        },2000)
      }
      else{
        toast.success("Something went wrong!!")
        handleCancel()
      }
    }
  }
}

  return (
    <div className='h-screen w-screen fixed z-1 top-0 bg-[rgba(0,0,0,0.5)]'>
        <div className="w-[50vh] h-screen bg-white border-2 rounded-lg text-xl">
          <div className='bg-black text-white px-2 py-3 rounded-t-lg font-bold flex justify-between'>
            <h1 className='text-2xl'>Edit Profile</h1>
            <button onClick={()=>{setSidebar(false)}}>X</button>
          </div>
          <div className="h-full px-5 ">
            <label htmlFor="fileinp">
              <input type="file"name='' onChange={(e)=>handleFileUpload(e)} className='hidden' id='fileinp' />
              {
                existingPicture==""?
                 <img src={preview?preview:"https://static.vecteezy.com/system/resources/thumbnails/000/379/559/small/Universal__2838_29.jpg"} alt="profileicon" className='w-full' style={{height:'250px'}} />
                 :
                 existingPicture.includes("lh3.googleusercontent.com")?
                 <img src={preview?preview:existingPicture} alt="pro-pic" className='w-full' style={{height:'250px'}} />
                 :
                 <img src={preview?preview:`${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="pro pic" className='w-full' style={{height:'250px'}} />

              }
              {
                !fileType && <span className='text-amber-500'>File must be image</span>
              }
             
            </label>
            <input type="email" placeholder='Email' value={userData.email} onChange={(e)=>{setUserData({...userData,email:e.target.value})}}  className='bg-white border w-full p-1 mb-2' />
            <input type="text" placeholder='Username' value={userData.username} onChange={(e)=>{setUserData({...userData,username:e.target.value})}} className='bg-white border w-full p-1 mb-2' />
            <input type="password" placeholder='Password' onChange={(e)=>{setUserData({...userData,password:e.target.value})}} className='bg-white border w-full p-1 mb-2' />
            <input type="text" placeholder='Bio'value={userData.bio} onChange={(e)=>{setUserData({...userData,bio:e.target.value})}} className='bg-white border w-full p-1 mb-2' />
            <div className="flex justify-between">
              <button onClick={handleCancel} className="px-2 py-1 bg-red-600 text-white rounded-lg">Cancel</button>
              <button onClick={handleProfileUpdate} className="px-2 py-1 bg-green-400  text-white rounded-lg">Update</button>
            </div>
          </div>
        </div>
       <ToastContainer position="top-left" autoClose={"3000"} />
    </div>
  )
}

export default ProfileUpdate