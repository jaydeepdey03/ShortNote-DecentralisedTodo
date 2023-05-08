import Navbar from "../Components/Navbar";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import Addtask from "../Components/Addtask";
import Showtask from "../Components/Showtask";
import { useAddress, useMetamask, useNetworkMismatch } from "@thirdweb-dev/react";
import ToggleTheme from "../Components/ToggleTheme";
import Footer from "../Components/Footer";
import useGlobalState from "../hook/useGlobalState";

const Homepage = () => {
  const { colorMode } = useColorMode()
  const isMismatched = useNetworkMismatch()

  const connect = useMetamask()
  const address = useAddress()

  const { tasks, deleteTask, updateTask, addTask } = useGlobalState()

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
