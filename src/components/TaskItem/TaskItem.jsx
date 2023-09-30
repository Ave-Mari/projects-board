import React from "react";
//styles
import './TaskItem.scss'

export default function TaskItem({ headline, description, status, date }) {
  return (
    <li className={status === "Queue" ? "queue" : status === "Development" ? "development" : "done"}>
      <h3>{headline}</h3>
      <p className="description">{description}</p>
      <p className="status">{status}</p>
      <p className="date">{date}</p>
    </li>
  );
}
