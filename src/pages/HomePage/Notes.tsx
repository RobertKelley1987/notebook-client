import React from "react";
import NoteCard from "./NoteCard.tsx";
import { Note } from "../../types.tsx";
import Masonry from "react-responsive-masonry";

type NotesProps = {
  notes: Note[];
};

const Notes = ({ notes }: NotesProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="font-bold text-gray-800 text-4xl mb-4">Notes</h1>
      <Masonry columnsCount={3} gutter="1rem">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </Masonry>
    </div>
  );
};

export default Notes;
