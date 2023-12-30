import React from "react";

// SVG from the noun project - artist is "Creative Stall"

const NotepadSVG = () => {
  return (
    <svg
      className="w-10"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1200 1200"
    >
      <path
        transform="scale(12)"
        d="m94.819 49.295c0 15.944-8.5059 30.676-22.313 38.648-13.808 7.972-30.819 7.972-44.627 0-13.808-7.9717-22.313-22.704-22.313-38.648s8.5059-30.676 22.313-38.648c13.808-7.9717 30.819-7.9717 44.627 0 13.808 7.972 22.313 22.704 22.313 38.648"
        fill="none"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path d="m602.3 135.59c-251.82 0-455.95 204.13-455.95 455.95 0 251.81 204.13 455.93 455.95 455.93 251.8 0 455.93-204.12 455.93-455.93 0.007813-251.82-204.12-455.95-455.93-455.95zm1.3789 813.17c-19.273 0-83.254-132.76-83.254-132.76h166.51s-63.984 132.76-83.258 132.76zm80.316-156.76h-168v-252h168zm0-276h-168v-48h168zm0-72h-168v-77.039c0-45.816 38.184-82.969 84-82.969s84 37.152 84 82.969z" />
    </svg>
  );
};

export default NotepadSVG;
