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
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'



export default function PaymentTable(props){
console.log(props)



let [totalPrice,setTotalPrice]=useState(0)
let [totaldiscount,setTotaldiscount]=useState(0)
let [totalogSinglePro,settotalogSinglePro]=useState(0)






function getInfo(props){
  let totalsum=0
  let discount=0
  props.forEach((e)=>{
    totalsum+=e.price*e.pcs
    discount+=e.discount*e.pcs
  })
  setTotalPrice(totalsum)
  setTotaldiscount( discount)
}


useEffect(()=>{
  getInfo(props)
},[props])
  return(
    <>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
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
        {/* {
          props.map((e)=>{
            return <Tr>
              <Td>{e.title}</Td>
              <Td>{e.price}</Td>
              <Td>{e.pcs}</Td>
              <Td>{e.discount}</Td>
              <Td>{e.price}</Td>
            </Tr>
          })
        } */}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th>intmmmmo</Th>
        <Th>intmmmmo</Th>
        <Th >{totalPrice}</Th>
      </Tr>
    </Tfoot>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th>intmmmmo</Th>
        <Th>intmmmmo</Th>
        <Th >{totaldiscount}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </>
  )
  
}