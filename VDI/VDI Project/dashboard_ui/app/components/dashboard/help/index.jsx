import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {css} from 'aphrodite';
import {style} from './style';
// import help from '../../img/Help.png';
import login from '../../../img/Login.png';
import odduu_client from '../../../img/First.png';
import vm_win from '../../../img/Second.png';
import vm_win2 from '../../../img/four.png';
import vm_linux from '../../../img/five.png';
import user_create from '../../../img/six.png';

export default class HelpCom extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div style={{width: '80%', margin: 'auto', background: '#fff', borderStyle: 'solid'}}>
        <Grid>

          <Cell col={8}>
            <img src={login} className={`${css(style.login)}`}/>
          </Cell>
          <Cell col={4}>
            <ul>
                <li> You Have default one User ID and password </li>
                <li> Input your User ID and password  then click on LOGIN Button</li>
                <li> If you click on RESET Button User ID and password field will empthy </li>
                <li> Without LOGIN you can not access our UI </li>
            </ul>
          </Cell>

          <Cell col={8}>
            <img src={odduu_client} className={`${css(style.odduuClient)}`}/>
          </Cell>
          <Cell col={4}>
            <ol>
                <li> Show the user information and MENU  </li>
                <li> Show the Client ODDUU information</li>
                <li> If you Choose LAB number The table contains Show the LAB PC list of your selected LAB</li>
                <li> Show the LAB PC info
                    <ul>
                      <li>LAB Number default is First lab number</li>
                      <li>PC Number default is First lab pc list</li>
                      <li>Status that each PC is Active/Shutdown Green icon is Active and Read icon is Shutdown</li>
                      <li> SHUTDOWN Button for  each PC Shutdown</li>
                      <li> REBOOT Button for  each PC Reboot</li>
                      <li> IF PC Status was Shutdown the Button are disabled</li>
                      <li> IF you want to bulk REBOOT/SHUTDOWN click the table header checkbox then click on the Shutdown/Reboot table header</li>
                    </ul>
                </li>
            </ol>
          </Cell>

          <Cell col={8}>
            <img src={vm_win} className={`${css(style.winVM)}`} />
          </Cell>
          <Cell col={4}>
            <ol>Here We see the VM Win information
                <li> Select Which App We went to install/un-install on vm</li>
                <li> Show the vm list with lab number wise </li>
                <li> If you click on Show Button it will show the list of App which was install on this VM </li>
            </ol>
          </Cell>

          <Cell col={8}>
            <img src={vm_win2} className={`${css(style.winVM)}`}/>
          </Cell>
          <Cell col={4}>
            <ul>
                <li> You cal Select Multiple App to install/un-install on vm</li>
            </ul>
          </Cell>

          <Cell col={8}>
            <img src={vm_linux} className={`${css(style.linuxVM)}`}/>
          </Cell>
          <Cell col={4}>
            <ul> Here We see the VM Linux information
                <li> You can Add New App to Select App list</li>
            </ul>
          </Cell>

          <Cell col={8}>
            <img src={user_create} className={`${css(style.userCreate)}`}/>
          </Cell>
          <Cell col={4}>
            <ul>
                <li> Admin User can create New User With type user/admin</li>
            </ul>
          </Cell>
        </Grid>
      </div>
    )
  }
}

// <Cell col={8}>
//   <img src={help} className={`${css(style.help)}`}/>
// </Cell>
// <Cell col={4}>
//   <ul>
//       <li> IF you click on Help icon You see our UI User Manual </li>
//   </ul>
// </Cell>
