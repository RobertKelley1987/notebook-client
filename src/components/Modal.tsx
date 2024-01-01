import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  handleDismiss: () => void;
  children: React.ReactNode;
};

const Modal = ({ handleDismiss, children }: ModalProps) => {
  const navigate = useNavigate();

  const handleMouseDown = (e: React.MouseEvent) => {
    // Do not dismiss on right click
    if (e.button === 2) {
      return;
    }
    // Custom logic
    handleDismiss();
    // Return to prev page / state
    navigate(-1);
  };

  return ReactDOM.createPortal(
    <div
      className="z-20 bg-gray-800/50 fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      onMouseDown={handleMouseDown}
    >
      <div onMouseDown={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
