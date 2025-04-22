import React, { createContext, useState,useEffect } from 'react'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => {
   
    const newTask = {
      ...task,
      id: Date.now(),       
      status: 'incomplete'   
    }
    setTasks([...tasks, newTask]);
    
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleStatus = (id) => {
    const updated = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === 'complete' ? 'incomplete' : 'complete'
        }
      }
      return task
    })
    setTasks(updated)
  }

  
  const deleteTask = (id) => {
    const filtered = tasks.filter(task => task.id !== id)
    setTasks(filtered)
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
