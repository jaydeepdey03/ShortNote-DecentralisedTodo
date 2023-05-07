import Navbar from "../Components/Navbar";
import { Box, Button, Image, VStack, useColorMode } from "@chakra-ui/react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Addtask from "../Components/Addtask";
import Showtask from "../Components/Showtask";
import { useAddress, useMetamask, useNetworkMismatch, useSwitchChain } from "@thirdweb-dev/react";
import ToggleTheme from "../Components/ToggleTheme";
import Footer from "../Components/Footer";
import useGlobalState from "../hook/useGlobalState";

const Homepage = () => {
    const { colorMode } = useColorMode()
  const isMismatched = useNetworkMismatch()
  
  const connect = useMetamask()
  const address = useAddress()

  const { tasks, deleteTask, updateTask, addTask, getAllTask } = useGlobalState()

  useEffect(() => {
    // fetch
  }, [tasks]);


  if (isMismatched) {
    return (
      <Box minH="100vh">
        <Box position={"absolute"} right={10} top={10}>
          <ToggleTheme />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} minH="100vh">
          
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
      </Box>

    )
  }
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

      <Box minH="100vh">
        <Navbar />
        <VStack p={4} pb={28}>
          <Addtask addTask={addTask} />

          <Showtask tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />

          <Footer />
        </VStack>
      </Box>
    </>
  );
}

export default Homepage
