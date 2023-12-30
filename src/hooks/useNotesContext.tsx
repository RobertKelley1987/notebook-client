import { useContext } from "react";
import { NotesContext } from "../context/Notes.tsx";

const useNotesContext = () => {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    throw new Error(
      "Notes context must be used in a component wrapped by a NoteContext provider."
    );
  }

  return notesContext;
};

export default useNotesContext;
