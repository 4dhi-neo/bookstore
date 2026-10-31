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

//add book
export const addBookApi=async(data)=>{
    return await apiService("POST","/books",data)
}

//latest books

export const latestBookApi=async()=>{
    return await apiService("GET","/latest-books")
}

//booklist for buyers
export const bookListApi=async()=>{
    return await apiService("GET","/booklist")
}

//user addded books
export const userAddedBookApi=async()=>{
    return await apiService("GET","/user-books")
}

//delete user added books
export const deleteBookApi=async(id)=>{
    return await apiService("DELETE",`/delete-books/${id}`)
}

//purchased books

export const purchasedBookApi=async()=>{
    return await apiService("GET","/purchased-books")
}

//book by id

export const getBookByIdApi=async(id)=>{
    return await apiService("GET",`/books/${id}`)
}

//book payment
export const bookPaymentApi=async(id)=>{
    return await apiService("GET",`/payment/${id}`)
}


//admin all book list

export const adminAllBookApi=async()=>{
    return await apiService("GET","/admin/allBooks")
}

//admin approve book

export const adminApproveBookApi=async(id)=>{
    return await apiService("GET",`/admin/approve/${id}`)
}

// list all users admin


export const adminAllUserApi=async()=>{
    return await apiService("GET","/admin/allusers")
}


//admin profile edit

export const adminProfileEditApi=async(data)=>{
    return await apiService("PUT","/admin/profile-update",data)
}


//Ai generate abstract for book
export const generateBookDetailsAIApi=async(data)=>{
    return await apiService("POST","/book/genai",data)

}

