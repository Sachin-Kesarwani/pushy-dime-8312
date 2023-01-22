import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AdminAuthContext } from '../Context/AdminAuth';

  export default function AdminLogin() {
let navigate=useNavigate()
let toast=useToast()
    let [data,setData]=useState({email:"",password:""})

    let {makeAdminAuth,LogoutAuth,adminAuth}=useContext(AdminAuthContext)
    async function postLogindata(obj){
        //console.log(data)
         try {
             let res=await fetch("https://63cbea8f9b72d2a88e047c59.mockapi.io/admin",{
                 method:"GET",
                 headers:{
                     "Content-Type":"application/json"
                 }
             })
          let notthere=false
             let data=await res.json()
             .then((res)=>{
                 // makeAuth(res)
                 res.forEach((e)=>{
                     if(e.email==obj.email){
                          if(e.password==obj.password){
                            
                   notthere=true
                            localStorage.setItem("LogAdmin",JSON.stringify(e))    
                          
                           
                             toast({
                                 title: `Successfully Login`,
                                 status: "success",
                                 isClosable: true,
                               })
                               makeAdminAuth()
                               navigate("/adminwelcome")
                          }
                     }
                 })

                 if( notthere==false){
                  toast({
                    title: `Not Found`,
                    status: "warning",
                    isClosable: true,
                  })
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
     }
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign In For Admin Page</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  variant='flushed' type="email"  placeholder="Enter Your Email" name="email" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}  />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  variant='flushed' type="password"  placeholder="Enter Your Password" name="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'yellow' }  onClick={handleClick} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://img.freepik.com/free-vector/cash-delivery-concept_52683-51829.jpg?size=338&ext=jpg&ga=GA1.2.1470629828.1674311466'
            }
          />
        </Flex>
      </Stack>
    );
  }