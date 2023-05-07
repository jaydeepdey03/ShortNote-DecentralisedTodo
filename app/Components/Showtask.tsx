import { Box, HStack, Image, StackDivider, Text, VStack } from "@chakra-ui/react";
// import { tasks } from "../utils/data";
import { DeleteTask } from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import useGlobalState from "../hook/useGlobalState";

interface Note {
    0: {
        type: string;
        hex: string;
    };
    1: string;
    2: string;
    3: boolean;
}


const Showtask = (props: any) => {
    const { updateTask, deleteTask } = props;

    const { tasks } = useGlobalState()
    if (!tasks || !tasks.length) {
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
                divider={<StackDivider borderColor="gray.200" />}
                boxShadow={"md"}
                p='5'
                borderRadius='lg'
                border={"1px"}
                borderColor={"gray.200"}
                w='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
                alignItems='stretch'
                spacing={"3"}
            >

                {tasks.map((noteArray: Note) => (
                    <HStack key={noteArray[0].hex}>
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={noteArray[3] ? 's' : 'b'}
                            cursor='pointer'
                        >
                            {noteArray[2].replace(/\\/g, '').replace(/"/g, '')}
                        </Text>
                        <DeleteTask task={noteArray} deleteTask={deleteTask} />
                        <UpdateTask task={noteArray} updateTask={updateTask} />
                    </HStack>
                ))}

            </VStack>
        </>
    )
}

export default Showtask
