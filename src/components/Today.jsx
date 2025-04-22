import React,{useContext} from 'react'
import { TaskContext } from '../context/TaskContext'
 


function Today() {
  const{tasks}=useContext(TaskContext)
  const today = new Date().toISOString().split('T')[0];
  const todaytasks=tasks.filter(tasks=>tasks.duedate===today)
  return (
    <div>
       {todaytasks.length === 0 ? (
        <p>no new tasks</p>
      ) : (
        <>
          <h2>Today Tasks</h2>
          {todaytasks.map((task) => (
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

export default Today

