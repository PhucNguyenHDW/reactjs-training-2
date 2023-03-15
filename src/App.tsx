import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Outlet, createSearchParams } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const someParams = {
    search: 'keyword111',
    sort: 'asc'
  }
  return (
    <div className="App">
      <Button
        className="mr-1p"
        onClick={() =>
          navigate({
            pathname: '/components',
            search: `?${createSearchParams(someParams)}`
          })
        }
      >
        Class/Function Components
      </Button>
      <Button className="mr-1p" onClick={() => navigate('/context')}>
        Context
      </Button>
      {/* <Button className="mr-1p" onClick={() => navigate('/login')}>
        Login
      </Button> */}
      <Button
        className="mr-1p"
        onClick={() => navigate('/use-effect-learning')}
      >
        Use Effect Hook
      </Button>
      <Button className="mr-1p" onClick={() => navigate('/todo-app')}>
        Todo App
      </Button>
      <Button
        className="mr-1p"
        onClick={() => navigate('/pas-internal/landing-page')}
      >
        PAS
      </Button>
      <Outlet></Outlet>
    </div>
  )
}

export default App
