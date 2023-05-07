import { Avatar, Box, Button, Flex, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode } from "@chakra-ui/react"
import ToggleTheme from "./ToggleTheme"
import { useAddress, useDisconnect } from "@thirdweb-dev/react"
import { useState } from "react"


const Navbar = () => {
    const disconnect = useDisconnect()
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
                ShortNote
            </Text>
            <HStack spacing={"5"} margin={"3"}>
                <Menu>
                    {/* <MenuButton as={Avatar} name="Jaydeep Dey" size="sm" cursor={"pointer"} onClick={() => setIsOpen(!isOpen)} /> */}
                    <Avatar as={MenuButton} name={address?.slice(-2) + " " + address?.slice(-1)} size="sm" cursor={"pointer"} onClick={() => setIsOpen(!isOpen)} />
                    <MenuList>
                        <MenuItem onClick={disconnect}>Disconnect Wallet</MenuItem>
                    </MenuList>
                </Menu>

                <ToggleTheme />
            </HStack>
        </Flex>
    )
}

export default Navbar
