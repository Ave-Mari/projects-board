import React from "react";
import { useSelector } from "react-redux";
import { projectsList } from "../../reducers/projectsListReducer";
//components
import TaskItem from '../TaskItem/TaskItem'

export default function Board({ taskId, headline, description, status }) {

  return (
    <div className="board">
      <h2>{status}</h2>
      <div className="board-wrapper">
        <TaskItem
          key={taskId}
          headline={headline}
          description={description}
          status={status}
        />
      </div>
    </div>
  );
}
