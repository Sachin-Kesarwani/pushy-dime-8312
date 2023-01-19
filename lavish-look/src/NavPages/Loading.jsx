import { Skeleton ,Box,Grid, GridItem} from "@chakra-ui/react";


export default function Loadingindicator(){

    let arr=new Array
    for(let i=0;i<6;i++){
        arr[i]=i
    }
    return(
        <>

        <Grid  templateColumns= {{
  sm: '1fr',
  md: 'repeat(2,1fr)',
  lg: 'repeat(3,1fr)',
  xl: 'repeat(3,1fr)',
  '2xl': 'repeat(4,1fr)',
}} style={{margin:"auto",display:"grid",width:"80%",gridTemplateColumns:"repeat(3,1fr)"}}>
   {
    arr.map(()=>{
    return    <Skeleton borderRadius={8} marginTop={5} w="25vw" h="30vw" />
    })
   }
    
        </Grid>
       
         

    
        </>
    )
}