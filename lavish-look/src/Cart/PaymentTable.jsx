import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Button,
    color,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function PaymentTable(props){
// console.log(props.cartItem)



let [totalPrice,setTotalPrice]=useState(0)
let [totaldiscount,setTotaldiscount]=useState(0)
let [totalogSinglePro,settotalogSinglePro]=useState(0)






function getInfo(props){
  let totalsum=0
  let discount=0
  props.cartItem.forEach((e)=>{
    totalsum+=e.price*e.pcs
    discount+=e.discount*e.pcs
  })
  setTotalPrice(totalsum)
  setTotaldiscount( discount)
}


useEffect(()=>{
  getInfo(props)
},[props])
console.log(totalPrice,totaldiscount)
  return(
    <>
    {
       props.cartItem.length>=1? <TableContainer>
       <Table variant='simple'>
         {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
         <Thead>
           <Tr>
             <Th>Product Name</Th>
             <Th>Price</Th>
             <Th>No Of Piece</Th>
             <Th >Discout Per Product</Th>
             <Th>Total Price</Th>
           </Tr>
         </Thead>
         <Tbody>
             {
               props.cartItem.map((e)=>{
                 return <Tr>
                   <Td>{e.title}</Td>
                   <Td>{e.price}</Td>
                   <Td>{e.pcs}</Td>
                   <Td>{e.discount}</Td>
                   <Td>{e.price*e.pcs}</Td>
                 </Tr>
               })
             }
         </Tbody>
         <Tfoot>
           <Tr>
             <Th></Th>
             <Th></Th>
             <Th></Th>
             <Th color={"gray.700"} fontSize={18}>Total Price </Th>
             <Th  color={"gray.700"} fontSize={18} > ₹ {totalPrice}.00</Th>
           </Tr>
         {/* </Tfoot>
         <Tfoot> */}
           <Tr>
             <Th></Th>
             <Th></Th>
             <Th></Th>
             <Th  color={"gray.700"} fontSize={18}>  Discount </Th>
             <Th  color={"gray.700"} fontSize={18} >- {totaldiscount}.00</Th>
           
     
           </Tr>
           <Tr>
             <Th></Th>
             <Th></Th>
             <Th></Th>
             <Th  color={"gray.700"} fontSize={18}> Payble Amount </Th>
             <Th  color={"gray.700"} fontSize={18} >₹ {totalPrice-totaldiscount}.00</Th>
           </Tr>
         </Tfoot>
       </Table>
     </TableContainer>:<Heading>Nothing in Your Cart</Heading>
    }

    {
       props.cartItem.length>=1?  <Button _hover={{bg:"orange.600",color:"white"} } color="white" bg={"orange.400"} ><Link to="/payment" >₹ {totalPrice-totaldiscount} Buy Now</Link></Button>:""
    }
   
    </>
  )
  
}