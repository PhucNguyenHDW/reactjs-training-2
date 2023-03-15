import { GET_TODO, TODO_ERROR, ADD_TODO, DELETE_TODO } from '../types'
import axios from 'axios'

interface getTodosQueryI {
  search: string
  page: number
  limit: number
}

export const getTodos =
  ({ search = '', page = 1, limit = 20 }: getTodosQueryI) =>
  async (dispatch: (arg0: { type: string; payload: string[] }) => void) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/posts?q=${search}&_page=${page}&_limit=${limit}`
      )
      dispatch({
        type: GET_TODO,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: TODO_ERROR,
        payload: []
      })
    }
  }

interface addTodoPayloadI {
  id: string
  text: string
  isDone: boolean
}

export const addTodo =
  (payload: addTodoPayloadI) =>
  async (dispatch: (arg0: { type: string; payload: string[] }) => void) => {
    try {
      const res = await axios.post(`http://localhost:4000/posts`, payload)
      dispatch({
        type: ADD_TODO,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: TODO_ERROR,
        payload: []
      })
    }
  }

interface deleteTodoPayloadI {
  id: string
}

export const deleteTodo =
  (id: deleteTodoPayloadI) =>
  async (dispatch: (arg0: { type: string; payload: string[] }) => void) => {
    try {
      const res = await axios.delete(`http://localhost:4000/posts/${id}`)
      dispatch({
        type: DELETE_TODO,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: TODO_ERROR,
        payload: []
      })
    }
  }

interface updateTodoPayloadI {
  id: string
  isDone: boolean
}
export const updateTodo =
  (payload: updateTodoPayloadI) =>
  async (
    dispatch: (arg0: { type: string; payload: string[] }) => updateTodoPayloadI
  ) => {
    try {
      const res = await axios.patch(
        `http://localhost:4000/posts/${payload.id}`,
        payload
      )
      dispatch({
        type: DELETE_TODO,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: TODO_ERROR,
        payload: []
      })
    }
  }
