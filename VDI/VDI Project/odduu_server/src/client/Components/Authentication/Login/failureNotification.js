import React,{Component} from 'react';
import {Snackbar} from 'react-mdl';
export default class FailureNotification extends Component {
  constructor(props) {
    super(props)

      this.state={
        isSnackBarActive:true,
        failAttemps:0,
      }


    this.previousState=this.previousState.bind(this)
    this.changeSnackBar=this.changeSnackBar.bind(this);
  }
  previousState(){
    this.setState({
      failAttemps:this.props.failAttemps
    })
  }

  changeSnackBar(){
    this.setState({
      isSnackBarActive:false
    })
  }
  render(){
    var _that=this;
    return (
      <div>
        //{this.props.failAttemps > this.state.failAttemps ? <Snackbar active={this.state.isSnackBarActive } onClick={()=>{_that.previousState(_that.props.failAttemps)}} onTimeout={this.changeSnackBar} >Authentication Failed</Snackbar> : ''}
      </div>
    )
  }
}
