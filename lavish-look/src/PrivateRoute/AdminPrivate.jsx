// import { Children } from "react"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AdminAuthContext } from "../Context/AdminAuth"





export default function AdminPrivate({children}){

let {adminAuth}=useContext(AdminAuthContext)
   if(!adminAuth){
    return <Navigate to="/adminLogin" />
   }
    return children
}