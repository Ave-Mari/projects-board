import React from 'react';
import './Modal.scss'

export default function Modal({children}) {
  return (
    <div className="frame">
      <div className="modal-window">
       {children}
      </div>
    </div>
  )
}
