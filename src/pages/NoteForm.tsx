import React from "react";
import { useParams } from "react-router-dom";
import NoteOptions from "./HomePage/NoteOptions.tsx";

type NoteFormProps = {
  titleRef: React.RefObject<HTMLInputElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  handleKeyDown: () => void;
  handleClick: () => void;
};

const NoteForm = ({
  titleRef,
  contentRef,
  handleKeyDown,
  handleClick,
}: NoteFormProps) => {
  const { noteId } = useParams();

  return (
    <div className="w-[300px] border bg-white border-gray-800 h-min p-3 rounded-lg flex flex-col items-center gap-4">
      <div className="flex flex-col w-full gap-2">
        <input
          className="text-gray-800 w-full font-bold focus:outline-none placeholder:text-gray-400"
          ref={titleRef}
          placeholder="TITLE"
          onKeyDown={handleKeyDown}
        />
        <div
          className="focus:outline-none text-gray-800 cursor-text"
          ref={contentRef}
          contentEditable
          data-placeholder="a new note..."
          onKeyDown={handleKeyDown}
        ></div>
        <NoteOptions noteId={noteId}>
          <button onClick={handleClick}>Close</button>
        </NoteOptions>
      </div>
    </div>
  );
};

export default NoteForm;
