import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useToast,Wrap,WrapItem,} from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from "axios"
import Showstatusintoast from "../Components/Toast"
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { useParams } from 'react-router-dom';
import SingleLoadingindicator from "../NavPages/SinProDetailLoading"
import Loadingindicator from '../NavPages/Loading';
  export default function ShoesSinglePage() {

    let toast=useToast()
    let [showdata,setShowdata]=useState({})
    let [loading,setLoading]=useState(false)
   let param=useParams()
   console.log(param)
async function getData(id){
  setLoading(true)
try {
  let res=await fetch(`https://63ca8992f36cbbdfc75aa2e5.mockapi.io/shoes/${id}`)
  let data=await res.json().then((res)=>{
    setLoading(false)
    setShowdata({...res})
  console.log(res)
  })
} catch (error) {
  
}
}

    useEffect(()=>{
       getData(param.id)
    },[param.id])
 



    function addTocart(id){
      axios.get(`https://63ca8992f36cbbdfc75aa2e5.mockapi.io/shoes/${id}`)
      .then((res)=>{
          console.log(res.data)
          delete res.data.id
          postdataInCart(res.data)
      })
  }
    function postdataInCart(obj){
      obj.pcs=1
      axios({
          method:"post",
          url:'https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/cart',
          data:obj
      })
  }
// function addTocart(id){
//   addTocart(id)
// }


    console.log(showdata)
    return loading?<SingleLoadingindicator/>:(
    <>
       <Heading>Product Details</Heading>
      <Container maxW={'7xl'}>
       
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                showdata.image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {showdata.title}
              </Heading>
              <Text
                // color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
             ₹ {showdata.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                color={"gray.600"}
                  // borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                color="gray.400"
                  // color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
              Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body.
                </Text>
                <Text fontSize={'lg'}>
                It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and the colour will not fade easily.Available in various color and designs for your every day fashion.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={"yellow.500"}
                  // color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Quality
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Soft & light material</ListItem>
                    <ListItem>Light and smooth material</ListItem>{' '}
                    <ListItem>Hard Color</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>100% Pure cotton</ListItem>
                    <ListItem>Finishing: The uniformity test</ListItem>
                    <ListItem>Comfort & Stylish</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={"yellow.500"}
                  // color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Pattern :
                    </Text>{' '}
                  Printes
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Fabric Care :
                    </Text>{' '}
                  
                   Machine wash as per tag
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Suitable For :
                    </Text>{' '}
                
                          Western Wear
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Size: 
                    </Text>{' '}
                              M
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Fabric:
                    </Text>{' '}
                 
Cotton Blend

                  </ListItem>
                  {/* <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem> */}
                </List>
              </Box>
            </Stack>
  
            <Button
            onClick={()=>{
              addTocart(showdata.id)
              toast({
                title: `Product Added To Cart`,
                position: "top-left",
                isClosable: true,
              })
            }}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
             
             // bg={useColorModeValue('gray.900', 'gray.50')}
             bg={"gray.800"}
             color={"white"}
           //   color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      </>
    );
  }