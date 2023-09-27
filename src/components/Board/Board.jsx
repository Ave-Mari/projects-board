import React from 'react';
import {useSelector} from 'react-redux';


export default function Board({ status  }) {
  const projectTasksList = useSelector(state => state[tasks]);
  console.log(projectTasksList)

  return (
    <div className='board'>
        {status}
        <div className='board-wrapper'>
          {projectTasksList.map((item) => {
            const {taskId, headline, description, status} = item;
            return (
              <TaskItem
                key={taskId}
                headline={headline}
                description={description}
                status={status}
                />
            )
          })}

        </div>
     

    </div>
  )
}
