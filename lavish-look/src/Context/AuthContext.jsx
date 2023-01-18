


import { useState } from "react";
import { createContext } from "react";
export const Authcontext=createContext()




export default function ContextProvider({children}){

    let [isAuth,setIsauth]=useState(false)
    let [token,settoken]=useState('')
    function makeAuth(data){

        if(data.token!=""){
          
            setIsauth(true)
        }else{
            setIsauth(false)
        }
        
    }
    return(
        <Authcontext.Provider   value={{makeAuth}}  >
            {
                children
            }
        </Authcontext.Provider>
    )
}