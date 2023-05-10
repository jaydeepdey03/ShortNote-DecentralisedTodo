import type { NextPage } from "next";
import { Box, Button, Flex, HStack, Heading, Icon, IconButton, Image, Link, Text, Textarea, VStack, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Footer from "../Components/Footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ConnectWallet, useAddress, useMetamask, useNetworkMismatch, useSwitchChain } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import ToggleTheme from "../Components/ToggleTheme";

const Home: NextPage = () => {
  // import all the functions from global state

  // const [tasks, setTasks] = useState([]);
  const address = useAddress()
  const isMismatched = useNetworkMismatch()
  const switchChain = useSwitchChain()
  const connect = useMetamask()

  return (
    <>
      <Box className="main-bg">
        {/* <ToggleTheme /> */}
        <VStack p="3" minH="full">
          {/* Navbar */}
          <Box height={"10vh"} display={"flex"} justifyContent={"space-between"} p="3" pl="6" width={"100vw"}>
            <Link href="/"><Text fontSize={"2xl"} fontWeight={"bold"}><span className="app-grad">Scribbly</span></Text></Link>
            <HStack>
              <Link href="https://github.com/jaydeepdey03/scribbly" target="_blank">
                <Box bg="black" display="inline-flex" alignItems="center" borderRadius="md" p={2} pr="3" pl="3">
                  <Icon as={FaGithub} color="white" mr={2} />
                  <Text color="white" fontWeight={"semibold"}>Github Repo</Text>
                </Box>
              </Link>
              {/* <Button bg="black" leftIcon={<FaGithub />}>Github Repo</Button> */}
            </HStack>
          </Box>
          <VStack height={"70vh"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} textAlign={"center"}>
            <Text fontSize={{ "base": "4xl", "md": "4xl", "lg": "5xl" }} color={"white"} fontWeight={"bold"}>Introducing fully decentralized <br /><span className="text-gradient">Short Note</span> Platform</Text>
            <Text maxW={{ "base": "md", "md": "lg", "lg": 'xl' }} fontWeight={"semibold"} fontSize={{ "base": "md", "md": "lg", "lg": 'xl' }} color="gray.100">
              Create, store, and access your notes securely with our decentralized short note taking application using blockchain technology.
            </Text>
            {address ?

              (isMismatched ?
                <HStack>
                  <Button className="my-transition" style={{ marginTop: '21px' }} leftIcon={<Image src={"/polygon.png"} width={5} height={5} alt="" />} colorScheme={"twitter"} onClick={() => switchChain(Mumbai.chainId)}>Switch to Mumbai</Button>
                  <Button
                    style={{ marginTop: '21px' }}
                    colorScheme="yellow"
                    leftIcon={<Image src={"/metamask.svg"} width={5} height={5} alt="" />}
                    onClick={() =>
                      window.open("https://metamask.io/download/", "_blank")
                    }
                  >
                    Download Metamask
                  </Button>
                </HStack>
                :
                <Link className="my-transition" href="/home"><Button rightIcon={<ArrowForwardIcon />} _hover={{ bg: 'black' }} style={{ marginTop: '21px' }} bg="blackAlpha.700" color={"white"}>Get Started</Button></Link>
              )

              :
              // <Button rightIcon={<ArrowForwardIcon />} _hover={{ bg: 'black' }} onClick={()=>connect({chainId: Mumbai.chainId})} style={{ marginTop: '21px' }} bg="blackAlpha.700" color={"white"}>Connect Wallet</Button>

              <Box className="my-transition" style={{ marginTop: '21px' }}>
                <ConnectWallet
                  theme={"light"}
                  btnTitle="Connect Wallet"
                />
              </Box>
            }
          </VStack>

        </VStack>
        <Flex flexDirection={{ "base": "column", "lg": "row" }} mr="16" ml="16" justifyContent={{ "base": "center", "md": "space-around" }} alignItems={"center"} minH={"100vh"} >
          <Text maxW="xl" textAlign={{ "base": "center", "lg": "left" }} fontSize={{ "base": "3xl", "md": "4xl" }} fontWeight={"semibold"} color={"white"}><span>A new way to take and store notes</span> built on the blockchain.</Text>
          <Image m="10" src={"/takingnotes.svg"} width={"auto"} height={"xs"} alt="" />

        </Flex>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
