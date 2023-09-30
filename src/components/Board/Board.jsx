import React from "react";
import { useSelector } from "react-redux";
import { projectsList } from "../../reducers/projectsListReducer";
//components
import TaskItem from "../TaskItem/TaskItem";
//styles
import './Board.scss'

export default function Board({ tasks, status }) {
  return (
    <div className="board">
      <h2>{status}</h2>
      <div className="board-wrapper">
        <ul>
          {tasks.map((item) => {
            const { taskId, headline, description, status, date } = item;
            return (
              <TaskItem
                key={taskId}
                headline={headline}
                description={description}
                status={status}
                date={date}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
