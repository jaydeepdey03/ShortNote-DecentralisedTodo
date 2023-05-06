import { NoteContext } from "../context/Notecontext"
import { useContext } from "react"

const useGlobalState = () => {
    return useContext(NoteContext)
}

export default useGlobalState
