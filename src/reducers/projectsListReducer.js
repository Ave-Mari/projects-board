import { addProject } from '../actions/actions'

const initialState = [
    {
        projectId: 142354,
        title: 'Example Project',
        tasks: []
    }
]

// {
//     projectsList: [
//         {
//             projectId: 142354,
//             title: 'Example Project',
//             tasks: []
//         }
//     ]
// }

export const projectsList = (state = initialState, action) => {
    switch(action.type) {
        case addProject:
            return [...state, action.payload]
        default:
            return state;
    }
}

