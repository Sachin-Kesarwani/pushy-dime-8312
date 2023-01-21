import { FormLabel, Input ,Spacer,Button,useColorModeValue, Heading, useDisclosure, useToast} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";

export default function Login({closeSidemenu}){
   const { isOpen, onOpen, onClose } = useDisclosure();
let [data,setData]=useState({email:"",password:""})
let [email,setEmail]=useState(false)
let [password,setpassword]=useState(false)
let {makeAuth,isAuth}=useContext(Authcontext)
let [name,setName]=useState("")
let toast=useToast()

let navigate=useNavigate()
let LSdata= JSON.parse(localStorage.getItem("Auth"))
async function postLogindata(obj){
   //console.log(data)
    try {
        let res=await fetch("https://63c79c9f075b3f3a91cf629e.mockapi.io/signup",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
     
        let data=await res.json()
        .then((res)=>{
            // makeAuth(res)
            let notThere=true
            res.forEach((e)=>{
                if(e.email==obj.email){
                     if(e.password==obj.password){
                        //  setEmail(false)
                        //  setpassword(false)
                        notThere=false
                 localStorage.setItem("Log",JSON.stringify(e))
              
                     
                        makeAuth(e)
                      
                        toast({
                            title: `Successfully Login`,
                            status: "success",
                            isClosable: true,
                          })
                     }
                }
            })
            if(notThere){
                toast({
                    title: `You Are Not Signup till now`,
                    status: "warning",
                    isClosable: true,
                  })
                  navigate("/signup")
               }
            //console.log(res)
        })
      


    } catch (error) {
        
    }
}

function handleClick(e){
e.preventDefault()
console.log(data)
postLogindata(data)
closeSidemenu()
}

console.log(LSdata)
    return(
        <>
         {
              


         }
         {/* <Heading>
          
                {name}
          
         </Heading> */}
        <FormLabel>
     Email :
        <Input  variant='flushed' placeholder="Enter Your Email" name="email" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} />
        </FormLabel>
        <Divider color={"2px solid black"} />
       <FormLabel>
        Password 
       <Input  variant='flushed' placeholder="Enter Your Password" name="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  />
       <Button
       onClick={handleClick}
            rounded={'none'}
            // onClick={onOpen}
            w={'100%'}
            margin="auto"
            mt={8}
            size={'sm'}
           fontWeight={"800"}
            py={'5'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
             
              transform: 'translateY(2px)',
              boxShadow: 'lg',
              bg:"white" ,
              color:"black",
              border:"2px solid black"
            }}>
           Login
          </Button>
       </FormLabel>
     
        </>
    )
}