import React from 'react'
import Board from '../components/Board/Board'

export default function ProjectItemPage() {
 
  return (
    <section>
      <Board status="Queue" 
      />
      <Board status="Development" 
      />
      <Board status="Done" 
      />
    </section>
  )
}
