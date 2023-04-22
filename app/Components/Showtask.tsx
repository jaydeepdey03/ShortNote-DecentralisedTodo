import { Box, Image, Tag, TagLabel, TagRightIcon, Text } from "@chakra-ui/react";

interface ShowtaskProps {
    tasks: any[];
    updateTask: (id: string, updatedTask: any) => void;
    deleteTask: (id: string) => void;
    checkCompletedTask: (id: string) => void;
    deleteTaskAll: () => void
}


const Showtask = (props: ShowtaskProps) => {
    const { tasks, updateTask, deleteTask, checkCompletedTask } = props;
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
        <div>

        </div>
    )
}

export default Showtask
