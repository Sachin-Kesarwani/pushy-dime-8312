


import { useState } from "react";
import { createContext } from "react";
export const Authcontext=createContext()




export default function ContextProvider({children}){
//localStorage.setItem("Auth",JSON.stringify(false))
// let status=JSON.parse(localStorage.getItem("Auth"))||{status:false}
//    let [isAuth,setIsauth]=useState(status)
let [isAuth,setIsauth]=useState(false)
    let [token,settoken]=useState('')
    function makeAuth(data){
      
        if(data.token!=""){
            // data.status=true
            //localStorage.setItem("Auth",JSON.stringify(data))
           setIsauth(true)
        }else{
            // setIsauth({status:false})
            setIsauth(false)
        }
        
    }

    function Logout(){
        // let data=JSON.parse(localStorage.getItem("Auth"))
        // data=null
        // localStorage.setItem("Auth",JSON.stringify(data))
        setIsauth(false)
    }
    // Logout()
    //localStorage.setItem("Auth",JSON.stringify(isAuth))
    return(
        <Authcontext.Provider   value={{makeAuth,Logout,isAuth}}  >
            {
                children
            }
        </Authcontext.Provider>
    )
}