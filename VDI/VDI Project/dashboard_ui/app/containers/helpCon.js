import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HelpCom from '../components/dashboard/help'
import {toJs,toClj} from 'mori'
import * as actions from '../actions/actions'
function mapStateToProps(state){

  let stateJs=toJs(toClj(state));

console.log('in helpcon');
	return {
    state:stateJs.reducers,

  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HelpCom)
