import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../constants/message';

const initialState = {
  messages: [],
  message: ''
};

export const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { messages: [...state.messages, action.message] });
    case SEND_MESSAGE:
      return state;
    default:
      return state;
  }
};
