import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateNote, getNotes } from "../services/notes.tsx";
import useNotesContext from "../hooks/useNotesContext.tsx";
import NoteForm from "./NoteForm.tsx";
import { Note } from "../types.tsx";
import "./NewNoteForm.css"; // Adds placeholder text for contenteditable div

type EditNoteFormProps = {
  note: Note;
};

const EditNoteForm = ({ note }: EditNoteFormProps) => {
  const { setNotes } = useNotesContext();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeout = useRef<number | null>(null);
  const navigate = useNavigate();

  // Update refs for form inputs to note values when component mounts
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.value = note.title;
    }

    if (contentRef.current) {
      contentRef.current.innerText = note.content;
    }
  }, []);

  // Save edits to db as user types
  const handleKeyDown = async () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(async () => {
      const title = titleRef.current?.value;
      const content = contentRef.current?.innerText;

      if (title || content) {
        await updateNote(note.id, title, content);
      }
    }, 500);
  };

  // Update notes when modal is dismissed
  const handleClick = async () => {
    const { notes } = await getNotes();
    setNotes(notes);
    navigate(-1);
  };

  return (
    <NoteForm
      titleRef={titleRef}
      contentRef={contentRef}
      handleKeyDown={handleKeyDown}
      handleClick={handleClick}
    />
  );
};

export default EditNoteForm;
