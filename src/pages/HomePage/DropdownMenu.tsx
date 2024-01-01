import React, { useEffect, useRef, useState } from "react";
import MoreSVG from "../../svgs/MoreSVG.tsx";

type DropdownMenuProps = {
  children: React.ReactNode;
};

function assertIsNode(target: EventTarget | null): asserts target is Node {
  if (!target || !("nodeType" in target)) {
    throw new Error("Element clicked is not a react node");
  }
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const wrapper = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    function closeDropdown(e: MouseEvent) {
      assertIsNode(e.target);
      if (wrapper.current?.contains(e.target)) return;
      setDropdownOpen(false);
    }

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  useEffect(() => {
    if (dropdown.current) {
      const rightEdge = dropdown.current.getBoundingClientRect().right;
      setIsFlipped(rightEdge > window.innerWidth);
    }

    return () => setIsFlipped(false);
  }, [dropdownOpen]);

  const classNames = () => {
    let classNames =
      "table border border-gray-800 absolute bg-white text-gray-800 top-7 p-2 text-left";
    if (isFlipped) {
      classNames += " right-0";
    }
    return classNames;
  };

  const renderDropdownMenu = (children: React.ReactNode) => {
    return (
      <div ref={dropdown} className={classNames()}>
        {children}
      </div>
    );
  };

  return (
    <button
      ref={wrapper}
      onClick={() => setDropdownOpen(true)}
      className="relative"
    >
      <MoreSVG className="stroke-gray-800 rotate-90 hover:cursor-pointer" />
      {dropdownOpen && renderDropdownMenu(children)}
    </button>
  );
};

export default DropdownMenu;
