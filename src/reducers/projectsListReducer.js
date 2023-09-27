const initialState = [
    {
        projectId: 142354,
        title: 'Example Project',
        tasks: []
    }
]

export const projectsList = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return {
                ...state, 
                projectsList: [state.projectsList, action.payload]
            }
        default:
            return state;
    }
}

