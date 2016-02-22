import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../constants/message';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
import store from '../store/';

export const sendMessage = (message) => {
  socket.emit('chat message send', message);
  return {
    type: SEND_MESSAGE
  };
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

socket.on('chat message emit', (message) => {
  console.log('message', message);
  store.dispatch(receiveMessage(message));
});
