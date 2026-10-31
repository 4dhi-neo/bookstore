import React, { createContext, useState,useEffect } from 'react';

export const authContext = createContext();

function AuthContext({ children }) {

    const [authUser, setAuthUser] = useState(false);
    const [role,setRole]=useState("")


    useEffect(()=>{
        if(sessionStorage.getItem('token')&& sessionStorage.getItem('user')){
            setAuthUser(true)
            setRole(JSON.parse(sessionStorage.getItem('user')).role)
        }
    },[])

    return (
        <>
            <authContext.Provider value={{ authUser, setAuthUser,role,setRole }}>
                {children}
            </authContext.Provider>
        </>
    );
}

export default AuthContext;