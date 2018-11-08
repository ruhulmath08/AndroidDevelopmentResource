import React, { Component } from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Button} from 'react-mdl';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <div >
          <h2>Home - Rakin!</h2>
            <ul>
              <li><Link to="dashboard">Dashboard</Link></li>
            </ul>
        </div>
        


      </div>
    );
  }
}
