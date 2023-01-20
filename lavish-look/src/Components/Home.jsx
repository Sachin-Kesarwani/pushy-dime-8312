
import React, { useEffect } from "react"
import SlideShow from "../Slideshow/SlideShow"
import DrawerExample from "./Drawer"
import { useDisclosure,Button,useColorModeValue,Text,Stack,Divider, Heading  } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Home(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [showSlido,setshowSlido]=useState(false)
    let [noofslidocard,setnoofslidocard]=useState(0)
    const btnRef = React.useRef()

    function open(){
        onOpen()
    }
   useEffect(()=>{
    getWidth()
    GettopProducts()
   })

   let [data,setdata]=useState([])
async function GettopProducts(){
    try {
        let res=await  fetch("https://63c79c9f075b3f3a91cf629e.mockapi.io/topProducts")
        let data=await res.json().then((res)=>{
            // console.log(res)
            setdata(res)
        })
    } catch (error) {
        
    }
}



   function getWidth(){
   let w=window.innerWidth
    if(w>750){
        // setshowSlido(true)
        setnoofslidocard(3)
    }else if(w>500 && w<749){
        setnoofslidocard(2)
    }else{
        setnoofslidocard(1)
    }
   }
    return(
        <>
        <Heading>We have a lots of Varety</Heading>
       <div style={{display:"flex",width:"100%"}} >
        <div width="50%">
            <Image  src="https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Image src="https://images.pexels.com/photos/1676728/pexels-photo-1676728.jpeg?auto=compress&cs=tinysrgb&w=600" />
           
        </div>
        <div width="50%">
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            <Image src="https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Image height={"100%"} src="https://images.pexels.com/photos/2313192/pexels-photo-2313192.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Image  src="https://images.pexels.com/photos/3372595/pexels-photo-3372595.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <Image  height={"100%"} src="https://images.pexels.com/photos/1816616/pexels-photo-1816616.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </div>
          
     
        </div>
       
       </div>
       <div >
       <Stack margin={"auto"} w={{lg:"50vw,",md:"90vw",sm:"100"}}>
       <Text textAlign={"center"} as='cite'>Fabric pens and permanent marking pens work well. 
            You can also write with paint from a squeeze bottle.
             Tip: squeeze a little paint out onto a palette or rag first to get the paint 
             flowing and to prevent splotches.</Text>
             <Link  to="/mens" >
            
            <Button
          
            // rounded={'none'}
            w={'40%'}
            margin="auto"
            mt={8}
            marginBottom={"5vw"}
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
        Mens Product
          </Button>
          </Link>
          </Stack>
       </div>
       <Divider orientation='horizontal' />

       {/* /////////////////////////////////////////////////// */}
       <div style={{display:"flex",width:"100%"}} >
        <div width="50%">
            <Image  src="https://plus.unsplash.com/premium_photo-1672243272965-e2dd9f0e6dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            <Image src="https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
           
        </div>
        <div width="50%">
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            <Image src="https://images.unsplash.com/photo-1598554793905-075f7b355cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
            <Image height={"100%"} src="https://plus.unsplash.com/premium_photo-1672243273029-2006ea0e0c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
            <Image  src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            <Image  height={"100%"} src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
          
     
        </div>
       
       </div>
       <div >
       <Stack margin={"auto"} w={{lg:"50vw,",md:"90vw",sm:"100"}}>
       <Text textAlign={"center"} as='cite'>Fabric pens and permanent marking pens work well. 
            You can also write with paint from a squeeze bottle.
             Tip: squeeze a little paint out onto a palette or rag first to get the paint 
             flowing and to prevent splotches.</Text>
             <Link  to="/womens" >
            
            <Button
          
            // rounded={'none'}
            w={{lg:'40%',md:"50%",sm:"70%"}}
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
        Womens Product
          </Button>
          </Link>
          </Stack>
       </div>
       <Divider orientation='horizontal' />
    <Heading>Top Products</Heading>
<SlideShow noofslidocard={noofslidocard} data={data}/>
   
      
        </>
    )
}


