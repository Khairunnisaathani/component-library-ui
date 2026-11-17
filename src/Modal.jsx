import React, { useEffect } from "react";

function Modal({ isOpen, onClose, title, children }) {

useEffect(() => {
if (!isOpen) return;

function handleEscape(event) {
  if (event.key === "Escape") {
    onClose();
  }
}

document.addEventListener("keydown", handleEscape);

return () => {
  document.removeEventListener("keydown", handleEscape);
};

}, [isOpen, onClose]);

if (!isOpen) return null;

return (
<div
className="modal-overlay"
onClick={onClose}
>
<div
className="modal-content"
role="dialog"
aria-modal="true"
aria-labelledby="modal-title"
onClick={(event) => event.stopPropagation()}
>
<button
className="modal-close"
onClick={onClose}
aria-label="Close modal"
>
×
</button>

    <h2 id="modal-title">{title}</h2>

    <div>{children}</div>
  </div>
</div>

);
}

export default Modal;

