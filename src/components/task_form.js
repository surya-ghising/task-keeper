import React from 'react'

const TaskForm = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
            <label>Reminder</label>
            <input type='text' placeholder='Add Task' />
            </div>
            <div className='form-control'>
            <label>Reminder</label>
            <input type='text' placeholder='Add Task' />
            </div>
            <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' placeholder='Add Task' />
            </div>
            <input className='btn btn-block' value='Save Task' type='submit' />
        </form>
    )
}

export default TaskForm
