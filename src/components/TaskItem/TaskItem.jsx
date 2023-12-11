import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { deleteTask } from '../../actions/actions'
import { useParams} from "react-router-dom";
//styles
import "./TaskItem.scss";
//images
import deleteIcon from "./delete-icon.svg";

export default function TaskItem({
  taskId,
  headline,
  description,
  status,
  date,
}) {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { taskId: taskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  
  const { projectId } = useParams();
  
  const deleteItem = () => {
    dispatch(deleteTask(taskId, projectId));
  };



  return (
    <li
      className={
        status === "Queue"
          ? "queue"
          : status === "Development"
          ? "development"
          : "done"
      }
      ref={drag}
    >
      <h3>{headline}</h3>
      <p className="description">{description}</p>
      <p className="status">{status}</p>
      <p className="date">{date}</p>
      <button className="delete-btn" onClick={deleteItem}>
        <img src={deleteIcon} alt="delete" />
      </button>
      <button className="btn-show">Show task</button>
    </li>
  );
}
