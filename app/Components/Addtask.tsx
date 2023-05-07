import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, HStack, Input, Textarea, VStack } from "@chakra-ui/react"
import { FormEvent, useState } from "react"
import useGlobalState from "../hook/useGlobalState";

const Addtask = (props: any) => {
    const [statusInput, setStatusInput] = useState(true);
    const [content, setContent] = useState('');
    const { addTask, errorState } = useGlobalState()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(content);
        addTask(content)
    }

    return (
        <>
            {errorState && (
                <Alert status="error" variant="left-accent">
                    <AlertIcon />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorState}</AlertDescription>
                </Alert>
            )}
            <form onSubmit={handleSubmit} >
                <HStack mt='4' mb='4'>
                    <Input
                        h='46'
                        borderColor={!statusInput ? 'red.300' : 'transparent'}
                        variant='filled'
                        placeholder='Add a new task....'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button
                        colorScheme='blue'
                        px='8'
                        pl='10'
                        pr='10'
                        h='46'
                        type='submit'>Add Notes</Button>
                </HStack>
            </form>
        </>
    )
}

export default Addtask
