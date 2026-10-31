import React,{createContext,useState} from 'react'

export const searchContext=createContext()

function SharedContext({children}) {

    const [search,setSearch]=useState("")

  return (
    <>
    <searchContext.Provider value={{search,setSearch}}>
        {children}
    </searchContext.Provider>
    </>
  )
}

export default SharedContext