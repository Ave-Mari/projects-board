import React from "react";
import Board from "../../components/Board/Board";
import { useParams, useNavigate } from "react-router-dom";
import { projectsList } from "../../reducers/projectsListReducer";
import { useSelector } from "react-redux";
//styles
import './ProjectItemPage.scss'

export default function ProjectItemPage() {
  const { projectId } = useParams();
  const projectsState = useSelector((state) => state.projectsList);
  const project = projectsState.find((p) => p.projectId === Number(projectId));
  const tasks = project.tasks;


  if (!project) {
    return <div><h2>Project doesn't exist</h2></div>;
  }

  console.log('length:', tasks.length);

  return (
    <section>
      <h1>{project.title}</h1>
      <div className="boards-wrapper">
      {tasks.map((item) => {
        const { taskId, headline, description, status } = item;
        if (tasks.length > 0) {
          return (
            <Board
              taskId={taskId}
              headline={headline}
              description={description}
              status={status}
            />
          )
        } else {
          return (
            <>
            <Board
              status="Queue"
            />
            <Board
              status="Development"
            />
            <Board
              status="Done"
            />
            </>
          )
        }
        
      })}
      </div>     
    </section>
  );
}
