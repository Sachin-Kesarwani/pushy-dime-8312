





import { useState } from "react"
import { createContext } from "react"

export const AdminAuthContext=createContext()


export default function AdminContextProvider({children}){

let [adminAuth,setAdminAuth]=useState(false)

function makeAdminAuth(){
   setAdminAuth(true)
}
function LogoutAuth(){
setAdminAuth(false)
}




    return(
        <AdminAuthContext.Provider value={{makeAdminAuth,LogoutAuth,adminAuth}}>
            {
                children
            }
        </AdminAuthContext.Provider>
    )
}