import React, { PropTypes } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

socket.on('connection', () => {
  console.log('conn');
});

socket.on('chat message', (message) => {
  console.log('message', message);
});

const Chat = () => {
  const sendMessage = () => {
    const message = document.getElementById('message');
    socket.emit('chat message', message.value);
    message.value = '';
  };
  return (
    <div>
      <input type='text' id='message' />
      <button onClick={sendMessage}>{'emit'}</button>
    </div>
  );
};

export default Chat;
