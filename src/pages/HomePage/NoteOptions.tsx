import React from "react";
import DropdownMenu from "./DropdownMenu.tsx";
import DeleteButton from "./DeleteButton.tsx";

type NoteOptionsProps = {
  noteId?: string;
  children?: React.ReactNode;
};

const NoteOptions = ({ noteId, children }: NoteOptionsProps) => {
  return (
    <div
      className={
        children ? "relative flex justify-between" : "relative flex justify-end"
      }
    >
      <DropdownMenu>
        {noteId && <DeleteButton noteId={noteId} />}
        <button className="text-nowrap">Add Categories</button>
      </DropdownMenu>
      {children}
    </div>
  );
};

export default NoteOptions;
