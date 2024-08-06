import React from "react"

type ModalProps = {
  title: string
  onClose: () => void
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  title,
  children,
  onClose,
}) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h4>{title}</h4>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  </div>
)

export default Modal
