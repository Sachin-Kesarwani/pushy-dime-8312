import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import {Image,Box, Button, Heading,useToast} from "@chakra-ui/react"
import axios from "axios"
import EachCard from "./Eachcard"
import Loadingindicator from "./Loading"
import Pagination from "./Pagination"
import { AscendingPrice,DescendingPrice } from "./Certainopera"

export default function Mens(){
let [Loading,setLoading]=useState(false)
let [page,setPage]=useState(1)
let [menspro,setmenspro]=useState([])
let [totalProucts,setTotalProducts]=useState(1)
let [order,setOrder]=useState("")
let [col,setCol]=useState(1)



let toast=useToast()
function getNumofproducts(){
   
    axios.get("https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens")
    .then((res)=>{
      
        // console.log(res.data.length)
        setTotalProducts(res.data.length)
       
      
    })
}

let  numOfbtn=new Array(totalProucts)

for(let i=1;i<=Math.ceil(totalProucts/9);i++){
    numOfbtn[i]=i
}
// console.log( numOfbtn)
async function  getMensdata(page){
    setLoading(true)
    try {
        let res=await fetch(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens?page=${page}&limit=9`)
  
        let data=await res.json().then((res)=>{
            setLoading(false)
            // console.log(res)
            setmenspro(res)
           // Changeorder(order)
        })
     
    } catch (error) {
        
    }
}
    useEffect(()=>{
       getMensdata(page)
       getNumofproducts()
       
    },[page])
useEffect(()=>{
   Changeorder(order)
    width()
},[order])


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



function addTocart(id){
    axios.get(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens/${id}`)
    .then((res)=>{
        // console.log(res.data)
        delete res.data.id
        res.data.pcs=1
        postdataInCart(res.data)
    })
}


let [cartData,setCartdata]=useState([])
function getCartdata(obj){
    axios.get("https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart")
    .then((res)=>{
   setCartdata(res.data)

    })
}
async function postdataInCart(obj){
  //  alert("entry1")
    getCartdata(obj)
    let notThere=true
    cartData.forEach((e)=>{
        if(e.image===obj.image){
            notThere=false
        }
    })


console.log(cartData)
    if(notThere){
    axios({
        method:"post",
        url:'https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart',
        data:obj
    }).then((res)=>{
      //  alert("entry2")
        toast({
            title: `Product Added To Cart`,
            status: "success",
            isClosable: true,
          })
    })

    
   
    }else{
        toast({
            title: `Product Already In the cart`,
            status: "warning",
            isClosable: true,
          })
         
    }


   
}


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
//  alert(col)
    return Loading?<Loadingindicator/>:(
        <>
          <Heading as="h2"   fontFamily={"Brush Script MT, Brush Script Std, cursive"}>Mens Section</Heading>
        <Button margin={1} bg="yellow.400" onClick={asc}>Sort By Price In asc</Button>
        <Button  margin={1}  bg="yellow.400" onClick={desc}>Sort By Price In Desc </Button>
        <Button  margin={1} bg="yellow.400"  onClick={ascRating}>Sort ByRating In Asc</Button>
        <Button  margin={1} bg="yellow.400"  onClick={descRating}> Sort Rating In Desc</Button>
     
        <Box  style={{width:"90%",margin:"auto",display:"grid",gridTemplateColumns:`repeat(${col},1fr)`}} >
        {
                menspro.map((e)=>{
                    return <div key={e.id} >
                    
                        <EachCard  addTocart ={addTocart} {...e} />
                        
                    

                    </div>
                })
                }
        </Box>
        
        <Pagination page={page} setPage={setPage} totalProucts={totalProucts}  numOfbtn={ numOfbtn}/>
        
        </>
    )
}