import { addProject, addTask } from '../actions/actions'

const initialState = [
    {
        projectId: 142354,
        title: 'Example Project',
        tasks: [
            {
                taskId: 214532,
                headline: 'Create the design layout',
                description: 'Create design in Figma and show it to client',
                status: 'Development',                
            },
            {
                taskId: 12645,
                headline: 'Interviews',
                description: 'Plan the interviews with potentional cadidates',
                status: 'Queue',                
            },
            {
                taskId: 67343,
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

