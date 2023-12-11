import React from 'react';
import './Modal.scss'

export default function Modal({children, closeModal, modalClass}) {
  return (
    <div className="frame" onClick={closeModal}>
      <div className={modalClass}>
       {children}
      </div>
    </div>
  )
}
