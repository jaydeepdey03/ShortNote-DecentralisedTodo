import { createContext } from "react";
import { ReactNode } from "react";
export const NoteContext = createContext({});
import { useState } from "react";

const NotecontextProvider = ({ children }: { children: ReactNode }) => {

    const [tasks, setTasks] = useState([]);

    function deleteTask(id: string) {

        // delete function
    }

    function getCompletedTask(id: string) {
        // filter completed task
    }

    function updateTask(id: string, body: string) {
        // update task
    }

    function addTask(task: any) {
        // add task
    }

    return (
        <NoteContext.Provider value={{ tasks, deleteTask, getCompletedTask, updateTask, addTask }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NotecontextProvider
