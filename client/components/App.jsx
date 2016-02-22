import React from 'react';
import Chat from './Chat';
import io from 'socket.io-client'

export const App = () => {
  return (
    <div className='center'>
      <Chat />
    </div>
  );
};

export default App;
