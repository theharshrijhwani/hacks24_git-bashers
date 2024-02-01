import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay shadow-xl rounded-[12px] w-fit p-10 m-16 bg-white absolute flex justify-center items-center">
      <div className="modal-content">
        <button className="close-button font-bold text-2xl" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
