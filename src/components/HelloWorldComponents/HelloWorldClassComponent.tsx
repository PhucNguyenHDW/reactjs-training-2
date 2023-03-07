import React from 'react';
import logo from './../../../src/logo.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface HelloWorldProps {
  variant: string
}

interface HelloWorldState {
  count: number
}

class HelloWorldClassComponent extends React.Component<HelloWorldProps, HelloWorldState> {
  state = { count: 0 };
  constructor(props: HelloWorldProps) {
    super(props);
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Hello World</Card.Title>
            <Card.Text>
              This is a sample text from Class Component.
            </Card.Text>
            <div className='text-center'>
              <Button
                variant={ this.props.variant || 'success' }
                onClick={ () => this.increment(1) }
              >
                Count State { this.state.count }
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
  increment = (amt: number) => {
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}

export default HelloWorldClassComponent;
