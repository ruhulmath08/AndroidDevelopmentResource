import AddWinAppCom from '../../../../components/dashboard/renderer/main_body/vm_win/addWinAppCom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/actions'
import {toJs,toClj} from 'mori'

function mapStateToProps(state){
  return {
    state : toJs(toClj(state)).reducers
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddWinAppCom)
