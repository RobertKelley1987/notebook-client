import React from "react";
import NoteCard from "./NoteCard.tsx";
import { Note } from "../../types.tsx";

type NotesProps = {
  notes: Note[];
};

const Notes = ({ notes }: NotesProps) => {
  return (
    <div className="flex flex-col gap-4 w-[350px]">
      <h1 className="font-bold text-gray-800 text-4xl mb-4">Notes</h1>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
