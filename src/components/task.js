import React from 'react'

const Task = ({ title, description }) => {
    return (
        <div className='task'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Task
