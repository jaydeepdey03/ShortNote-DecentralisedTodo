import type { NextPage } from "next";
import { Box, Button, Flex, HStack, Heading, IconButton, Image, Link, Text, Textarea, VStack, useColorMode } from "@chakra-ui/react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaGithub } from "react-icons/fa";
import Footer from "../Components/Footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ConnectWallet, useAddress, useMetamask, useNetworkMismatch, useSwitchChain } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

const Home: NextPage = () => {
  // import all the functions from global state

  // const [tasks, setTasks] = useState([]);
  const address = useAddress()
  const isMismatched = useNetworkMismatch()
  const switchChain = useSwitchChain()
  const connect = useMetamask()

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box className="main-bg">
        <VStack p="3">
          {/* Navbar */}
          <Box height={"10vh"} display={"flex"} justifyContent={"space-between"} p="3" pl="6" width={"100vw"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}><span className="app-grad">Scribbly</span></Text>
            <HStack>
              <Button colorScheme="blackAlpha" leftIcon={<FaGithub />}>Github Repo</Button>
            </HStack>
          </Box>
          <VStack height={"70vh"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} textAlign={"center"}>
            <Text fontSize={{ "base": "4xl", "md": "4xl", "lg": "5xl" }} color={"white"} fontWeight={"bold"}>Introducing fully decentralized <br /><span className="text-gradient">Short Note</span> Platform</Text>
            <Text maxW={{ "base": "md", "md": "lg", "lg": 'xl' }} fontWeight={"semibold"} fontSize={{ "base": "md", "md": "lg", "lg": 'xl' }} color="gray.100">
              Create, store, and access your notes securely with our decentralized short note taking application using blockchain technology.
            </Text>
            {address === null ?

              (isMismatched ?
                <Button leftIcon={<Image src={"/polygon.png"} width={5} height={5} alt="" />} colorScheme={"twitter"} onClick={() => switchChain(Mumbai.chainId)}>Switch to Mumbai</Button>
                :
                <Link href="/home"><Button rightIcon={<ArrowForwardIcon />} _hover={{ bg: 'black' }} style={{ marginTop: '21px' }} bg="blackAlpha.700" color={"white"}>Get Started</Button></Link>)

              :
              <Button rightIcon={<ArrowForwardIcon />} _hover={{ bg: 'black' }} onClick={()=>connect({chainId: Mumbai.chainId})} style={{ marginTop: '21px' }} bg="blackAlpha.700" color={"white"}>Connect Wallet</Button>

            }
          </VStack>
          <Footer />
        </VStack>
      </Box>
    </>
  );
};

export default Home;
