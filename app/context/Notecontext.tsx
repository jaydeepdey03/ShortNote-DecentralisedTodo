import { createContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
export const NoteContext = createContext(
    {
        tasks: [],
        deleteTask: (id: string) => { },
        getAllTask: (id: string) => { },
        updateTask: (id: string, body: string) => { },
        addTask: (task: any) => { }
    }
);



const NotecontextProvider = ({ children }: { children: ReactNode }) => {

    const { contract, isLoading, error } = useContract("0x5c0F5269956db976bD0AA8393a592BEf3db74249")

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorState, setErrorState] = useState({})

    if (error) {
        setErrorState(error)
    }

    function deleteTask(id: string) {
        // delete function

    }

    async function getAllTask(id: string) {
        // get all task
        try {
            const { data, isLoading } = useContractRead(contract, "getNotes", []);
            setTasks(data);
            setLoading(false);
        } catch (err: any) {
            setErrorState(err);
            setLoading(false);
        }
    }

    function updateTask(id: string, body: string) {
        // update task
    }

    function addTask(task: any) {
        // add task
    }

    return (
        <NoteContext.Provider value={{ tasks, deleteTask, getAllTask, updateTask, addTask }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NotecontextProvider
