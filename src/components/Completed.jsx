import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function Completed() {
  const { tasks, toggleStatus } = useContext(TaskContext)
  const completedtasks = tasks.filter(task => task.status === 'complete')
  return (
    <div>
      {completedtasks.length === 0 ? (
        <p>No Completed Tasks</p>
      ) : (
        <>
          <h2 className='mt-2'>Completed Tasks</h2>
          {completedtasks.map((task) => (
            <div key={task.id}>
              <h3>Title: {task.title}</h3>
              <p>Due date: {task.duedate}</p> 
              <p>Priority: {task.priority}</p>
              <p>Project: {task.project}</p>
              <button onClick={() => toggleStatus(task.id)}>
                {task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Completed
