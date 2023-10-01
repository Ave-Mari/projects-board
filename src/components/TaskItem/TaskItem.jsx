import React from "react";
import { useDrag } from "react-dnd";
//styles
import "./TaskItem.scss";

export default function TaskItem({
  taskId,
  headline,
  description,
  status,
  date,
}) {
  const [, ref] = useDrag({
    type: "TASK",
    item: { taskId: taskId },
  });
  return (
    <li
      className={
        status === "Queue"
          ? "queue"
          : status === "Development"
          ? "development"
          : "done"
      }
      ref={ref}
    >
      <h3>{headline}</h3>
      <p className="description">{description}</p>
      <p className="status">{status}</p>
      <p className="date">{date}</p>
    </li>
  );
}
