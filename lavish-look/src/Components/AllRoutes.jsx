
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Signup from "../Navbar/Signup"
import Login from "../Navbar/Login"






export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </>
    )
}