export const addProject = (newProject) => {
    return {
        type: 'ADD_PROJECT',
        payload: newProject
    }
}

export const addTask = (projectId, newTask) => {
    return {
        type: 'ADD_TASK',
        payload: { projectId, newTask }
    }
}