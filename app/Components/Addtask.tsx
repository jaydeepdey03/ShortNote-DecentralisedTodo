import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, HStack, Input, Textarea, VStack } from "@chakra-ui/react"
import { FormEvent, useState } from "react"
import useGlobalState from "../hook/useGlobalState";

const Addtask = (props: any) => {
    const [statusInput, setStatusInput] = useState(true);
    const [content, setContent] = useState('');
    const { addTask, addNoteLoadingState } = useGlobalState()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(content);
        addTask(content)
    }

    // console.log(loading, 'loading from add task');
    

    return (
        <>
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
                        loadingText="Adding"
                        isLoading={addNoteLoadingState}
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
