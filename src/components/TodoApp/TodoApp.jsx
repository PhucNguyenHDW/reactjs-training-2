import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
} from '../../store/actions/todoAction.ts'
import './TodoApp.css'
import { Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import {
  FaWindowClose,
  FaCheck,
  FaDotCircle,
  FaPlusCircle
} from 'react-icons/fa'

const TodoApp = () => {
  const [input, setInput] = useState('')
  // const [task, setTask] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:4000/posts').then(({ data }) => {
  //     setTask(data)
  //   })
  // }, [])

  const dispatch = useDispatch()
  const todoData = useSelector((state) => state.todos)
  const { todos } = todoData
  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const add = async () => {
    if (!input) return
    // setTask([
    //   ...task,
    //   {
    //     text: input,
    //     isDone: false,
    //     id: uuidv4()
    //   }
    // ])
    await dispatch(
      addTodo({
        text: input,
        isDone: false,
        id: uuidv4()
      })
    )
    await dispatch(getTodos())
    setInput('')
  }

  const remove = async (id) => {
    // setTask(task.filter((_item, i) => i !== index))
    await dispatch(deleteTodo(id))
    await dispatch(getTodos())
  }

  const toggleChecked = async ({ id, isDone }) => {
    let updatedIsDone = !isDone
    // const obj = {
    //   ...task[index]
    // }
    // obj.isDone = !obj.isDone
    // setTask([...task.slice(0, index), obj].concat(task.slice(index + 1)))
    await dispatch(updateTodo({ id, isDone: updatedIsDone }))
    await dispatch(getTodos())
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
        {todos &&
          todos.map((item, i) => (
            <div className="d-flex align-items-start" key={i}>
              <Button
                className="mr-0d5p"
                onClick={() => remove(item.id)}
                size="sm"
                variant="warning"
              >
                <FaWindowClose className="btn-fa-icon" />
              </Button>
              <Button
                variant={item.isDone === 'secondary' ? 'primary' : 'primary'}
                onClick={() =>
                  toggleChecked({ id: item.id, isDone: item.isDone })
                }
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
