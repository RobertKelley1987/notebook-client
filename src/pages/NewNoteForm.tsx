import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNote, updateNote, findNote } from "../services/notes.tsx";
import useUserIdContext from "../hooks/useUserIdContext.tsx";
import useNotesContext from "../hooks/useNotesContext.tsx";
import NewNoteSVG from "../svgs/NewNoteSVG.tsx";
import "./NewNoteForm.css"; // Adds placeholder text for contenteditable div
import MoreSVG from "../svgs/MoreSVG.tsx";

const NewNoteForm = () => {
  const { noteId } = useParams();
  const { userId } = useUserIdContext();
  const { setNotes } = useNotesContext();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const getNote = async (userId, noteId) => {
      const { note } = await findNote(userId, noteId);

      if (titleRef.current && contentRef.current) {
        titleRef.current.value = note.title;
        contentRef.current.innerText = note.content;
      }
    };

    if (noteId) {
      getNote(userId, noteId);
    }
  }, [noteId]);

  const handleKeyDown = async () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(async () => {
      const title = !titleRef.current ? "" : titleRef.current.value;
      const content = !contentRef.current ? "" : contentRef.current.innerText;

      if (!title && !content) {
        return;
      }

      if (noteId) {
        // If in edit mode...
        await updateNote(userId, noteId, title, content);
      } else {
        // if in new note mode...
        const { note } = await createNote(userId, title, content);
        navigate(`/notes/${note.id}/edit`);
      }
    }, 500);
  };

  const handleClick = async () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="border border-gray-800 h-min p-3 rounded-lg flex flex-col items-center gap-4 w-full">
      {errorMessage && <span className="text-red">{errorMessage}</span>}
      <form className="flex flex-col w-full gap-2">
        <input
          className="text-gray-800 w-full font-bold focus:outline-none placeholder:text-gray-400"
          ref={titleRef}
          placeholder="A New Note"
          onKeyDown={handleKeyDown}
        />
        <div
          className="focus:outline-none text-gray-800"
          ref={contentRef}
          contentEditable
          data-placeholder="Your journey begins here..."
          onKeyDown={handleKeyDown}
        ></div>
        <div className="flex justify-between">
          <MoreSVG className="stroke-gray-800 rotate-90" />
          <button onClick={handleClick}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default NewNoteForm;
