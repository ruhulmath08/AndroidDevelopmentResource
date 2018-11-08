import DashboardComponent from '../../components/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions'
import {toJs,toClj} from 'mori'

function mapStateToProps(state){

  let stateJs=toJs(toClj(state));


	 return {
     userData:stateJs.reducers.userData
	 };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
