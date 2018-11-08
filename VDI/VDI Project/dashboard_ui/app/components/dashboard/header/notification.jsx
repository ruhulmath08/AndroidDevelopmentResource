import {StyleSheet} from 'aphrodite';
import React,{Component} from 'react';
import {Menu,MenuItem,IconButton,Button} from 'react-mdl';
import Notifications from 'react-icons/lib/md/notifications';
import ShowNotification from '../../dialog/show-notification';

export default class NotificationCom extends Component{
  constructor(props){
    super(props);
    this.showNotification=this.showNotification.bind(this);
    this.state={isOpen:false,
      id: '',
      title:'',
      description:''
    }
  }


  showNotification(id,title,details){
    this.props.isOpenDialog(true);
    return this.setState({
      isOpen: !this.state.isOpen,
      id:id,
      title:title,
      description:details
    })
  }

  render(){
    var _that=this;
    return (
      <div >
      <Menu target={`notification`} >
          {this.props.notifications.map((notification,index)=>{

            return (<MenuItem key={`${index}.id.${notification.id}`}
            onClick={()=> this.showNotification(notification.id,notification.title,notification.details)}
            id={`${index}.id.${notification.id}`} >
           {notification.title}  </MenuItem>)
          })
          }
      </Menu>
      {this.props.isOpen === true ? <ShowNotification title={this.state.title} id={this.state.id} description={this.state.description} isOpen={true}
       isOpenDialog={_that.props.isOpenDialog}></ShowNotification> : ''}
        {this.props.hasNew === true  ?
          <IconButton name={`notifications_active`} id={`notification`} />
          :
          <IconButton name={`notifications_none`} id={`notification`} />
        }

      </div>
    )
  }
}
