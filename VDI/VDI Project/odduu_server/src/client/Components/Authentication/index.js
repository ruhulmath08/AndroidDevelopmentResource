import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {Login} from './Login';
import * as actions from './redux/action';

function mapStateToProps(state) {
  // console.log('State ---',state);
  return {state: state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
