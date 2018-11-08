import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { withRouter } from 'react-router-dom';
import profile_pic from '../../../../public/img/profile_pic.png';
import UserInfo from './Scenes/UserInfo';
import Header from './Scenes/Header';
import {toJs} from 'mori';

//Style
import {Layout, Content, Drawer, Navigation, HeaderRow} from 'react-mdl';

import * as actions from './action';

import React, {Component} from 'react';

function mapStateToProps(state) {
  const stateJs = toJs(state.reducer.authReducer)
  return {
    state: state,
    user:stateJs.user || {name: 'Not Found'}

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var _that = this;
    let links= [];
    const menu = [
      {menu: 'License', link: 'license' },
      {menu: 'Token Generate', link:'tokenGen'},
      {menu: 'User', link: 'user'}
    ]
    for(let ind = 0; ind < menu.length; ind++) {
      links.push(
        <Link key={ind} to={'dashboard/'+menu[ind].link}>{menu[ind].menu}</Link>
      )
    }

    var title= this.props.user != undefined ? this.props.user.name : 'User Found';
    var createdDate = this.props.user.createdDate || '';
    const customTitle= <div style={{margin: '0 0 0 -20%'}}><img style={{width:'50%', margin: '0 0 0 25%'}} src={profile_pic} /><div style={{textAlign: 'center'}}>{title.toUpperCase()}</div></div>
    return (
      <div>
        <div><Header /></div>

        <Layout fixedDrawer={true}>
          <Drawer title={customTitle} >
                  <UserInfo   createdDate={createdDate} />
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


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
