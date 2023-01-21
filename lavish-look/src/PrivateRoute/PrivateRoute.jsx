import { useToast,Box } from "@chakra-ui/react"
import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Authcontext } from "../Context/AuthContext"





export default function PrivateRoute({children}){
let navigate=useNavigate()
let toast=useToast()
let {isAuth}=useContext(Authcontext)
console.log(isAuth)
let LSdata=JSON.parse(localStorage.getItem("Auth"))
// alert(LSdata.status)
// alert(isAuth)
if(!isAuth){

    return <Navigate to="/signup"/>
//   toast({
//     position: 'top-left',
//     render: () => (
//       <Box rounded={"md"} color='white' p={3} bg='orange.500'>
//       You have not Login 
//       </Box>
//     ),
//   })

}


    return children
}