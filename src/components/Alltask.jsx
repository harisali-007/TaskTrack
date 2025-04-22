import React, { useContext,useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function Alltask() {
  const { tasks, toggleStatus, deleteTask } = useContext(TaskContext)
  const [selectpriority,setselectpriority]=useState('')
  const handleprioritychange=(e)=>{
    setselectpriority(e.target.value)
  }
  const selectedtask=selectpriority?tasks.filter(tasks=>tasks.priority === selectpriority):tasks;
  return (
    
    <div>
       <div className="mb-3">
        <label htmlFor="priorityFilter" className="form-label mt-2">Seleect Priority:</label>
        <select
          id="priorityFilter"
          className="form-select"
          value={selectpriority}
          onChange={handleprioritychange}
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    {selectedtask.length === 0 ? (
     <p>No Tasks Available</p>
   ) : (
     <>
       <h2 className='mt-2'>All Tasks</h2>
       {selectedtask.map((task) => (
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
   
 </div>  )
}

export default Alltask
