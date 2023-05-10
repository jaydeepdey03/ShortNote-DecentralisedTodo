import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { Button, IconButton, Spinner, Text, Tooltip, useToast } from "@chakra-ui/react"
import useGlobalState from "../hook/useGlobalState";
import { useState } from 'react'
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";

const Markcompleted = (props: any) => {

    const { id, completed } = props;
    // const task = tasks.find((task: any) => task.id === id);
    // const icon = task && task.completed ?  <CheckIcon /> : <CloseIcon />;
    const address = useAddress()
    const { contract } = useContract("0xEb45827032e94Cf09951fbA9FB239D73d5C664e2")
    const { mutateAsync: toggleComplete } = useContractWrite(contract, "toggleComplete")
    const [toggleCompleteLoadingState, setToggleCompleteLoadingState] = useState(false)

    const toast = useToast()

    async function toggleCompleteFunction(id: string) {
        // toggle complete
        setToggleCompleteLoadingState(true)
        try {
            const data = await toggleComplete({ args: [id, address] });
            setToggleCompleteLoadingState(false)
            toast({
                title: completed === true ? 'Task marked completed' : 'Task Marked incomplete',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } catch (err: any) {
            console.log(err)
            toast({
                title: 'Error',
                description: "User Rejected",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setToggleCompleteLoadingState(false)
        }
    }

    return (
        <>
            <Tooltip label={completed ? "Mark as incomplete" : "Mark as complete"} aria-label="A tooltip">
                <IconButton
                    icon={toggleCompleteLoadingState ? <Spinner size="sm" /> : !completed ? <CheckIcon /> : <CloseIcon />}
                    aria-label='check'
                    rounded={"full"}
                    onClick={() => toggleCompleteFunction(id)}
                />
            </Tooltip>
        </>
    )
}

export default Markcompleted