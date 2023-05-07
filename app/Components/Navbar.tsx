import { Avatar, Box, Button, Flex, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useToast } from "@chakra-ui/react"
import ToggleTheme from "./ToggleTheme"
import { useAddress, useDisconnect } from "@thirdweb-dev/react"
import { useState } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
    const router = useRouter()
    const disconnect = useDisconnect()
    const toast = useToast()
    const handleDisconnect = () => {
        disconnect()
        router.push("/")
        toast({
            title: 'Wallet Disconnected',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }
    const address = useAddress()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Flex justifyContent={"space-between"} height={"20"} padding={"3"}>
            <Text
                p={"2"}
                fontWeight='extrabold'
                fontSize='2xl'
                bgGradient='linear(to-l, yellow.400, orange.400)'
                bgClip='text'
            >
                Scribbly
            </Text>
            <HStack spacing={"5"} margin={"3"}>
                <Menu>
                    {/* <MenuButton as={Avatar} name="Jaydeep Dey" size="sm" cursor={"pointer"} onClick={() => setIsOpen(!isOpen)} /> */}
                    <Avatar as={MenuButton} name={address?.slice(-2) + " " + address?.slice(-1)} size="sm" cursor={"pointer"} onClick={() => setIsOpen(!isOpen)} />
                    <MenuList>
                        <MenuItem onClick={handleDisconnect}>Disconnect Wallet</MenuItem>
                    </MenuList>
                </Menu>

                <ToggleTheme />
            </HStack>
        </Flex>
    )
}

export default Navbar
