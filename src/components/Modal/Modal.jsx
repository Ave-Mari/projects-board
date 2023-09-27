import React from 'react';
import style from './Modal.scss'

export default function Modal({children}) {
  return (
    <div className="frame">
      <div className="modal-window">
       {children}
      </div>
    </div>
  )
}
