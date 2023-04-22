import { Button, HStack, Input } from "@chakra-ui/react"
import { FormEvent, useState } from "react"

const Addtask = () => {
    const [statusInput, setStatusInput] = useState(true);
    const [content, setContent] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='4' mb='4'>
                <Input
                    h='46'
                    borderColor={!statusInput ? 'red.300' : 'transparent'}
                    variant='filled'
                    placeholder='Enter your task here...'
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
    )
}

export default Addtask
