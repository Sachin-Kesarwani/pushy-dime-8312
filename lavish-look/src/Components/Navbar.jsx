import { ReactNode } from "react";
import React from "react";
import lavishlogo from "./lavishlogo.jpg";
import { Link, useNavigate } from "react-router-dom";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Wrap,
  HStack,
  Badge,
  IconButton,
  Image,
  Menu,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Stack,
  Heading,
  useToast,
 Icon
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Login from "../Navbar/Login";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
const Links = ["Dashboard", "Projects", "Team"];
const Navbardata = [
  { link: "/", title: "HOME" },
  { link: "/womens", title: "WOMENS" },
  { link: "/mens", title: "MENS" },
  { link: "/kids", title: "KIDS" },
  { link: "/shoes", title: "SHOES" },
  { link: "/sleeper", title: "SLEEPERS" },
  { link: "/cart", title: "CART" },
  {link:"/adminPage",title:"AdminPage"}
];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let [showname, setshowname] = useState(false);
  let [signupbtn, setsignupbtn] = useState(false);
  let {isAuth}=useContext(Authcontext)
  let navigate=useNavigate()
  let toast=useToast()
  function logoname() {
    let w = window.innerWidth;
    if (w > 697) {
      setshowname(true);
    }

    let w2 = window.innerWidth;
    if (w2 > 500) {
      setsignupbtn(true);
    }
  }

  useEffect(() => {
    logoname();
  }, []);

let {Logout}=useContext(Authcontext)


function LogoutPage(){
  Logout()
  toast({
    title: `You Have Loged out`,
    status: "success",
    isClosable: true,
  });
  navigate("/")
  onClose()
}

let [name,setName]=useState("")
let LSdata= JSON.parse(localStorage.getItem("Log"))
function shonameInLog(){
    if(LSdata!==null){
        setName(` Hi , ${LSdata.fname}`)
    }
}

useEffect(()=>{
    shonameInLog()
},[LSdata])


function closeSidemenu(){
  setTimeout(()=>{
    onClose()
    navigate("/")
  },1000)
  
}

let [searchdata,setSearchdata]=useState("")
function handleSearch(){
  let data=searchdata.toLowerCase()
  if(data=="mens"||data=="mens product" ||data=="mens products"||data=="mens shirt"||data=="shirt"||data=="tshirt"){
    navigate("/mens")
  }else if(data=="womens"||data=="women"||data=="womens product" ||data=="womens products"||data=="womens shirt"||data=="women shirt"||data==" women tshirt"||data=="jacket"||data=="womens jacket"){
   navigate("/womens")
  }else if(data=="kids"||data=="kid"||data=="chhota baccha"||data=="topi"||data=="cap"||data=="child"||data=="childtren"){
       navigate("/kids")
  }else if (data=="shoe"||data=="shoes"||data=="joota"||data=="juta"||data=="boot"||data=="campus shoes"||data=="hill shoes"){
    navigate("/shoes")
  }else if(data=="chappal"||data=="sleeper"||data=="chapal"||data=="night sleeper"||data=="sandal"||data=="men sandal"||data=="women sandal") {
   navigate("/sleeper")
  }else{
    navigate("/mens")
  }
   
   
 

}



  return (
    <>
      <div>
        <Box
          bg={useColorModeValue("orange.200", "gray.900")}
          w="100%"
          paddingBottom={"1vw"}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <Link to="/">
                <Image
                  margin={"5px"}
                  height={{ base: "14vw", md: "9vw", lg: "5vw", sm: "10vw" }}
                  width={{ base: "25vw", md: "18vw", lg: "12vw", sm: "25vw" }}
                  src={lavishlogo}
                />
              </Link>

              <InputGroup>
                {/* <InputLeftElement
                  // onClick={()=>alert("sjsj")}
                  pointerEvents="none"
                  children={<Search2Icon  color="black.800" />}
                /> */}
                <Input
                  variant="flushed"
                  type="text"
                  placeholder="Enter Product Category"
                  onChange={(e)=>{
                   
                    setSearchdata(e.target.value)
                    // setTimeout(()=>{
                    //   handleSearch()
                    // },3000)
                  }     }
                />
                <Button bg={"gray.800"}  color="white" onClick={handleSearch}  >
         
                <Icon as={Search2Icon} />
                </Button>
              </InputGroup>
            </HStack>
            <HStack>
              {showname ? (
                <Heading
                  as="h2"
                  fontFamily={"Brush Script MT, Brush Script Std, cursive"}
                  fontSize={"2.9vw"}
                >
                  Lavish-Look
                </Heading>
              ) : null}
            </HStack>
            <Flex>
              <Flex h="100vh" justifyContent="center" alignItems="center">
                <Button
                  onClick={onOpen}
                  px={4}
                  fontSize={"sm"}
                  // rounded={'full'}
                  bg={"Black"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "grey.500",
                  }}
                >
                  Login
                </Button>

                {signupbtn ? (
                  <Link to="/signup">
                    <Button
                      marginLeft={"4"}
                      /* flex={1} */
                      px={4}
                      fontSize={"sm"}
                      //  rounded={'full'}
                      bg={"black"}
                      color={"white"}
                      boxShadow={
                        "0px 1px 25px -5px rgb(255 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "grey.900",
                      }}
                    >
                      Signup
                    </Button>
                  </Link>
                ) : null}
              </Flex>
            </Flex>
          </Flex>
          {/* ////////////////////////////////////////////////////////////////////////// */}
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>! Welcome To Lavish-Look !</DrawerHeader>

              <DrawerBody>
                <Heading>{isAuth?name:""}</Heading>
                <DrawerHeader>Don't Have An Account?</DrawerHeader>
                <Link to="/signup">
                  <Button
                    onClick={onClose}
                    // rounded={'none'}
                    w={"100%"}
                    margin="auto"
                    mt={8}
                    size={"sm"}
                    fontWeight={"800"}
                    py={"5"}
                    bg={useColorModeValue("gray.900", "gray.50")}
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                      bg: "white",
                      color: "black",
                      border: "2px solid black",
                    }}
                  >
                    CREATE A NEW ACCOUNT
                  </Button>
                </Link>
                <Login closeSidemenu={closeSidemenu} />


                {
                  isAuth? <Button
                  onClick={LogoutPage}
                  // rounded={'none'}
                  w={"60%"}
                  margin="auto"
                  mt={8}
                  size={"sm"}
                  fontWeight={"800"}
                  py={"5"}
                bg={"red.700"}
                 color="white"
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                    bg: "white",
                    color: "black",
                    border: "2px solid black",
                  }}
                >
                 LogOut
                </Button>:null
                }
               
                {/* <Input placeholder='Type here...' /> */}
              
              </DrawerBody>

              {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
            </DrawerContent>
          </Drawer>

          {/* ///////////////////////////////////////////////////////////////////////// */}
          {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
          <Wrap spacing="15px" justify="center">
            {Navbardata.map((e, i) => {
              return (
                <Link key={i} to={e.link}>
                  <div
                    style={{
                      background: "black",
                      color: "whitesmoke",
                      border: "1px solid black",
                      padding: "1px 15px",
                      borderRadius: "10px",
                    }}
                  >
                    {e.title}
                  </div>
                </Link>
              );
            })}
          </Wrap>
        </Box>
      </div>
      <div style={{ width: "100%", marginTop: "0vw" }}>
        {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} w="100%" position={"fixed"}  >*/}
      </div>
    </>
  );
}
