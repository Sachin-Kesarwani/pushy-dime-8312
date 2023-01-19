import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import {Image,Box, Button, Heading} from "@chakra-ui/react"
import axios from "axios"
import EachCard from "./Eachcard"
import Loadingindicator from "./Loading"
import Pagination from "./Pagination"


export default function Mens(){
let [Loading,setLoading]=useState(false)
let [page,setPage]=useState(1)
let [menspro,setmenspro]=useState([])
let [totalProucts,setTotalProducts]=useState(1)

function getNumofproducts(){
   
    axios.get("https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens")
    .then((res)=>{
      
        console.log(res.data.length)
        setTotalProducts(res.data.length)
       
      
    })
}

let  numOfbtn=new Array(totalProucts)

for(let i=1;i<=Math.ceil(totalProucts/9);i++){
    numOfbtn[i]=i
}
console.log( numOfbtn)
async function  getMensdata(page){
    setLoading(true)
    try {
        let res=await fetch(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens?page=${page}&limit=9`)
  
        let data=await res.json().then((res)=>{
            setLoading(false)
            console.log(res)
            setmenspro(res)
        })
        console.log(data)
    } catch (error) {
        
    }
}
    useEffect(()=>{
       getMensdata(page)
       getNumofproducts()
    },[page])

function addTocart(id){
    axios.get(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens/${id}`)
    .then((res)=>{
        console.log(res.data)
        delete res.data.id
        postdataInCart(res.data)
    })
}

function postdataInCart(obj){
    axios({
        method:"post",
        url:'https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart',
        data:obj
    })
}
console.log(page)
    return Loading?<Loadingindicator/>:(
        <>
       <Heading as="h2"   fontFamily={"Brush Script MT, Brush Script Std, cursive"}>Mens Section</Heading>
        <Box  style={{width:"90%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}} >
        {
                menspro.map((e)=>{
                    return <div >
                    
                        <EachCard  addTocart ={addTocart} {...e} />
                        
                    

                    </div>
                })
                }
        </Box>
        
        <Pagination page={page} setPage={setPage} totalProucts={totalProucts}  numOfbtn={ numOfbtn}/>
        
        </>
    )
}