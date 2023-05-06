import { Box, HStack, Image, StackDivider, Tag, TagLabel, TagRightIcon, Text, VStack } from "@chakra-ui/react";
import { tasks } from "../utils/data";
import { DeleteTask } from "./DeleteTask";
import UpdateTask from "./UpdateTask";
interface ShowtaskProps {
    tasks: any[];
    updateTask: (id: string, updatedTask: any) => void;
    deleteTask: (id: string) => void;
    checkCompletedTask: (id: string) => void;
    deleteTaskAll: () => void
}


const Showtask = (props: ShowtaskProps) => {
    const { updateTask, deleteTask, checkCompletedTask, deleteTaskAll } = props;
    if (!tasks.length) {
        return (
            <>
                <Box maxW='80%' display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Image m='10' w='30%' height={"auto"} src={"/emptynotes.svg"} alt='Sua lista está vazia :(' />
                    <Text fontFamily={"poppins"}>No task found</Text>
                </Box>
            </>
        );
    }
    return (
        <>
            <VStack
                divider={<StackDivider />}
                boxShadow={"md"}
                p='5'
                borderRadius='lg'
                w='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                alignItems='stretch'
            >

                {tasks.map((task) => (
                    <HStack
                        key={task.id}
                        opacity={task.isCompleted == true ? '0.2' : '1'}
                    >
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={task.isCompleted ? 's' : undefined}
                            cursor='pointer'
                        // onClick={() => checkTask(task.id)}
                        >
                            {task.note}
                        </Text>
                        <DeleteTask task={task} deleteTask={deleteTask} />
                        <UpdateTask task={task} updateTask={updateTask} />
                    </HStack>
                ))}
            </VStack>
        </>
    )
}

export default Showtask
