import React from 'react'
import Board from '../components/Board/Board'

export default function ProjectItemPage() {
  return (
    <section>
      <Board status="Queue" children={
        <p>lfkjgorfhjk</p>} 
      />
      <Board status="Development" children={
        <p>lffgorfhjk</p>} 
      />
      <Board status="Done" children={
        <p>lfkjgorfhjk</p>} 
      />
    </section>
  )
}
