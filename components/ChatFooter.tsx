import React, { useState, useContext } from 'react';
import { SocketContext } from '@/context/SocketContext';



const ChatFooter = () => {

  const [message, setMessage] = useState('');
  const { socket, setSocket } = useContext(SocketContext) as any;

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Napisz wiadomość"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">Wyślij</button>
      </form>
    </div>
  );
};

export default ChatFooter;