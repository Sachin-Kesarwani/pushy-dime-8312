import { Heading, Input,Container,FormLabel, Divider,Box, Button ,useDisclosure, useToast} from "@chakra-ui/react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import React from "react";
import axios from "axios";
import { PinInput, PinInputField ,HStack} from '@chakra-ui/react'
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Payment(){
    let navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    let [otp,setOtp]=useState("")
let [submittedotp,setsubmittedotp]=useState("")
let toast=useToast()
let [paymentdata,setpaymentdata]=useState({name:"",email:"",card:"",cvv:"",mon:"",year:""})
let [cartItem,setcartItem]=useState([])
function getCartdata(){
    axios.get("https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart")
    .then((res)=>{
        setcartItem(res.data)
      
      // setLog(isAuth)
      
     
    })
    
}

useEffect(()=>{
getCartdata()



    deloneByone()

},[])



function otpmanage(){



if(paymentdata.name!="" && paymentdata.email!=""&&paymentdata.card!=""&&paymentdata.cvv!=""&&paymentdata.mon!=""&&paymentdata.year!=""){
    let otp=Math.floor(1000 + Math.random() * 9000);
        setOtp((e)=>otp)
      //  alert(otp)
        toast({
            title: `Enter this OTP -> ${otp}`,
            position:"top-left",
            isClosable: true,
          })
    setTimeout(()=>{
        onOpen()
        },1000)
}else{
    toast({
        title: `Please Fill Complete Form`,
        status:"warning",
        isClosable: true,
      }) 
}
    
}



function paymentformdata(e){
  let {name,value}=e.target
  setpaymentdata({...paymentdata,[name]:value})
}
//console.log(paymentdata)
function handleSubmit(){
  //  console.log("35",otp,submittedotp)
 // if(paymentdata.name!="" && paymentdata.email!=""&&paymentdata.card!=""&&paymentdata.cvv!=""&&paymentdata.mon!=""&&paymentdata.year!=""){
    if(submittedotp==otp){
        onClose()
        toast({
          title: `Payment Successful`,
          status:"success",
          isClosable: true,
        })
        setOtp("")
        setsubmittedotp("")
       
           deloneByone()
     setTimeout(()=>{
        navigate("/")
        toast({
            title: `Thank You So much for Trust`,
            status:"success",
            isClosable: true,
          })
     },3000)
       
      }else{
          toast({
              title: `Wrong OTP`,
              status:"error",
              isClosable: true,
            }) 
            setOtp("")
            setsubmittedotp("")
      }
      
      


}

function deloneByone(){
    
        for(let i=0;i<cartItem.length;i++){
       
            deleteCartitem(cartItem[i].id)
          }
    }


    async function deleteCartitem(id){
   

        try {
            let res=await fetch(`https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart/${id}`,{
                method:"DELETE",
                "Content-Type":"application/json"
            })
          
        } catch (error) {
            
        }
    }

    let [width,setwidth]=useState(0)
    
   function widthfun(){
    let w=window.innerWidth
    if(w>850){
        setwidth(30)
    }else if(w>550 && w<849){
        setwidth(50)
    }else{
        setwidth(90)
    }
   }
useEffect(()=>{
widthfun()
},[])

 //   console.log(cartItem)
    return(
        <>
        <Heading>Payment</Heading>
        <Box   w={`${width}%`} margin="auto" >
        <FormLabel>
        Your name :<Input placeholder="Enter Your name" name="name" value={paymentdata.name} onChange={paymentformdata}  /> 
       </FormLabel>
        <FormLabel>
        Email :
        <Input placeholder="Enter Your Email" name="email" value={paymentdata.email} onChange={paymentformdata}  />
        </FormLabel>
   
           <Divider/>
      <FormLabel>
      Enter Card Number :    <Input  placeholder="Enter Card Number"  value={paymentdata.card} name="card" onChange={paymentformdata} />
      </FormLabel>
       <FormLabel>

        CVV : <Input placeholder="Enter cvv code" name="cvv" value={paymentdata.cvv}  onChange={paymentformdata}/>
       </FormLabel>
     <FormLabel>
     Valid thru :
        <select  onChange={paymentformdata} name="mon"  value={paymentdata.mon} >
            <option>MM</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        
        <select  onChange={paymentformdata} name="year"  value={paymentdata.year} >
            <option>YY</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
        </select>
     </FormLabel>
     <Button onClick={otpmanage} bg={"yellow.400"} _hover={{bg:"yellow.400"}} >Get OTP</Button>
        </Box  >
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
           Enter OTP
            </AlertDialogHeader>

            <AlertDialogBody  margin={"auto"}  >
            <HStack>
            <PinInput  type='number' value={submittedotp} onChange={(value)=>{setsubmittedotp(value)}} >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleSubmit} ml={3}>
             Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      
        </>
    )
}