import { createContext } from "react";
import { Note } from "../types.tsx";

type ContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

export const NotesContext = createContext<ContextType | undefined>(undefined);
