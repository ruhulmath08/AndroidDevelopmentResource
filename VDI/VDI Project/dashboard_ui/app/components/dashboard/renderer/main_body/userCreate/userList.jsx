import React,{Component} from 'react';
import {Style} from './style';
import {css} from 'aphrodite';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,DataTable,TableHeader} from 'react-mdl';
export default class UserList extends Component {
constructor(props) {
super(props)
this.state={};
this.handleOpenDialog = this.handleOpenDialog.bind(this);
this.handleCloseDialog = this.handleCloseDialog.bind(this);

}

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }
render(){
return (
<div>
<Button className={css(Style.buttonUserList)} colored onClick={this.handleOpenDialog} raised ripple>Show users</Button>

    <Dialog open={this.state.openDialog} style={{width: '30%'}}>
              <DialogTitle>All Users</DialogTitle>
              <DialogContent>
                <DataTable
                  shadow={0}
                  rows={this.props.userList}
                >
                  <TableHeader name="name" tooltip="Name of the User">Name</TableHeader>
                  <TableHeader  name="role" tooltip="User's Role">Role</TableHeader>
                  <TableHeader  name="createdDate" cellFormatter={(createdDate) =>  `${new Date(createdDate).getFullYear()}-${new Date(createdDate).getMonth()+1}-${new Date(createdDate).getDate()}`} tooltip="Account created Date">Created Date</TableHeader>
                </DataTable>
              </DialogContent>
              <DialogActions>
                <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
              </DialogActions>
    </Dialog>
  </div>
)
}
}
