import React, { Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Test extends Component  {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div><p>This is test page</p></div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state,'-----state');
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(()=> ({type: ''}), dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)
