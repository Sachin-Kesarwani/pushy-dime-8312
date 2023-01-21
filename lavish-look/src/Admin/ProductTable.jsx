import { Heading } from "@chakra-ui/react";

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
import { useState } from "react";
import { useEffect } from "react";


//   <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens" >In Womens Section</option>
//     <option value="https://63c8d5b2c3e2021b2d4a4e00.mockapi.io/mens">In Mens Section</option>
//     <option value="https://63ca76f3d0ab64be2b5319f8.mockapi.io/Kids" > In Kids Section </option>
//     <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/shoes" >In Shoes Section </option>
//     <option value="https://63ca8992f36cbbdfc75aa2e5.mockapi.io/sleeper" >In Sleeper Section</option>
export default function ProductTable(){


    let [editData,setEditdata]=useState({id:""})
    let [mensarr,setmensarr]=useState([])



    useEffect(()=>{

    })

    async function getData(){
        console.log("hi")
        axios({
            method:"get",
            url:"https://63ca76f3d0ab64be2b5319f8.mockapi.io/womens",
    
    
        })
        .then((res)=>{
            // console.log(res.data)
            setmensarr(res.data.data)
        })
    }
  function handleedit(e){


    e.preventDefault()
    postEdit(url,editData)
 }
 
 
 async function postEdit(url,obj){
     setLoadingedit(true)
     let id=Number(obj.id)
     console.log(url,obj,id)
   try {
      let res=await fetch(`${url}/${id}`,{
         method:"PUT",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify(obj)
      })
      setLoadingedit(false)
   } catch (error) {
    
   }
 }




    return(
        <>
        <Heading>Mens Product</Heading>
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>Discount</Th>
        <Th>Category</Th>
        <Th>Price</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
        
        </>
    )
}