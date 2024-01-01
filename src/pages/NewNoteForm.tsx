import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useNotesContext from "../hooks/useNotesContext.tsx";
import { createNote } from "../services/notes.tsx";
import NoteForm from "./NoteForm.tsx";
import "./NewNoteForm.css"; // Adds placeholder text for contenteditable div

const NewNoteForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { setNotes } = useNotesContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (titleRef.current && contentRef.current) {
      const { notes } = await createNote(
        titleRef.current.value,
        contentRef.current.innerText
      );
      setNotes(notes);
      navigate(-1);
    }
  };

  return (
    <NoteForm
      titleRef={titleRef}
      contentRef={contentRef}
      handleClick={handleClick}
      handleKeyDown={() => {}}
    />
  );
};

export default NewNoteForm;
