import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import React, {Component} from 'react';

import {TokenGenForm} from './TokenForm';
import {get} from 'mori';
//Style
import {Cell, Grid, DataTable, TableHeader} from 'react-mdl';

/**
 * @function mapStateToProps
 * @param {{token: String}} state 
 * @description Mount an Object with token as property to Component.
 */
function mapStateToProps(state) {
  const tokenJs = get(state.reducer.authReducer, 'token')
  return ({
    token: tokenJs

  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

/**
 * @function TokenGen 
 * @param {{generateToken: Function, token: String}} props 
 */
export const TokenGen=(props)=> {
  const {generateToken, token} = props;
  const submitAction = (values) => {
    if(values.orgName != undefined && values.contactName != undefined && values.licenseQty != undefined && values.contactCell != undefined &&
    values.expDate != undefined) {
      generateToken(Object.assign(values, {token: token}))
    }else {
      alert('Fill Up Token Generate Form ')
    }
  }
  
  return (

      <Grid>
        <Cell col={8} offset={2}>
          <TokenGenForm onSubmit={submitAction} />
        </Cell>
      </Grid>

  )


}



export default connect(mapStateToProps, mapDispatchToProps)(TokenGen)




// export class TokenGen extends Component {
//   constructor(props) {
//     super(props)
//     this.submitAction = this.submitAction.bind(this);
//   }
//
//   // Form Action Handle
//   submitAction(values) {
//     if(values.orgName != undefined && values.contactName != undefined && values.licenseQty != undefined && values.contactCell != undefined &&
//     values.expDate != undefined) {
//       this.props.generateToken(values)
//     }else {
//       alert('Fill Up Token Generate Form ')
//     }
//   }
//
//   render() {
//     var _that = this;
//
//     return(
//       <Grid>
//         <Cell col={8} offset={2}>
//           <TokenGenForm onSubmit={_that.submitAction} />
//         </Cell>
//       </Grid>
//     )
//   }
// }
