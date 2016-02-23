import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/message';

const Chat = (props) => {
  const send = () => {
    const message = document.getElementById('message');
    props.dispatch(sendMessage(message.value));
    message.value = '';
  };
  return (
    <div>
      {props.messages.map((message, i) => {
        const link = `http://localhost:3000/speech?message=${message}`;
        return (
          <div key={i}>
            {message}
            <audio autoPlay type='audio/wav' src={link}>{'hear'}</audio>
          </div>
        );
      })}
      <input type='text' id='message' />
      <button onClick={send}>{'send'}</button>
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages
  };
};

export default connect(mapStateToProps)(Chat);
