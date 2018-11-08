import React,{Component} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from 'react-mdl';
export default class Test extends Component {
  constructor(props) {
    super(props)

      this.state={
        isSnackBarActive:true,

      }



    this.changeSnackBar=this.changeSnackBar.bind(this);
  }


  changeSnackBar(){

    this.setState({
      isSnackBarActive:false
    })
    this.props.userExistChange(false)
  }
  render(){
    var _that=this;
    return (
      <div>
        <Dialog open={this.state.isSnackBarActive}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions>

            <Button type='button' onClick={this.changeSnackBar}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
