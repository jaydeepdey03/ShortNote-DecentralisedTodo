import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import { Box, Button, Flex, Heading, IconButton, Image, Link, Textarea, VStack, useColorMode } from "@chakra-ui/react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Addtask from "../Components/Addtask";
import Showtask from "../Components/Showtask";
import { ConnectWallet, useAddress, useMetamask, useNetworkMismatch, useSwitchChain } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";
import ToggleTheme from "../Components/ToggleTheme";


const Home = () => {

  const [tasks, setTasks] = useState([]);
  const { colorMode } = useColorMode()
  const isMismatched = useNetworkMismatch()
  const switchChain = useSwitchChain()
  const connect = useMetamask()
  const address = useAddress()

  useEffect(() => {
    // fetch
  }, [tasks]);

  function deleteTask(id: string) {
    // delete function
  }

  function deleteTaskAll() {
    setTasks([]);
  }

  function checkCompletedTask(id: string) {
    // filter completed task
  }

  function updateTask(id: string, body: string) {
    // update task
  }

  function addTask(task: any) {
    // add task
  }

  if (isMismatched) {
    return (
      <Box minH="100vh">
        <Box position={"absolute"} right={10} top={10}>
          <ToggleTheme />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} minH="100vh">
          <Button leftIcon={<Image src={"/polygon.png"} width={5} height={5} alt="" />} colorScheme={"twitter"} onClick={() => switchChain(Mumbai.chainId)}>Switch to Mumbai</Button>
        </Box>
      </Box>

    )
  }

  if (!address) {
    return (
      <Box minH={"100vh"}>
        <Box position={"absolute"} right={10} top={10}>
          <ToggleTheme />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} minH="100vh">
          <ConnectWallet
            theme={colorMode}
            btnTitle="Connect Wallet"
          />
        </Box>
      </Box>

    )
  }
  return (
    <>
      <ToastContainer
        position="top-right"
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

      <Box minH="100vh">
        <Navbar />
        <VStack p={4} pb={28}>
          <Addtask addTask={addTask} />

          <Showtask tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} checkCompletedTask={checkCompletedTask} />

          <Flex position='absolute' bottom='5'>
            <Link href='https://github.com/jaydeepdey03' target='_blank' >
              <IconButton
                aria-label="Github"
                icon={<FaGithub />}
                rounded={"full"}
                size='md'
                m='1'
              />
            </Link>
            <Link href='https://www.linkedin.com/in/jaydeep-dey03/' target='_blank'>
              <IconButton
                aria-label="Linkedin"
                icon={<FaLinkedin />}
                rounded={"full"}
                size='md'
                m='1'
              />
            </Link>
            <Link href='https://instagram.com/jaydeep_dey03' target='_blank'>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                rounded={"full"}
                size='md'
                m='1'
              />
            </Link>
            <Link href='https://twitter.com/jaydeep_dey03' target='_blank'>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                rounded={"full"}
                size='md'
                m='1'
              />
            </Link>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
