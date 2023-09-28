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
    },
    {
        projectId: 436875,
        title: 'Another Example Project',
        tasks: [
            {
                taskId: 478549,
                headline: 'Test task 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum dolores perspiciatis!',
                status: 'Development',                
            },
            {
                taskId: 892379,
                headline: 'Test task 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                status: 'Queue',                
            },
            {
                taskId: 365077,
                headline: 'Test task 3',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusamus',
                status: 'Done',                
            }


        ]
    }
]

export const projectsList = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state, action.payload];
            
        case addTask: return null
        default:
            return state;
    }
}

