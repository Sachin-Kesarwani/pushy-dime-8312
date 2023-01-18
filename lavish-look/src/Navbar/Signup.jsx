


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
  import { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    let [data,setdata]=useState({fname:"",lname:"",email:'',password:""})
    let [alreadyusers,setalredyusers]=useState([])
  
    let [userexist,setuserexist]=useState(false)
    let {makeAuth}=useContext(Authcontext)



    async function Register(obj){
        console.log("32")
        let maketoken=Math.floor(Math.random() * 10000000);
        obj.token= maketoken
        try {
            let res=await fetch("https://63c79c9f075b3f3a91cf629e.mockapi.io/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            let data=await res.json().then((res)=>{
                alert("signup")
                console.log(res)
                makeAuth(res)
              
            })
        } catch (error) {
            
        }
    }
   async  function checkstoreddata(obj){
      try {
          let res=await fetch("https://63c79c9f075b3f3a91cf629e.mockapi.io/signup",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
          })
          let data=await res.json().then((res)=>{
    
            let alreadypresent=false
            res.forEach((e)=>{
                if(e.email===obj.email){
                    alreadypresent=true;

                }
            })
           if(alreadypresent){
            alert("exist")
           }else{
            Register(obj)
           }

      
          })
      } catch (error) {
        
      }
   }


    function handleClick(e){
      
      e.preventDefault()
      checkstoreddata(data)
  
    }

    useEffect(()=>{
        checkstoreddata()
    },[])
    return (
      <Flex
   
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading marginTop={"2"} fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"  name="fname" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}  />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  name="lname" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}  />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name="password" onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleClick}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }