import React from 'react'
import Task from './task'

const Tasks = ({tasks}) => {
    return (
        <div>
         {tasks.map((task) => <Task title={task.title} description={task.description} />)} 
        </div>
    )
}

export default Tasks
