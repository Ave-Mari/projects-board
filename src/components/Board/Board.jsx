import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { updateTaskStatus } from "../../actions/actions";
//components
import TaskItem from "../TaskItem/TaskItem";
//styles
import "./Board.scss";

export default function Board({ onDrop, tasks, status, showMoreOfTask }) {
  const dispatch = useDispatch();


  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (task) => {
      const taskId = task.taskId;
      const newStatus = status;
      onDrop(taskId, newStatus);
      console.log(
        `Перетащена задача с ID: ${task.taskId} на доску "${status}"`
      );
    },
  });
  
  return (
    <div
      className={
        status === "Queue"
          ? "board-queue"
          : status === "Development"
          ? "board-development"
          : "board-done"
      }
      ref={drop}
    >
      <h2>{status}</h2>
      <div className="board-wrapper">
        <ul>
          {tasks.map((item) => {
            const { taskId, headline, description, status, date } = item;
            return (
              <TaskItem
                key={taskId}
                taskId={taskId}
                headline={headline}
                description={description}
                status={status}
                date={date}
                showMoreOfTask={showMoreOfTask}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
