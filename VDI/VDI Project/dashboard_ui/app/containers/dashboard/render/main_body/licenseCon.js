import License from '../../../../components/dashboard/renderer/main_body/license/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/actions'
import {toJs,toClj} from 'mori'

function mapStateToProps(state){
  return {
    licenseList : toJs(toClj(state)).reducers.licenseList
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(License)
