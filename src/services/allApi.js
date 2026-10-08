import { data } from "react-router-dom";
import apiService from "../../api/apiService";

//user registration
export const userRegisterApi=async(data)=>{
    return await apiService("POST","/register",data)
}

//user-login -> token generation
export const userLoginApi=async(data)=>{
    return await apiService("POST","/login",data)
}

//google-authentication -> token generation
export const googleAuthApi=async(data)=>{
    return await apiService("POST","/google-auth",data)
}

//profile edit

export const profileEditApi=async(data)=>{
    return await apiService("PUT","/profile-update",data)
}