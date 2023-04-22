import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    IconButton
} from '@chakra-ui/react'
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi'

interface DeleteTaskProps {
    task: any[];
    deleteTask: (id: string, updatedTask: any) => void;
    deleteTaskAll: () => void;
}


const DeleteTask = (props: DeleteTaskProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { task, deleteTask, deleteTaskAll } = props;
    return (
        <>
            <Button
                colorScheme='gray'
                px='8'
                h='45'
                color='gray.500'
                mt='8'
                onClick={onOpen}
                >
                Excluir Todos
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w='90%'>
                <ModalHeader>
                    Você realmente deseja excluir todas as tarefas?
                </ModalHeader>
                <ModalFooter>
                <Button mr={3} onClick={onClose}>Não</Button>
                <Button colorScheme='blue' onClick={() => deleteTaskAll()}>
                    Sim
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
  }

  function DeleteAllTask(props: DeleteTaskProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton
            icon={<FiTrash2 />}
            aria-label='Delete'
            rounded={"full"}
            onClick={onOpen}
        />

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w='90%'>
            <ModalHeader>
                Delete the task
            </ModalHeader>
            <ModalBody>
                {/* <Text>{task.body}</Text> */}
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>No</Button>
              {/* <Button colorScheme='blue' onClick={() => deleteTask(task.id)}>
                Yes
              </Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export { DeleteTask, DeleteAllTask }
