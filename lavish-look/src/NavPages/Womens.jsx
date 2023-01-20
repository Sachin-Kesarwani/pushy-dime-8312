


import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import {Image,Box, Button, Heading} from "@chakra-ui/react"
import axios from "axios"
import EachCard from "./Eachcard"
import Loadingindicator from "./Loading"
import Pagination from "./Pagination"
import SleeperCard from "../EachCard/SleeperCard"
import WomensCard from "../EachCard/WomenCard"

export default function Womens(){
let [Loading,setLoading]=useState(false)
let [page,setPage]=useState(1)
let [menspro,setmenspro]=useState([])
let [totalProucts,setTotalProducts]=useState(1)
let [order,setOrder]=useState("")
function getNumofproducts(){
   
    axios.get("https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens")
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
        let res=await fetch(`https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens?page=${page}&limit=9`)
  
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
    axios.get(`https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens/${id}`)
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
useEffect(()=>{
    Changeorder(order)
    width()
},[order])
function Changeorder(order){
    // alert(order+"79")
       if(order=="asc"){
        setmenspro( menspro.sort((a,b)=>{
            return b.price-a.price
        }))
       }
       if(order=="desc"){
        setmenspro( menspro.sort((a,b)=>{
            return a.price-b.price
        }))
       } 
       if(order=="ascRate"){
        setmenspro( menspro.sort((a,b)=>{
            return b.rating -a.rating
        }))
       }
       if(order=="descRate"){
        setmenspro( menspro.sort((a,b)=>{
            return a.rating -b.rating
        }))
       } 
    }
    function desc(){
        setOrder(()=>"desc")
         Changeorder(order)
    
    }
    function asc(){
        setOrder(()=>"asc")
        Changeorder(order)
      
    }
    function ascRating(){
        setOrder(()=>"ascRate")
        Changeorder(order)
    }
    function descRating(){
        setOrder(()=>"descRate")
        Changeorder(order)
    }
console.log(page)

let [col,setCol]=useState(1)
function width(){
    let w=window.innerWidth
    console.log(w)
    if(w>860){
      setCol(3)
    }else if(w>500 && w<859){
        setCol(2)
    }else{
        setCol(1)
    }
}

    return Loading?<Loadingindicator/>:(
        <>
       <Heading as="h2"   fontFamily={"Brush Script MT, Brush Script Std, cursive"}>Womens Section</Heading>
       <Button margin={1} bg="yellow.400" onClick={asc}>Asc By Price</Button>
        <Button  margin={1}  bg="yellow.400" onClick={desc}>Desc By Price </Button>
        <Button  margin={1} bg="yellow.400"  onClick={ascRating}>Rating In Asc</Button>
        <Button  margin={1} bg="yellow.400"  onClick={descRating}>Rating In Desc</Button>
        <Box  style={{width:"90%",margin:"auto",display:"grid",gridTemplateColumns:`repeat(${col},1fr)`}} >
        {
                menspro.map((e)=>{
                    return <div >
                    
                        <WomensCard addTocart ={addTocart} {...e} />
                        
                    

                    </div>
                })
                }
        </Box>
        
        <Pagination page={page} setPage={setPage} totalProucts={totalProucts}  numOfbtn={ numOfbtn}/>
        
        </>
    )
}