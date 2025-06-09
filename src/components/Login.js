import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handle = () => {
    // Mock store: you can replace with Firebase auth later
    localStorage.setItem('user', name);
    localStorage.setItem('password', password);
    onLogin(name);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handle} disabled={!name || !password}>
        Login
      </button>
    </div>
  );
}
