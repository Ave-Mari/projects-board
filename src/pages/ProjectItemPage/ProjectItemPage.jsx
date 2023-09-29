import React from "react";
import Board from "../../components/Board/Board";
import { useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../../reducers/projectsListReducer";
import { useSelector } from "react-redux";
//styles
import "./ProjectItemPage.scss";

export default function ProjectItemPage() {
  const { projectId } = useParams();
  const projectsState = useSelector((state) => state.projectsList);
  const project = projectsState.find((p) => p.projectId === Number(projectId));
  const tasks = project.tasks;
  const status = tasks.status;
  console.log("status: ", status);

  if (!project) {
    return (
      <div>
        <h2>Project doesn't exist</h2>
      </div>
    );
  }

  return (
    <section>
      <h1>{project.title}</h1>
      {tasks.length === 0 ? (
        <div className="boards-wrapper">
          <Board status="Queue" tasks={[]} />
          <Board status="Development" tasks={[]} />
          <Board status="Done" tasks={[]} />
        </div>
      ) : (
        <div className="boards-wrapper">
          <Board
            status="Queue"
            tasks={tasks.filter((item) => item.status === "Queue")}
          />
          <Board
            status="Development"
            tasks={tasks.filter((item) => item.status === "Development")}
          />
          <Board
            status="Done"
            tasks={tasks.filter((item) => item.status === "Done")}
          />
        </div>
      )}
    </section>
  );
}
