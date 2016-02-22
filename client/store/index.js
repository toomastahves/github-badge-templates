import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/';
import thunkMiddleware from 'redux-thunk';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware, socketIoMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
