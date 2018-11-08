import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './action';
import {css} from 'aphrodite';
import odduu_logo from '../../../../../public/img/logo_odduu.png';
import { Link } from 'react-router';
import {Settings} from './settings';
//style
import {Grid,Cell} from 'react-mdl';
import {style} from './style';

function mapStateToProps(state) {
  return {
    state:''
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

var props = '';
/**
 * @function Header - React Header Component. Render Logo, Settings button.
 * @param {Object} prop 
 */
export const Header = (prop)=> {
  var _that = this;
  props = prop;

  return (
    <div >
      <Grid className={css(style.root)}  noSpacing={true}>
          <Cell col={4}>
            <Grid noSpacing={true}>
              <Cell col={6} offset={3}><Link to='dashboard'><img src={odduu_logo} className={`${css(style.logo)}`}/></Link></Cell>
            </Grid>
          </Cell>
          <Cell col={4}>
              <h6></h6>
          </Cell>
          <Cell col={4}>
            <Grid noSpacing={true}>

              <Cell col={8} offset={2}>
                  <Grid >
                    <Cell  col={4}>

                    </Cell>
                    <Cell col={4}>

                    </Cell>
                    <Cell col={4}><Settings logout={props.logout}/></Cell>
                  </Grid>


              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
