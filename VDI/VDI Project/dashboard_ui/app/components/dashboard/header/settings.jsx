import React,{Component} from 'react';
import {IconButton,Menu,MenuItem,Icon} from 'react-mdl';
import {hashHistory} from 'react-router';
export default class Settings extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    var _that=this;
    return (
      <div>
        <Menu target={`settings`}>
          <MenuItem ><Icon name={`supervisor_account`} id={`account_settings`}></Icon></MenuItem>
          <MenuItem ><Icon name={`exit_to_app`} id={`logout`} onClick={()=>{
            _that.props.logout();
            hashHistory.push('login');
          }}></Icon></MenuItem>
        </Menu>
        <IconButton name={`settings`} id={`settings`} />
      </div>
    )
  }
}
