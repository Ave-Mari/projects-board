import { addProject, addTask, updateTaskStatus } from "../actions/actions";

const initialState = [
  {
    projectId: 142354,
    title: "Example Project",
    tasks: [
      {
        taskId: 214532,
        headline: "Create the design layout",
        description: "Create design in Figma and show it to client",
        status: "Development",
        date: "30.09.2023",
      },
      {
        taskId: 12645,
        headline: "Interviews",
        description: "Plan the interviews with potentional cadidates",
        status: "Queue",
        date: "30.09.2023",
      },
      {
        taskId: 67343,
        headline: "Purchases for office",
        description: "Discuss the purchases for office-space with manager",
        status: "Done",
        date: "30.09.2023",
      },
    ],
  },
  {
    projectId: 436875,
    title: "Another Example Project",
    tasks: [
      {
        taskId: 478549,
        headline: "Test task 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum dolores perspiciatis!",
        status: "Development",
        date: "30.09.2023",
      },
      {
        taskId: 892379,
        headline: "Test task 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        status: "Queue",
        date: "30.09.2023",
      },
      {
        taskId: 365077,
        headline: "Test task 3",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusamus",
        status: "Done",
        date: "30.09.2023",
      },
    ],
  },
];

export const projectsList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];

    case "ADD_TASK":
      const { projectId, newTask } = action.payload;
      return state.map((project) => {
        if (project.projectId === Number(projectId)) {
          const projectUpdate = {
            ...project,
            tasks: [...project.tasks, newTask],
          };
          return projectUpdate;
        }
        return project;
      });
    case "UPDATE_TASK_STATUS":
      const { taskId, newStatus } = action.payload;
      const updatedProjects = state.map((project) => {
        if (project.tasks.some((task) => task.taskId === taskId)) {
          const updatedTasks = project.tasks.map((task) =>
            task.taskId === taskId ? { ...task, status: newStatus } : task
          );
          return { ...project, tasks: updatedTasks };
        }
        return project;
      });

      return updatedProjects;
    default:
      return state;
  }
};
