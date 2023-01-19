import { useToast,Wrap,WrapItem,Button, } from '@chakra-ui/react'
 
 export default function Showstatusintoast(props) {
    const toast = useToast()
   
  
    return (
      <Wrap>
       
          <WrapItem >
            <Button
              onClick={() =>
                toast({
                  title: `${props.status} toast`,
                  position: "top-left",
                  isClosable: true,
                })
              }
            >
              Show toast
            </Button>
          </WrapItem>
     
      </Wrap>
    )
  }