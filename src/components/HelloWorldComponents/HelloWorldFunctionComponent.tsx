import React, { useState } from 'react';
import logo from './../../../src/logo.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface HelloWorldProps {
  variant: string
}
// This component use:
//  Funtion Component
//  useState
function HelloWorldFunctionComponent(props: HelloWorldProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Hello World</Card.Title>
          <Card.Text>
            This is a sample text from Function Component.
          </Card.Text>
          <div className='text-center'>
            <Button
              variant={props.variant || 'success'}
              onClick={() => setCount(count + 1)}
            >
              Function Component { count }
            </Button></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HelloWorldFunctionComponent;
