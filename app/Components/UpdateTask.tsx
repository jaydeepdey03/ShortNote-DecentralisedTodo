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
import { useState, useRef, useEffect } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import useGlobalState from '../hook/useGlobalState';
import { ethers } from 'ethers';

// interface for updatetask
interface Note {
    0: {
        type: string;
        hex: string;
    };
    1: string;
    2: string;
    3: boolean;
}


const UpdateTask = (props: any) => {
    const { id } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [body, setBody] = useState('');
    const initialRef = useRef<HTMLInputElement>(null)

    const { updateTask, updateNoteLoadingState } = useGlobalState()

    const handleUpdate = () => {
        updateTask(id, body, onClose)
    }


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
                        <Button isLoading={updateNoteLoadingState} loadingText="Updating..." colorScheme='blue' onClick={handleUpdate}>
                            Update Note
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateTask
