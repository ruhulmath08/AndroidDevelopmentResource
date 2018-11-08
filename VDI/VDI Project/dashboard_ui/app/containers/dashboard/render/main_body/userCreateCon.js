import UserCreate from '../../../../components/dashboard/renderer/main_body/userCreate/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/actions'
import {toJs,toClj,get} from 'mori'
import mori from 'mori';
function mapStateToProps(state){



  //------------actions.defaultValue(toJs(get(state.reducers)).createUser,undefined) toJs(get(state.reducers)).createUser


	return {
    createdUserCount: actions.defaultValue(toJs(get(state.reducers,'createUser')),undefined),
    userExist : actions.defaultValue(toJs(get(state.reducers,'userExist')),false),
    previousCountedCreatedUser:actions.defaultValue(toJs(get(state.reducers,'previousCountedCreatedUser')),0),
    userList:mori.toJs(state.reducers).userList
  };
  //------

}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCreate)
