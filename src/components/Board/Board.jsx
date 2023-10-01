import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { projectsList } from "../../reducers/projectsListReducer";
import { updateTaskStatus } from "../../actions/actions";
//components
import TaskItem from "../TaskItem/TaskItem";
//styles
import "./Board.scss";

export default function Board({ tasks, status }) {
  const dispatch = useDispatch();

  const handleDrop = (taskId, newStatus) => {
    dispatch(updateTaskStatus(taskId, newStatus));
  };

  const [, ref] = useDrop({
    accept: "TASK",
    drop: (item) => {
      const taskId = item.taskId;
      const newStatus = status;
      handleDrop(taskId, newStatus);
      console.log(
        `Перетащена задача с ID: ${item.taskId} на доску "${status}"`
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
      ref={ref}
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
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
