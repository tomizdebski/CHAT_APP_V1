import React, { useState } from 'react';

const LoginCloud = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="chat-login-container">
      <div className="chat-login-bubble">
        <h2>Logowanie</h2>
        <input
          type="text"
          placeholder="Wprowadź swoją nazwę użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='chat-login-input'
        />
        <button className='chat-login-button'>
            Zaloguj
            </button>
      </div>
    </div>
  );
};

export default LoginCloud;
