import React,{Component} from 'react';
import {IconButton, Menu, MenuItem,Badge,Icon} from 'react-mdl';
import ShowMessage from '../../dialog/show-message';
export default class MessageCom extends Component {
  constructor(props) {
    super(props);
    this.showMessage=this.showMessage.bind(this);
  }

  showMessage(id,sender,text,time){
    this.props.isOpenMessage(true);
    this.setState({
      id:id,
      sender:sender,
      text:text,
      time:time
    })
  }

  render(){
    let _that=this;
    return(
      <div>
      <Menu target={`message`} >
          {this.props.messages.map((message,index)=>{

            return (<MenuItem key={`${index}.id.${message.id}`} onClick={()=> this.showMessage(message.id,message.sender,message.text,message.time)}
            id={`${index}.id.${message.id}`}
             >
           {message.sender.toUpperCase()}  </MenuItem>)
          })
          }
      </Menu>
      {this.props.isOpenMsg === true ? <ShowMessage
      isOpenMessage={_that.props.isOpenMessage}
      isOpen={_that.props.isOpenMsg}
      text={this.state.text}
      id={this.state.id}
      time={this.state.time}
      sender={this.state.sender}/> : ''}
      {this.props.hasNew === true  ?
        <Badge text={3}><Icon name={`message`} id={`message`} /></Badge>
        : <Icon name={`message`} id={`message`}/>
      }

      </div>
    )
  }
}
// <IconButton name={`message`} id={`message`} />
// :
// <IconButton name={`message`} id={`message`} />
//showMessageDialog
