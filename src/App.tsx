import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate("/components");
  }
  return (
    <div className="App">
      <Button onClick={ () => handleClick() }>Class/Function Components</Button>
    </div>
  );
}

export default App;
