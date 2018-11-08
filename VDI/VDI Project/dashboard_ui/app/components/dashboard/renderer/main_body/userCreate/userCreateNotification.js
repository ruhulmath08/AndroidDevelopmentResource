import React,{Component} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from 'react-mdl';
export default class UserCreateNotification extends Component {
  constructor(props) {
    super(props)

      this.state={
        isDialogOpen:true,

      }



    this.changeDialog=this.changeDialog.bind(this);
  }


  changeDialog(){
    if(this.props.userExist === true){
      this.setState({
        isDialogOpen:false
      })
      this.props.userExistChange(false)
    }else{
      this.setState({
        isDialogOpen:false
      })
    }

  }
  render(){
    var _that=this;
    return (
      <div>
        <Dialog open={this.state.isDialogOpen}>

          <DialogContent>
            {this.props.userExist === true ? 'Failed to Create User ! Already Exist' : `User Successfully created ! You have created ${_that.props.createdUserCount} Users in this session`}
          </DialogContent>
          <DialogActions>

            <Button type='button' onClick={this.changeDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
