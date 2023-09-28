import React from "react";
import Board from "../components/Board/Board";
import { useParams } from "react-router-dom";
import { projectsList } from "../reducers/projectsListReducer";
import { useSelector } from "react-redux";

export default function ProjectItemPage({ children }) {
  const { projectId } = useParams();
  const projectsState = useSelector((state) => state.projectsList);
  const project = projectsState.find((p) => p.projectId === Number(projectId));
  const tasks = project.tasks;

  if (!project) {
    return <div>Project doesn't exist</div>;
  }

  console.log(project.tasks);

  return (
    <section>
      <h1>{project.title}</h1>
      {tasks.map((item) => {
        const { taskId, headline, description, status } = item;
        return (
          <Board
            taskId={taskId}
            headline={headline}
            description={description}
            status={status}
          />
        );
      })}
    </section>
  );
}
