import React, { useEffect, useState } from 'react'
import './TodoApp.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {
  FaWindowClose,
  FaCheck,
  FaDotCircle,
  FaPlusCircle
} from 'react-icons/fa'

const TodoApp = () => {
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/posts').then(({ data }) => {
      setTask(data)
    })
  }, [])

  const add = () => {
    if (input === '') return
    setTask([
      ...task,
      {
        text: input,
        isDone: false,
        id: uuidv4()
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
    obj.isDone = !obj.isDone
    setTask([...task.slice(0, index), obj].concat(task.slice(index + 1)))
  }

  return (
    <div className="container">
      <h1 className="heading">TaskMaster</h1>
      <div className="d-flex align-items-center mb-1p">
        <input
          placeholder="New Task?"
          className="in-text mr-0d5p"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button size="sm" variant="primary" onClick={add}>
          <FaPlusCircle className="btn-fa-icon"></FaPlusCircle>
        </Button>
      </div>
      <div>
        {task.map((item, i) => (
          <div key={i}>
            <Button
              variant={item.isDone === 'secondary' ? 'primary' : 'primary'}
              onClick={() => toggleChecked(i)}
              size="sm"
              className="mr-0d5p"
            >
              {item.isDone ? (
                <FaCheck className="btn-fa-icon"></FaCheck>
              ) : (
                <FaDotCircle className="btn-fa-icon"></FaDotCircle>
              )}
            </Button>
            <Button
              className="mr-0d5p"
              onClick={() => remove(i)}
              size="sm"
              variant="warning"
            >
              <FaWindowClose className="btn-fa-icon" />
            </Button>
            <Button
              className="note-text"
              style={{ textDecoration: item.isDone && 'line-through' }}
              size="sm"
              variant={item.isDone ? 'secondary' : 'light'}
            >
              {item.text}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoApp
