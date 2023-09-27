import React from 'react'

export default function TaskItem({ headline, description, status }) {
  return (
    <div>
        <h3>{headline}</h3>
        <p>{description}</p>
        <p>{status}</p>
    </div>
  )
}
