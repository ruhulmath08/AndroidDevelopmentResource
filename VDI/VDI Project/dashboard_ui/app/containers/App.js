// @flow
import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import HomePage from './HomePage';
import {Header, Drawer, Navigation,Layout,Content} from 'react-mdl';

// import SidebarRender2 from '../components/dashboard/header/sidebar/react-sidebar/'
export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div>
            {/* Header container */}
            <div>
                <HeaderContainer />
            </div>
            {/* sidebar & content container */}
            <div>
                {this.props.children}
            </div>

      </div>
    );
  }
}
// <HeaderContainer />
// <div >
//     <Layout fixedDrawer={true}>
//
//         <Drawer title="Title" >
//           <Navigation>
//               <a href="/dashboard">Link</a>
//               <a href="#">Link</a>
//               <a href="#">Link</a>
//               <a href="#">Link</a>
//           </Navigation>
//         </Drawer>
//
//       <Content />
//     </Layout>
// </div>
