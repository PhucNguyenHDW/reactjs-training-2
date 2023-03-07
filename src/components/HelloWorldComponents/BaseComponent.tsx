import React from 'react';
import HelloWorldFunctionComponent from './HelloWorldFunctionComponent'
import HelloWorldClassComponent from './HelloWorldClassComponent'
import './BaseComponent.css'

function BaseComponent() {
  return (
    <div className="App component-demo-dev">
      <div>
        <HelloWorldFunctionComponent variant='success'></HelloWorldFunctionComponent>
      </div>
      <div>
        <HelloWorldClassComponent variant='primary'></HelloWorldClassComponent>
      </div>
    </div>
  );
}

export default BaseComponent;
