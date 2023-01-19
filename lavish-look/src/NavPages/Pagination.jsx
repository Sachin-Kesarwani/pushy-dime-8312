import { Button } from "@chakra-ui/react"


export default function Pagination({page,setPage,totalProucts,numOfbtn}){
    return(
        <div>
        <Button isDisabled={page==1} onClick={()=>setPage(page-1)}>Previous</Button>
        {
       numOfbtn.map((e)=>{
         return <Button onClick={()=>setPage(e)}>{e}</Button>
        })
        }
        <Button isDisabled={page==Math.ceil(totalProucts/9)}  onClick={()=>setPage(page+1)}>Next</Button>

     </div>
    )
}