import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findNote, getNotes } from "../services/notes.tsx";
import useNotesContext from "../hooks/useNotesContext.tsx";
import Modal from "../components/Modal.tsx";
import EditNoteForm from "./EditNoteForm.tsx";
import { Note } from "../types.tsx";

const EditNotePage = () => {
  const { noteId } = useParams();
  const { setNotes } = useNotesContext();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const getNote = async () => {
      if (noteId) {
        const { note } = await findNote(noteId);
        setNote(note);
      }
    };

    getNote();

    // Clear note when component unmounts
    return () => setNote(null);
  }, [noteId]);

  // Update notes on home screen when modal is dismissed
  const handleDismiss = async () => {
    const { notes } = await getNotes();
    setNotes(notes);
  };

  return (
    <Modal handleDismiss={handleDismiss}>
      {note ? <EditNoteForm note={note} /> : "Loading..."}
    </Modal>
  );
};

export default EditNotePage;
