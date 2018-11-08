import React,{Component} from 'react';
import {Link} from 'react-router'
export default class Test extends Component {
  constructor(props) {
  super(props)
  }

  render(){
    var _that=this;
    return (
      <div> <input type='button' onClick={()=>{
        _that.props.submitLogin({userId:'rakin',password:'123'})
      }} value={`ddd`}/></div>
    )
  }
}
