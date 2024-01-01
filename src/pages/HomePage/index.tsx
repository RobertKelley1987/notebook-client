import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { getNotes } from "../../services/notes.tsx";
import useNotesContext from "../../hooks/useNotesContext.tsx";
import useUserIdContext from "../../hooks/useUserIdContext.tsx";
import Sidebar from "./Sidebar.tsx";
import Notes from "./Notes.tsx";
import NewNoteForm from "../NewNoteForm.tsx";

const HomePage = () => {
  const { notes, setNotes } = useNotesContext();
  const { userId } = useUserIdContext();

  useEffect(() => {
    const fetchNotes = async () => {
      if (userId) {
        const { notes } = await getNotes();
        setNotes(notes);
      }
    };

    fetchNotes();
  }, [userId]);

  return (
    <div className="m-4 mt-[calc(1rem+60px)]">
      <div className="flex justify-center">
        <Sidebar />
        <div className="flex flex-col basis-full gap-8 items-center">
          <NewNoteForm />
          <Notes notes={notes} />
        </div>
      </div>
      <Link className="fixed bottom-4 right-4" to="/notes/new">
        New Note
      </Link>
    </div>
  );
};

export default HomePage;
