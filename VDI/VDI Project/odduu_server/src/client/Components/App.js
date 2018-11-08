import React, { Component } from 'react';



export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
      {/* Header container */}

      {/* sidebar & content container */}
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}
