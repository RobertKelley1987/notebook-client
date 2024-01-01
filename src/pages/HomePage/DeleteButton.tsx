import React from "react";
import useNotesContext from "../../hooks/useNotesContext.tsx";
import { deleteNote } from "../../services/notes.tsx";

type DeleteButtonProps = {
  noteId: string;
};

const DeleteButton = ({ noteId }: DeleteButtonProps) => {
  const { setNotes } = useNotesContext();

  const handleClick = async () => {
    const { notes } = await deleteNote(noteId);
    setNotes(notes);
  };
  return (
    <button onClick={handleClick} className="text-nowrap">
      Delete Note
    </button>
  );
};

export default DeleteButton;
