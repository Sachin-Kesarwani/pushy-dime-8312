
import {Routes,Route} from "react-router-dom"





import Home from "./Home"
import Login from "../Navbar/Login"
import Signup from "../Navbar/Signup"
import Shoes from "../NavPages/Shoes"
import Womens from "../NavPages/Womens"
import Mens from "../NavPages/Men"
import Kids from "../NavPages/Kids"
import Sleeper from "../NavPages/Sleeper"
import Cart from "../NavPages/Cart"
import MensAndwomensSinglePage from "../SinglePages/MensWomensSingles"
import WomensSinglePage from "../SinglePages/WomensSingle"
import KidsSinglePage from "../SinglePages/KidsSingle"
import ShoesSinglePage from "../SinglePages/ShoesSingle"
import SleeperSinglePage from "../SinglePages/SleeperSingle"

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/mens" element={<Mens/>}/>
            <Route path="/womens" element={<Womens/>}/>
            <Route path="/sleeper" element={<Sleeper/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/shoes" element={<Shoes/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/mens&womenSinglePage/:id" element={<MensAndwomensSinglePage/>}/>
            <Route path="/womensinglrpage/:id" element={<WomensSinglePage/>}/>
            <Route path="/kidssinglepage/:id" element={<KidsSinglePage/>}/>
            <Route path="/shoessinglepage/:id" element={<ShoesSinglePage/>}/>
            <Route path="/sleepersinglepage/:id" element={<SleeperSinglePage/>}/>
        </Routes>
        </>
    )
}