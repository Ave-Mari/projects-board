import React from "react";

export default function TaskItem({ headline, description, status, date }) {
  return (
    <li>
      <h3>{headline}</h3>
      <p>{description}</p>
      <p>{status}</p>
      <p>{date}</p>
    </li>
  );
}
