import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import { Flex, Heading, IconButton, Link, Textarea, VStack, useColorMode } from "@chakra-ui/react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Home: NextPage = () => {

  const [tasks, setTasks] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
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

  return (
    <div>
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

      <Navbar />
      <VStack p={4} minH='100vh' pb={28}>

        <Heading
          p='5'
          fontWeight='extrabold'
          size='xl'
          bgGradient='linear(to-l, teal.300, blue.500)'
          bgClip='text'
        >
          TaskChain
        </Heading>
        <Flex position='absolute' bottom='5'>
          <Link href='https://github.com/raminhuk' target='_blank' >
            <IconButton
              aria-label="Github"
              icon={<FaGithub />}
              rounded={"full"}
              size='md'
              m='1'
            />
          </Link>
          <Link href='https://www.linkedin.com/in/fabio-junior-raminhuk-740669121/' target='_blank'>
            <IconButton
              aria-label="Linkedin"
              icon={<FaLinkedin />}
              rounded={"full"}
              size='md'
              m='1'
            />
          </Link>
          <Link href='https://www.instagram.com/fabiormk/' target='_blank'>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              rounded={"full"}
              size='md'
              m='1'
            />
          </Link>
          <Link href='https://twitter.com/fabio_rmk' target='_blank'>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              rounded={"full"}
              size='md'
              m='1'
            />
          </Link>
          <Link href='https://www.facebook.com/fabio.raminhuk' target='_blank'>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              rounded={"full"}
              size='md'
              m='1'
            />
          </Link>
        </Flex>
      </VStack>
    </div>
  );
};

export default Home;
