import { Skeleton ,Box,Grid, SkeletonText,SkeletonCircle,useColorModeValue} from "@chakra-ui/react";


export default function SingleLoadingindicator(){

   
    return(
        <>

<Box padding='6' boxShadow='lg' bg='white'>
<Skeleton borderRadius={8} marginTop={5} w="25vw" h="30vw" />
  <SkeletonText mt='12' noOfLines={4} spacing='4' skeletonHeight='10' />
</Box>
    
        </>
    )
}