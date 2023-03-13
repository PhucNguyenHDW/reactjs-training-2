import {
  GET_TODO,
  TODO_ERROR,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from '../types'

const initialState = {
  todos: [],
  loading: true
}

interface payloadI {
  id: string
  text?: string
  isDone?: boolean
}

interface actionI {
  type: string
  payload: payloadI
}

export default function (state = initialState, action: actionI) {
  switch (action.type) {
    case GET_TODO:
      console.log('state getTodo', state)
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    case TODO_ERROR:
      return {
        loading: false,
        error: action.payload
      }
    case ADD_TODO:
      return state
    case DELETE_TODO:
      return state
    case UPDATE_TODO:
      return state
    default:
      return state
  }
}
