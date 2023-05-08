import { createContext } from "react";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { useToast } from "@chakra-ui/react";
interface Note {
    0: BigNumber;
    1: string;
    2: string;
    3: boolean;
    id: BigNumber;
    username: string;
    note: string;
    completed: boolean;
}


export const NoteContext = createContext(
    {
        tasks: [] as Note[],
        deleteTask: (id: string) => { },
        getAllTask: () => { },
        updateTask: (id: string, body: string, onClose: () => void) => { },
        addTask: (task: any) => { },
        errorState: "",
        isFetched: false,
        addNoteLoadingState: false,
        updateNoteLoadingState: false,
        deleteLoadingState: false, 
    }
);

const NotecontextProvider = ({ children }: { children: ReactNode }) => {
    const address = useAddress()
    const { contract } = useContract("0xEb45827032e94Cf09951fbA9FB239D73d5C664e2")
    const { data: notes, isLoading } = useContractRead(contract, "getNotes", [address]);
    const { mutateAsync: addNote } = useContractWrite(contract, "addNote")
    const { mutateAsync: updateNotes } = useContractWrite(contract, "updateNotes")
    const { mutateAsync: toggleComplete } = useContractWrite(contract, "toggleComplete")
    const { mutateAsync: deleteNote } = useContractWrite(contract, "deleteNote")

    const [tasks, setTasks] = useState<Note[]>([]);
    const [addNoteLoadingState, setAddNoteLoadingState] = useState(false)
    const [updateNoteLoadingState, setUpdateNoteLoadingState] = useState(false)
    
    const [deleteLoadingState, setDeleteLoadingState] = useState(false)

    const [errorState, setErrorState] = useState("")
    const [isFetched, setIsFetched] = useState(false)
    const [completed, setCompleted] = useState(false);

    const toast = useToast()


    async function deleteTask(id: string) {
        // delete function
        setDeleteLoadingState(true)
        try {
            const data = await deleteNote({ args: [id, address] });
            toast({
                title: 'Note Deleted',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setDeleteLoadingState(false)
          } catch (err: any) {
            console.error("contract call failure", err);
            toast({
                title: 'Error',
                description: "User Rejected",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setDeleteLoadingState(false)
          }
      
    }

    async function getAllTask() {
        setIsFetched(isLoading)
        try {
            setTasks(notes)
            setIsFetched(isLoading)
        } catch (err: any) {
            console.log(err)
        }
    }

    async function updateTask(id: string, body: string, onClose: () => void) {
        setUpdateNoteLoadingState(true)
        try {
            const data = await updateNotes({ args: [id, body, address] });
            console.log("Update Note success", data);
            toast({
                title: 'Note Updated',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setUpdateNoteLoadingState(false)
            onClose()
        } catch (err: any) {
            console.error("Update Note failure", err.message);
            toast({
                title: 'Error',
                description: "User Rejected",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setUpdateNoteLoadingState(false)
            onClose()
        }
    }

    async function addTask(noteString: string) {
        // add task
        setAddNoteLoadingState(true)
        try {
            const data = await addNote({ args: [noteString, address] });
            console.log("Add Note success", data);
            toast({
                title: 'Note Added',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setAddNoteLoadingState(false)
        } catch (err: any) {
            console.log("Add Note failur e", err.message);
            toast({
                title: 'Error',
                description: "User Rejected",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setAddNoteLoadingState(false)
        }
    }

    


    useEffect(() => {
        getAllTask()
    }, [notes, address])

    return (
        <NoteContext.Provider value={{ isFetched, addNoteLoadingState, updateNoteLoadingState, tasks, deleteTask, getAllTask, updateTask, addTask, errorState, deleteLoadingState }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NotecontextProvider
