import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from 'react-mdl';
import React,{Component} from 'react';
export default class ShowNotification extends Component{
  constructor(props){
    super(props);

    this.state={isOpen:this.props.isOpen}
    console.log('in com',this.props)
    

  }



  render(){
    return (
      <Dialog open={this.state.isOpen}>
        <DialogTitle>{this.props.title}</DialogTitle>
        <DialogContent>{this.props.description}</DialogContent>
        <DialogActions >
          <Button raised ripple onClick={()=> this.props.isOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }
}
