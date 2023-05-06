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


function DeleteTask(props: any) {
  const { task, deleteTask } = props;
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
            Do you want to delete this task?
          </ModalHeader>
          <ModalBody>
            <Text>{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>No</Button>
            <Button colorScheme='blue' onClick={() => deleteTask(task.id, onClose)}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { DeleteTask }
