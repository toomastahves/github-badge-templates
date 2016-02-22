import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions/hello';

export const Hello = (props) => {
  return (
    <div>{props.message}</div>
  );
};

Hello.propTypes = {
  message: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    message: state.helloReducer.message
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(sayHello('hello react-redux'));
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
