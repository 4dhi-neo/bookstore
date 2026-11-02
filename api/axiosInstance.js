import axios from "axios";

const axiosInstance=axios.create({
    // baseURL:"http://localhost:3000",
    baseURL:"https://bookstore-backend-3r7x.onrender.com",
    timeout:5000
})

//request interceptor :append header if token is present
axiosInstance.interceptors.request.use(
    (config)=>{
        const token=sessionStorage.getItem('token')
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

//response Interceptor :Handling global/common errors
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response Recieved!!")
        return response
    },(error)=>{
        if(error.response){
            const status=error.response.status
            if(status===401){
                console.log("Unauthorized access!!")
            }
            else if(status===404){
                console.log("API not found!!")
            }
            else if(status===500){
                console.log("Server Error!!")
            }
            else if(error.request){
                console.log("No response from server!!")
            }
            else{
                console.log("Error:"+error.message)
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance