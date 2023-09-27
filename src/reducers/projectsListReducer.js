import { addProject, addTask } from '../actions/actions'

const initialState = [
    {
        projectId: 142354,
        title: 'Example Project',
        tasks: [
            {
                headline: 'Create the design layout',
                description: 'Create design in Figma and show it to client',
                status: 'Development',                
            },
            {
                headline: 'Interviews',
                description: 'Plan the interviews with potentional cadidates',
                status: 'Queue',                
            },
            {
                headline: 'Purchases for office',
                description: 'Discuss the purchases for office-space with manager',
                status: 'Done',                
            }


        ]
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
            return [...state, action.payload];
        case addTask: return null
        default:
            return state;
    }
}

