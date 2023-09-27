import React from 'react'

export default function Board({ status, children }) {
  return (
    <div>
        {status}
        {children}
    </div>
  )
}
