import React from 'react'
import HelloWorldFunctionComponent from './HelloWorldFunctionComponent'
import HelloWorldClassComponent from './HelloWorldClassComponent'
import './BaseComponent.css'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function BaseComponent() {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className="App component-demo-dev">
      <div>
        <HelloWorldFunctionComponent variant="success"></HelloWorldFunctionComponent>
      </div>
      <div>
        <HelloWorldClassComponent variant="primary"></HelloWorldClassComponent>
      </div>
      <Button
        onClick={() =>
          setSearchParams(
            searchParams.get('search') === 'keyword111'
              ? { ['search']: 'keyword222', ['sort']: 'desc' }
              : { ['search']: 'keyword111', ['sort']: 'asc' }
          )
        }
      >
        Click me to change query
      </Button>
    </div>
  )
}

export default BaseComponent
