import Vm_Mapping from '../../../../components/dashboard/renderer/main_body/vm_mapping/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/actions'
import {toJs,toClj} from 'mori'
import mori from 'mori';
function mapStateToProps(state){


  let odduu=[];
  let vmWin=[];
  let stateJs=toJs(toClj(state));

  Object.keys(stateJs.reducers).forEach(function(key,index){
    if(key === 'entries'){
      stateJs.reducers.entries.map((single,index)=>{
        if(Object.values(single)[0].system === 'linux'){
          odduu.push(single);
        }else if (Object.values(single)[0].system === 'win32') {
          vmWin.push(single)
        }
      })
    }
  })
  //------------
  let clientItems=[];
  if(odduu.length > 0){
    clientItems=odduu.reduce((arr,single,index)=>{
      let obj={
        mac: Object.keys(single)[0],
        ip:Object.values(single)[0].ip,
        active:Object.values(single)[0].active,
        lab:Object.values(single)[0].lab,
        labType:Object.values(single)[0].labType,
        openTime:Object.values(single)[0].opentime,
        installedApps:Object.values(single)[0].installedApps,
        pc:Object.values(single)[0].pc,
        index:index,
        lab_pc:`${Object.values(single)[0].lab}-${Object.values(single)[0].pc}`
      }
      arr[index]=obj;
      return arr;
    },[])
  }
  let winVmItems=[];
  if(vmWin.length > 0){
    winVmItems=vmWin.reduce((arr,single,index)=>{
      let obj={
        mac: Object.keys(single)[0],
        ip:Object.values(single)[0].ip,
        active:Object.values(single)[0].active,
        lab:Object.values(single)[0].lab,
        labType:Object.values(single)[0].labType,
        openTime:Object.values(single)[0].opentime,
        installedApps:Object.values(single)[0].installedApps,
        index:index,
        lab_pc:`${Object.values(single)[0].lab}-${Object.values(single)[0].ip.split('.')[3]}`
      }
      arr[index]=obj;
      return arr;
    },[])
  }

  var vm_mapping={}
  Object.keys(stateJs.reducers.vm_mapping).forEach(function(single,index){
    if(stateJs.reducers.vm_mapping[single]['linux']!=undefined && stateJs.reducers.vm_mapping[single]['win32']!=undefined){
      vm_mapping=Object.assign(vm_mapping,{[single]:stateJs.reducers.vm_mapping[single]})

    }
  })
  console.log(vm_mapping,'vm-mapping');
	return {
    clientItems:clientItems,
    winVmItems:winVmItems,
    linuxVmItems:{},
    vm_mapping:vm_mapping
  };
  //------

}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Vm_Mapping)
