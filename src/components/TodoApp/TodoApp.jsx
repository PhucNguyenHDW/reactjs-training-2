import React, { useState } from 'react'
import './TodoApp.css'
import { Button } from 'react-bootstrap'

const TodoApp = () => {
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])

  const add = () => {
    if (input === '') return
    setTask([
      ...task,
      {
        text: input,
        isRead: false
      }
    ])
    setInput('')
  }

  const remove = (index) => {
    setTask(task.filter((_item, i) => i !== index))
  }

  const toggleChecked = (index) => {
    const obj = {
      ...task[index]
    }
    obj.isRead = !obj.isRead
    setTask([...task.slice(0, index), obj].concat(task.slice(index + 1)))
  }

  return (
    <div className="container">
      <h1 className="heading">TaskMaster</h1>
      <div className="d-flex align-items-center">
        <input
          placeholder="New Task?"
          className="in-text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button size="sm" variant="primary" onClick={add}>
          Add
        </Button>
      </div>
      <div>
        {task.map((item, i) => (
          <div key={i}>
            <span
              className="span-map"
              style={{ textDecoration: item.isRead && 'line-through' }}
            >
              {item.text}
            </span>
            <input
              className="check"
              type="checkbox"
              checked={item.isRead}
              onClick={() => toggleChecked(i)}
              readOnly
            />
            <button className="delete-btn" onClick={() => remove(i)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoApp
