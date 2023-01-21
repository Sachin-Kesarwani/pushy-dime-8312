import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import PaymentTable from "../Cart/PaymentTable"
import { Tabs, TabList, TabPanels, useToast, Tab, TabPanel, Heading } from '@chakra-ui/react'
import EachcardOfCart from "../Cart/EachCardofCart"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import { useContext } from "react"
import { Authcontext } from "../Context/AuthContext"
export default function Cart(){

    let [cartItem,setCartitem]=useState([])
    const toast = useToast()

function GetCartdata(){
    //alert("del")
   axios.get("https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart")
   .then((res)=>{
    setCartitem(res.data)
    console.log(res.data)
   })
}

useEffect(()=>{
    GetCartdata()
},[])


let {isAuth}=useContext(Authcontext)

useEffect(()=>{
    for(let i=0;i<cartItem.length;i++){
      deleteCartitem(cartItem[i].id)
    }
},[isAuth])

async function deleteCartitem(id){

    try {
        let res=await fetch(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart/${id}`,{
            method:"DELETE",
            "Content-Type":"application/json"
        })
        GetCartdata()
        toast({
            title: `Product Removed `,
            status: "warning",
            isClosable: true,
          })
    } catch (error) {
        
    }
    // axios({
    //   method:"delete",
    //   url:`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart/${id}`
    // })
    // GetCartdata()
    // toast({
    //     title: `Product Removed `,
    //     status: "warning",
    //     isClosable: true,
    //   })
     
}


// s

// async function increasePiece(id,piece){
//     id=Number(id)
//     console.log(id,piece)
//    try {
//        let res=await fetch(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart/${id}`)
//        let data=await res.json().then((res)=>{
//         res.pcs=piece
//         postdataafterpPCSchange(res)
//         //console.log(res)
//        })
//    } catch (error) {
    
//    }
//    axios({
//     method:"patch",
//     url:`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart/${id}`,
//     data:{
//         pcs:piece
//     }
// })


async function increasePiece(id,piece){
    
  try {
     let res= await fetch(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({pcs:piece})
     })
     GetCartdata()
  } catch (error) {
    
  }
}

    return (
        <>
        {/* <PrivateRoute/> */}
        <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Your Products</Tab>
    <Tab>Pay Now</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
  {
      cartItem.map((e)=>{
        return <EachcardOfCart {...e} deleteCartitem={deleteCartitem} increasePiece={increasePiece} />
      })
  }
       
    </TabPanel>
    <TabPanel>
   <PaymentTable cartItem={cartItem}  />
    </TabPanel>
  </TabPanels>
</Tabs>
      
       
       
        
        </>
    )
}