import { Button } from "@chakra-ui/react"


export default function Pagination({page,setPage,totalProucts,numOfbtn}){
    return(
        <div>
        <Button _hover={{  bg:"gray.500"}}  bg="gray.900" color="white" isDisabled={page==1} onClick={()=>setPage(page-1)}>Previous</Button>
        {
       numOfbtn.map((e)=>{
         return <Button margin={1}  bg="yellow.400"  onClick={()=>setPage(e)}>{e}</Button>
        })
        }
        <Button  _hover={{  bg:"gray.500"}}  bg="gray.900" color="white" isDisabled={page==Math.ceil(totalProucts/9)}  onClick={()=>setPage(page+1)}>Next</Button>

     </div>
    )
}