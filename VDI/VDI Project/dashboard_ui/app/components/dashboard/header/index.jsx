import React,{Component} from 'react';
import {style} from './style'
import {css} from 'aphrodite';
import {Grid,Cell,Header} from 'react-mdl';
import {Badge} from 'react-mdl';
import NotificationCom from './notification'
import Notification from '../../../models/notification';
import MessageCom from './message'
import Message from '../../../models/message';
import Settings from './settings';
import odduu_logo from '../../../img/logo_odduu.png';
import help from '../../../img/help.png';
import { Link } from 'react-router';
export default class HeaderCom extends Component{
  constructor(props){
    super(props);
  }

  modifyIsOpen(){
    return this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render(){
    var _that=this;
    return(
      <div >
          <Grid className={css(style.root)} noSpacing={true}>
            <Cell col={4}>
              <Grid noSpacing={true}>
                <Cell col={6} offset={3}><Link to='dashboard'><img src={odduu_logo} className={`${css(style.logo)}`}/></Link></Cell>
              </Grid>
            </Cell>
            <Cell col={4}>
                <h4>ODDUU</h4>
            </Cell>
            <Cell col={4}>
              <Grid noSpacing={true}>

                <Cell col={8} offset={2}>

                    {this.props.isLoggedIn === undefined ? <div><Link to='/help' ><img src={help}  className={css(style.help)}/></Link></div> :
                    <Grid >
                      <Cell  col={4}><NotificationCom notifications={[new Notification(1,'First One','First Details'),
                        new Notification(2,'2nd Title', '2nd details')]} hasNew={true} isOpen={_that.props.state.isOpen} isOpenDialog={_that.props.isOpenDialog}></NotificationCom></Cell>
                      <Cell col={4}> <MessageCom hasNew={true}  messages={[new Message(1,'Rakin','1st text'),new Message(2,'Rayhan','2nd text')]}
                      isOpenMessage={_that.props.isOpenMessage} isOpenMsg={_that.props.state.isOpenMsg}> </MessageCom>   </Cell>
                      <Cell col={4}><Settings logout={this.props.logout}/></Cell>
                    </Grid>
                  }

                </Cell>
              </Grid>
            </Cell>
          </Grid>


      </div>
    )
  }
}
//hasNew={_that.props.state.hasNew} hasNew will initialize when new notification added to redux
