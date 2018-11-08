import React,{Component} from 'react';
import {IconButton,Menu,MenuItem,Icon} from 'react-mdl';

var props='';
export const Settings = (prop)=> {
  props = prop;
  return (
    <div>
      <Menu target={`settings`}>
        <MenuItem ><Icon name={`supervisor_account`} id={`account_settings`}></Icon></MenuItem>
        <MenuItem ><Icon name={`exit_to_app`} id={`logout`} onClick={()=>{
          props.logout();
        }}></Icon></MenuItem>
      </Menu>
      <IconButton name={`settings`} id={`settings`} />
    </div>
  )
}
