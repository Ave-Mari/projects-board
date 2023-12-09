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
export const deleteTask = (taskId, projectId) => {
    return {
        type: 'DELETE_TASK',
        payload: { taskId, projectId }
    }
}

export const updateTaskStatus = (taskId, newStatus) => ({
    type: 'UPDATE_TASK_STATUS',
    payload: { taskId, newStatus }
})