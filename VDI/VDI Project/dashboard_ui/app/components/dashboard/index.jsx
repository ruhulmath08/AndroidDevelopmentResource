// @flow
import React,{Component} from 'react';

import {Layout,Content} from 'react-mdl';
import {Link} from 'react-router';
import {Drawer,Navigation,HeaderRow} from 'react-mdl';
import User_info from './UserInfo';
import profile_pic from '../../img/profile_pic.png';
export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);

  }


  render(){
    const links = [];
    let menu=[{'menu':'ODDUU', 'link':'odduu'},
    {'menu':'VM_WIN','link': 'vm_win'},
    {'menu':'VM_LINUX','link': 'vm_linux'},
    {'menu':'Admin Role','link': 'user_create'},
    {'menu':'ODDUU - VM Mapping','link': 'vm_mapping'},
    {'menu':'License','link': 'license'},
  ];

    for (let ind = 0; ind <menu.length; ind++) {
      links.push(
        <Link key={ind} to={'dashboard/'+menu[ind].link} >{menu[ind].menu}</Link>
      )
    }
    var title=JSON.parse(this.props.userData) != undefined ? JSON.parse(this.props.userData).name : 'User Found'
    var role=JSON.parse(this.props.userData) != undefined ? JSON.parse(this.props.userData).role : 'Not Found'
    var createdDate=JSON.parse(this.props.userData) != undefined ? JSON.parse(this.props.userData).createdDate : 'Not Found'
    const customTitle= <div style={{margin: '0 0 0 -20%'}}><img style={{width:'50%', margin: '0 0 0 25%'}} src={profile_pic} /><div style={{textAlign: 'center'}}>{title.toUpperCase()}</div></div>

    return(
      <div>
        <Layout fixedDrawer={true}>


                <Drawer title={customTitle} >
                  <User_info role={role} createdDate={createdDate} />
                  <Navigation>
                     {links}
                  </Navigation>
                </Drawer>
               <Content >
                  {this.props.children}
               </Content>
        </Layout>
      </div>
    )
  }
}
