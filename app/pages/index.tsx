import type { NextPage } from "next";
import Navbar from "../Components/Navbar";
import { Flex, Heading, IconButton, Link, Textarea, VStack, useColorMode } from "@chakra-ui/react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Addtask from "../Components/Addtask";
import Showtask from "../Components/Showtask";
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
      <VStack p={4} pb={28}>
        <Addtask addTask={addTask} />
        
        <Showtask tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} checkCompletedTask={checkCompletedTask}/>

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
    </div>
  );
};

export default Home;
