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




export default function Tableofdata(props){
   // console.log(props)
    return (
        <>
        <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Category</Th>
        <Th>Price</Th>
        <Th>Rating</Th>
        <Th>Discount</Th>
      </Tr>
    </Thead>
    <Tbody>
       {
        props.mensdata.map((e)=>{
            return <Tr key={e.id} >
                <Td>{e.id}</Td>
                <Td>{e.title}</Td>
                <Td>{e.category}</Td>
                <Td>{e.price}</Td>
                <Td>{e.rating}</Td>
                <Td>{e.discount}</Td>
            </Tr>
        })
       }
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
        
        
        </>
    )
}