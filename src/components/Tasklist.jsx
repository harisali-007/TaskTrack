import React, { useState } from 'react'

function Tasklist() {
    const[Task,setTask]=useState([
        {
            id:1,
            title:'hello',
            priority:'low',
            duedate:2025-4-20,
            status:"incomplete",
            project:'tasktrack'
        },
        {
            id:2,
            title:'hello2',
            priority:'high',
            duedate:2025-4-20,
            status:"complete",
            project:'law'
        }

    ])


    function handleToggle(id) {
        setTask(Task.map(task => 
          task.id === id ? { ...task, status: task.status ==="complete"? "incomplete":"complete" } : task
        ));
      }
 
function handledelete(id){
    setTask(Task.filter(Task=>Task.id !==id))
}


  return (
    <div>
<div className="space-y-4">
      {Task.map((task) => (
        <div
          key={task.id}
          className="bg-white dark:bg-gray-800 p-4 rounded shadow-md"
        >
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>
          <div className="text-sm mt-2 space-y-1">
            <p>Due: {task.duedate}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Project: {task.project}</p>
            <button onClick={() => handleToggle(task.id)}>
            {task.status === "complete" ? "Mark Incomplete" : "Mark Complete"}
           </button>
           <button onClick={() => handledelete(task.id)}>
        Delete
           </button>
          </div>
        </div>
      ))}
    </div>
 
      
    </div>
  )
}

export default Tasklist
