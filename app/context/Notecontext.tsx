import { createContext } from "react";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
export const NoteContext = createContext(
    {
        tasks: [],
        deleteTask: (id: string) => { },
        getAllTask: () => { },
        updateTask: (id: string, body: string) => { },
        addTask: (task: any) => { },
        errorState: ""
    }
);

const NotecontextProvider = ({ children }: { children: ReactNode }) => {

    const { contract } = useContract("0x5c0F5269956db976bD0AA8393a592BEf3db74249")
    const { data: notes } = useContractRead(contract, "getNotes");
    const { mutateAsync: addNote } = useContractWrite(contract, "addNote")

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorState, setErrorState] = useState("")


    function deleteTask(id: string) {
        // delete function
    }

    async function getAllTask() {
        try {
            setTasks(notes)
        } catch (err: any) {
            setErrorState(err)
            console.log(err)
        }
    }

    function updateTask(id: string, body: string) {
        // update task
    }

    async function addTask(noteString: string) {
        // add task
        try {
            setLoading(true)
            const data = await addNote({ args: [noteString] });
            console.log("Add Note success", data);
            setLoading(false)
        } catch (err: any) {
            console.error("Add Note failure", err);
            setErrorState(err)
        }
    }


    useEffect(() => {
        getAllTask()
        console.log(notes)
    }, [notes])

    return (
        <NoteContext.Provider value={{ tasks, deleteTask, getAllTask, updateTask, addTask, errorState }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NotecontextProvider
