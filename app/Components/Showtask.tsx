import { Box, HStack, Image, Spinner, StackDivider, Text, VStack } from "@chakra-ui/react";
// import { tasks } from "../utils/data";
import { DeleteTask } from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import useGlobalState from "../hook/useGlobalState";
import { BigNumber } from "ethers";
import Markcompleted from "./Markcompleted";

interface Note {
    0: BigNumber;
    1: string;
    2: string;
    3: boolean;
    id: BigNumber;
    username: string;
    note: string;
    completed: boolean;
}




const Showtask = (props: any) => {
    const { updateTask, deleteTask } = props;

    const { tasks, isFetched } = useGlobalState()

    // console.log(isFetched,'loading from show task')
    if(isFetched){
        return (
            <Spinner size={"lg"} />
        )
    }


    if (!tasks || !tasks.length && isFetched === false) {
        return (
            <>
                <Box maxW='80%' display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Image m='10' w='30%' height={"auto"} src={"/emptynotes.svg"} alt='no note' />
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
                    <HStack key={noteArray.id.toNumber()}>
                        <Text
                            w='100%'
                            p='8px'
                            borderRadius='lg'
                            as={noteArray[3] ? 's' : 'b'}
                        >
                            {noteArray[2].replace(/\\/g, '').replace(/"/g, '')}
                        </Text>
                        <Markcompleted id={noteArray.id.toNumber()}/>
                        <DeleteTask task={noteArray} id={noteArray.id.toNumber()} />
                        <UpdateTask task={noteArray} id={noteArray.id.toNumber()} />
                    </HStack>
                ))}


            </VStack>
        </>
    )
}

export default Showtask
