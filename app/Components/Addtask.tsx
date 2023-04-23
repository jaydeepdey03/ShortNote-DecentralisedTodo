import { Button, HStack, Input, Textarea, VStack } from "@chakra-ui/react"
import { FormEvent, useState } from "react"

interface AddtaskProps {
    addTask: (task: any) => void;
}

const Addtask = (props: AddtaskProps) => {
    const [statusInput, setStatusInput] = useState(true);
    const [content, setContent] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <VStack mt='4' mb='4'>
                <Textarea
                    h='20'
                    w="96"
                    borderColor={!statusInput ? 'red.300' : 'transparent'}
                    variant='filled'
                    placeholder='Enter your task here...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    colorScheme='telegram'
                    px='8'
                    w="full"
                    h='10'
                    type='submit'>Add Notes</Button>
            </VStack>
        </form>
    )
}

export default Addtask
