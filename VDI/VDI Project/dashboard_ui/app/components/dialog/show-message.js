import React,{Component} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from 'react-mdl';
export default class ShowMessage extends Component {
  constructor(props) {
    super(props);
    this.state={isOpen:this.props.isOpen}
    
  }
  render(){
    return (
      <Dialog open={this.state.isOpen}>
        <DialogTitle>{this.props.sender.toUpperCase()}</DialogTitle>
        <DialogContent>{this.props.text}</DialogContent>
        <DialogActions >
          <Button raised ripple onClick={()=> this.props.isOpenMessage(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }
}
