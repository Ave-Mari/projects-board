import React from "react";

export default function TaskItem({ headline, description, status }) {
  return (
    <li>
      <h3>{headline}</h3>
      <p>{description}</p>
      <p>{status}</p>
    </li>
  );
}
