import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderCom from '../components/dashboard/header'
import {toJs,toClj} from 'mori'
import * as actions from '../actions/actions'
function mapStateToProps(state){

  let stateJs=toJs(toClj(state));

  //console.log('headercontainer',stateJs.reducers)
  // console.log('--- ',stateJs.reducers.isLoggedIn);
	return {
    state:stateJs.reducers,
    isLoggedIn:stateJs.reducers.isLoggedIn,
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderCom)
