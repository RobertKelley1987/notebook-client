import React from "react";
import MoreSVG from "../svgs/MoreSVG.tsx";

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
  return (
    <div className="w-[300px] border bg-white border-gray-800 h-min p-3 rounded-lg flex flex-col items-center gap-4">
      <div className="flex flex-col w-full gap-2">
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
      </div>
    </div>
  );
};

export default NoteForm;
