import React from "react";

function Modal({ onClose }) {
  return (
    <div id="popup-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-neutral-800 rounded-lg shadow-lg p-6 w-96">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 text-red-500 w-12 h-12"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="text-lg font-medium text-[#DFB83B]">
            Invalid credentials! Please try again.
          </h3>
          <button
            className="mt-4 w-full bg-[#DFB83B] text-white py-2 rounded-lg hover:bg-amber-600"
            onClick={onClose} // Close modal when clicking "OK"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
