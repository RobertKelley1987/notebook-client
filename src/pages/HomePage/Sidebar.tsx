import React from "react";
import { Link } from "react-router-dom";
import NoteSVG from "../../svgs/NoteSVG.tsx";
import CategorySVG from "../../svgs/CategorySVG.tsx";

const Sidebar = () => {
  return (
    <nav className="w-[275px] text-gray-800">
      <ul className="flex flex-col gap-2">
        <li className="flex font-bold gap-2">
          <NoteSVG />
          <Link to="/notes/new">Notes</Link>
        </li>
        <li className="flex font-bold gap-2">
          <CategorySVG />
          <Link to="/categories">Edit Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
