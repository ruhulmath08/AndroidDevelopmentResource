import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import {toJs,toClj} from 'mori'
function mapStateToProps(state){

  let stateJs=toJs(toClj(state));
    
  
	 return {reducers:state.reducers,
	 		pair:[1,2,3]
	 };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
