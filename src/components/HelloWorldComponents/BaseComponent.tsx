import React from 'react';
import HelloWorldFunctionComponent from './HelloWorldFunctionComponent'
import HelloWorldClassComponent from './HelloWorldClassComponent'
import './BaseComponent.css'
import { useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function BaseComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams', searchParams.get('search'))
  return (
    <div className="App component-demo-dev">
      <div>
        <HelloWorldFunctionComponent variant='success'></HelloWorldFunctionComponent>
      </div>
      <div>
        <HelloWorldClassComponent variant='primary'></HelloWorldClassComponent>
      </div>
      <Button onClick={() => setSearchParams({['search']: 'new', ['sort']: 'asc'})}>Click me to change query</Button>
    </div>
  );
}

export default BaseComponent;
