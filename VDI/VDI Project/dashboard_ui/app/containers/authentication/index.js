import LoginView from '../../components/authentication';
import Test from '../../components/authentication/test'
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import {bindActionCreators} from 'redux';
import mori from 'mori';
function mapStateToProps(state){
  // console.log('in authentication controller')
  return {
    isLoggedIn:mori.toJs(state.reducers).isLoggedIn,
    failAttemps: actions.defaultValue(mori.toJs(state.reducers).failAttemps, 0) ,
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
