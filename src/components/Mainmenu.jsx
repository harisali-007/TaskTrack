import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function Today() {
  const { addTask } = useContext(TaskContext)
  const [form, setForm] = useState({
    title: '',
    priority: 'low',
    duedate: '',
    project: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.title.trim()) {
      addTask(form)
      setForm({ title: '', priority: 'low', duedate: '', project: '' })
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-2 form-control mt-2">

        <input name="title" value={form.title} onChange={handleChange} required placeholder="Title" className="mt-2 border p-1 w-full border border-success rounded" />
        <input name="duedate" type="date" value={form.duedate} required onChange={handleChange} className="mx-2 mt-2 border p-1 w-full border border-success rounded" />
        <select name="priority" value={form.priority} onChange={handleChange} required className="mt-2 border p-1 w-full border border-success rounded">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input name="project" value={form.project} onChange={handleChange} required placeholder="Project" className="mx-2 mt-2 border p-1 w-full border border-success rounded" />
        <button type="submit" className="mt-2 bg-blue-500 text-black px-4 py-1 rounded border border-success rounded">Add</button>

      </form>
    </div>
  )
}

export default Today
