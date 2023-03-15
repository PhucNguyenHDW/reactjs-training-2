import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
} from '../../store/actions/todoAction.ts'
import './TodoApp.css'
import {
  Button,
  Form,
  InputGroup,
  ButtonGroup,
  Row,
  Col,
  Container
} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import {
  FaWindowClose,
  FaCheck,
  FaDotCircle,
  FaPlusCircle,
  FaSearch
} from 'react-icons/fa'

const TodoApp = () => {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const [page] = useState(1)
  const [limit] = useState(20)

  const dispatch = useDispatch()
  const todoData = useSelector((state) => state.todos)
  const { todos } = todoData
  useEffect(() => {
    searchNote()
  }, [])

  const add = async () => {
    if (!input) return
    await dispatch(
      addTodo({
        text: input,
        isDone: false,
        id: uuidv4()
      })
    )
    await dispatch(
      getTodos({
        search,
        page,
        limit
      })
    )
    setInput('')
  }

  const remove = async (id) => {
    await dispatch(deleteTodo(id))
    await dispatch(
      getTodos({
        search,
        page,
        limit
      })
    )
  }

  const toggleChecked = async ({ id, isDone }) => {
    let updatedIsDone = !isDone
    await dispatch(updateTodo({ id, isDone: updatedIsDone }))
    await dispatch(
      getTodos({
        search,
        page,
        limit
      })
    )
  }

  const searchNote = async () => {
    await dispatch(
      getTodos({
        search,
        page,
        limit
      })
    )
  }

  return (
    <div className="container">
      <h1 className="text-center">Note</h1>
      <div id="add-note-input" className="mb-3">
        <Container>
          <Row>
            {/* add note part */}
            <Col md={8} lg={8}>
              <InputGroup className="" size="sm">
                <Form.Control
                  type="text"
                  placeholder="Input your note here"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />

                <Button size="sm" variant="primary" onClick={() => add()}>
                  <FaPlusCircle className="btn-fa-icon"></FaPlusCircle>
                  <span> Add</span>
                </Button>
              </InputGroup>
              {/* {errors && errors.input && errors.input.type === 'required' && (
                <Form.Text className="text-danger">
                  {errors.input.message}
                </Form.Text>
              )} */}
            </Col>
            {/* search part */}
            <Col md={4} lg={4}>
              <InputGroup className="" size="sm">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />

                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => searchNote()}
                >
                  <FaSearch className="btn-fa-icon"></FaSearch>
                  <span> Search</span>
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="note-items">
        <Container>
          {todos &&
            todos.map((item, i) => (
              <div className="note-container" key={i}>
                <ButtonGroup>
                  <Button
                    id="delete-btn"
                    className="mr-0d5p"
                    onClick={() => remove(item.id)}
                    size="sm"
                    variant="warning"
                  >
                    <FaWindowClose className="btn-fa-icon" />
                  </Button>
                  <Button
                    id="done-btn"
                    variant={
                      item.isDone === 'secondary' ? 'primary' : 'primary'
                    }
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
                </ButtonGroup>
                <InputGroup className="ml-1p" size="sm">
                  <Form.Control
                    type="text"
                    placeholder="Some note used to be here :>"
                    value={item.text}
                    disabled
                    style={{
                      textDecoration: item.isDone && 'line-through',
                      background: item.isDone && '#dddddd'
                    }}
                  />
                </InputGroup>
                {/* <Button
                className="note-text"
                style={{ textDecoration: item.isDone && 'line-through' }}
                size="sm"
                variant={item.isDone ? 'secondary' : 'light'}
              >
                {item.text}
              </Button> */}
              </div>
            ))}
        </Container>
      </div>
    </div>
  )
}

export default TodoApp
