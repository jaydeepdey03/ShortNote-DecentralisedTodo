import { Box, Button, Flex, HStack, Heading, Text, useColorMode } from "@chakra-ui/react"
import ToggleTheme from "./ToggleTheme"
import { ConnectWallet, Web3Button, useMetamask, useSwitchChain, useNetworkMismatch, useConnectedWallet, useWalletConnect } from "@thirdweb-dev/react"
import { Mumbai } from "@thirdweb-dev/chains";

const Navbar = () => {
    const { colorMode } = useColorMode()
    const isMismatched = useNetworkMismatch()
    const switchChain = useSwitchChain()
    const connect = useMetamask()
    return (
        <Flex justifyContent={"space-between"} height={"20"} padding={"3"}>
            <Text
                p={"2"}
                fontWeight='extrabold'
                fontSize='2xl'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
            >
                TaskChain
            </Text>
            <HStack spacing={"5"} margin={"3"}>
                {/* <ConnectWallet theme={colorMode} btnTitle="Connect Wallet" /> */}
                {
                    isMismatched ?
                        <>
                            <Button colorScheme="purple" onClick={() => switchChain(Mumbai.chainId)}>Switch to Mumbai</Button>
                        </> :
                        <>
                            <ConnectWallet
                                theme={colorMode}
                                btnTitle="Connect Wallet"
                            />
                        </>
                }

                <ToggleTheme />
            </HStack>
        </Flex>
    )
}

export default Navbar
