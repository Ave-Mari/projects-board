import React from 'react';
import './Modal.scss'

export default function Modal({children, closeModal}) {
  return (
    <div className="frame" onClick={closeModal}>
      <div className="modal-window">
       {children}
      </div>
    </div>
  )
}
