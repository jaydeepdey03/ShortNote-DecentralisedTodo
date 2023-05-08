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
import useGlobalState from '../hook/useGlobalState';


function DeleteTask(props: any) {
  const { id } = props;
  const { deleteTask, deleteLoadingState } = useGlobalState()
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
        <ModalContent>
          <ModalHeader>Delete Item</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={deleteLoadingState}
              loadingText='Deleting...'
              colorScheme="red"
              onClick={() => deleteTask(id)}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { DeleteTask }
