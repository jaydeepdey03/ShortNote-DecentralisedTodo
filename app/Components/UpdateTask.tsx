import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'
import { useState, useRef } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi'


const UpdateTask = (props: any) => {
    const { task, updateTask } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [body, setBody] = useState('');
    const initialRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <IconButton
                icon={<FiEdit />}
                aria-label='Edit'
                rounded={"full"}
                onClick={onOpen}
            />
            <Modal
                isCentered
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent w='90%'>
                    <ModalHeader>Update Note </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            {/* Put  defaultValue={task.body}*/}
                            <Input ref={initialRef} placeholder='Updated Value..' onChange={(e) => setBody(e.target.value)} onFocus={(e) => setBody(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>Cancel</Button>
                        {/* Put onclick */}
                        <Button colorScheme='blue' >
                            Update Note
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateTask
