import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import NoteOptions from "./NoteOptions.tsx";
import { Note } from "../../types.tsx";

type NoteProps = {
  note: Note;
};

const NoteCard = ({ note }: NoteProps) => {
  const noteRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  return (
    <div
      ref={noteRef}
      className="flex flex-col justify-between bg-gray-100 rounded-lg p-3"
    >
      <Link
        to={`/notes/${note.id}/edit`}
        state={{ backgroundLocation: location }}
      >
        <article>
          <h2 className="font-bold text-gray-800">{note.title}</h2>
          <div className="whitespace-pre-line break-words text-gray-800 line-clamp-3">
            {note.content}
          </div>
        </article>
      </Link>
      <NoteOptions noteId={note.id} />
    </div>
  );
};

export default NoteCard;
