import React from "react";
import { Link } from "react-router-dom";
import UserOptions from "./UserOptions.tsx";
import MenuSVG from "../svgs/MenuSVG.tsx";

const Header = () => {
  return (
    <header className="h-[60px] p-3 flex justify-between w-full fixed top-0 bg-white z-10">
      <div className="flex items-center gap-2">
        <MenuSVG />
        <Link
          to="/"
          className="-translate-y-[1.7px] font-sans font-bold text-3xl text-gray-800"
        >
          mymemo
        </Link>
      </div>
      <UserOptions />
    </header>
  );
};

export default Header;
