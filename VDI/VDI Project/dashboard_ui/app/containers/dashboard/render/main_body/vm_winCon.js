import Vm_win from '../../../../components/dashboard/renderer/main_body/vm_win/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/actions'
import {toJs,toClj} from 'mori'
import mori from 'mori';
function mapStateToProps(state){

  let odduu=[];
  let stateJs=toJs(toClj(state));

  Object.keys(stateJs.reducers).forEach(function(key,index){
    if(key === 'entries'){
      stateJs.reducers.entries.map((single,index)=>{
        if(Object.values(single)[0].system === 'win32'){
          odduu.push(single);
        }
      })
    }
  })

  let data=[];
  if(odduu.length > 0){
    data=odduu.reduce((arr,single,index)=>{
      let obj={
        mac: Object.keys(single)[0],
        ip:Object.values(single)[0].ip,
        active:Object.values(single)[0].active,
        lab:Object.values(single)[0].lab,
        labType:Object.values(single)[0].labType,
        openTime:Object.values(single)[0].opentime,
        installedApps:Object.values(single)[0].installedApps,
        index:index,

      }
      arr[index]=obj;
      return arr;
    },[])
  }
	return {state: data,
          isOpenApp:stateJs.reducers.isOpenApp,
          installedApps:stateJs.reducers.installedApps,
          winAppList:stateJs.reducers.VM_WIN,
          selectedLabNumber:stateJs.reducers.VM_WIN_selectedLabNumber,
          macList:stateJs.reducers.type === 'VM_WIN' ? stateJs.reducers.macList : []

  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Vm_win);
