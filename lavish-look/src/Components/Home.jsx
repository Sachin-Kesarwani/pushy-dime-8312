
import React from "react"

import DrawerExample from "./Drawer"
import { useDisclosure,Button } from "@chakra-ui/react"

export default function Home(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    function open(){
        onOpen()
    }

    return(
        <>
         <Button ref={btnRef} colorScheme='teal' onClick={open}>
          Open
        </Button>
        <DrawerExample/>
        </>
    )
}