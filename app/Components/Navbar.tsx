import { Box, Flex, HStack, Text, useColorMode } from "@chakra-ui/react"
import ToggleTheme from "./ToggleTheme"
import { ConnectWallet } from "@thirdweb-dev/react"

const Navbar = () => {
    const {colorMode} = useColorMode()
    console.log(colorMode)
    return (
        <Flex justifyContent={"space-between"} height={"16"} padding={"3"}>
            <Text fontFamily={"poppins"}>Thirdweb</Text>
            <HStack spacing={"5"} margin={"3"}>
                <ConnectWallet theme={colorMode} btnTitle="Connect Wallet" />
                <ToggleTheme />
            </HStack>
        </Flex>
    )
}

export default Navbar
