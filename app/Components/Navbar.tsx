import { Avatar, Box, Button, Flex, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode } from "@chakra-ui/react"
import ToggleTheme from "./ToggleTheme"
import { ConnectWallet, Web3Button, useMetamask, useSwitchChain, useNetworkMismatch, useConnectedWallet, useWalletConnect, useAddress, useDisconnect } from "@thirdweb-dev/react"
import { useState } from "react"


const Navbar = () => {
    const disconnect = useDisconnect()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Flex justifyContent={"space-between"} height={"20"} padding={"3"}>
            <Text
                p={"2"}
                fontWeight='extrabold'
                fontSize='2xl'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
            >
                ShortNote
            </Text>
            <HStack spacing={"5"} margin={"3"}>
                <Menu>
                    <MenuButton as={Avatar} size="sm" cursor={"pointer"} onClick={() => setIsOpen(!isOpen)} />
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
