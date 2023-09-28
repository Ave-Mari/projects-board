import React from 'react'
import Board from '../components/Board/Board'
import { projectsList } from '../reducers/projectsListReducer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function ProjectItemPage({ children, projectsList }) { 
  const { projectId } = useParams();
  const projectsState = useSelector((state) => state.projectsList);
  const project = projectsState.find((p) => p.projectId === Number(projectId))
  const tasks = project.tasks;

  console.log('tasks: ', tasks)

  
  return (
    <section>
       {tasks.map((item) => {
        const { taskId, headline, description, status } = item;
        if (item.status === status) {
          return (
            <Board
              key={projectId}
              taskId={taskId}
              headline={headline}
              description={description}
              status={status}
            />
          );
        }
      })} 
      {children}
    </section>
  );
}
