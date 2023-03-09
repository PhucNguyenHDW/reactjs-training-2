import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: '1',
      name: 'ReactJS',
      email: 'reactjs@email.com',
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
