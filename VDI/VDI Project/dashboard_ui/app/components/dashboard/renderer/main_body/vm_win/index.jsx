import React,{Component} from 'react';
import DataTableCom from '../../../DataTable'
import {Grid,Cell,Button} from 'react-mdl';
import {MultiSelectField,Option} from 'react-mdl-extra';
import {Link} from 'react-router';
import {Style} from './style';
import {css} from 'aphrodite';
import * as _path from '../../../../../path';
import {WIN_APP_FILE_ROUTE} from '../../../../../constants';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SendFile from './sendFile';
export default class Vm_win extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      openDialog:false
    }
    this.updateList=this.updateList.bind(this);
    this.installBulk=this.installBulk.bind(this);
    this.unInstallBulk=this.unInstallBulk.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    // console.log(this.props.macList,' macList');
  }
  closeDialog(){
    this.setState({
      openDialog:false
    })
  }
  updateList(item){

     this.setState({
       items:item
     })
  }
  installBulk(items){
    let _that=this;
    let appList=items.reduce(function(array,single,index){

      array.push(_that.props.winAppList[single]);
      return array;
    },[])

    if(_that.props.macList.length > 0){
      this.props.bulkInstall(appList,'win32',_that.props.macList);
    }else {
      alert('Select a Lab')
    }
  }
  unInstallBulk(items){
    let _that=this;
    // let appList=items.reduce(function(array,single,index){
    //   array.push(`${_path.fileServer}VM_WIN/${_that.props.winAppList[single]}`);
    //   return array;
    // },[])
    let appList=items.reduce(function(array,single,index){

      array.push(_that.props.winAppList[single]);
      return array;
    },[])

    if(_that.props.macList.length > 0){
      this.props.bulkUnInstall(appList,'win32',_that.props.macList);
    }else {
      alert('Select a Lab')
    }
  }

  render(){
    var _that=this;
    var list=[];


    return (
      <div className={`container`}>
      <Grid>
        <Cell col={10} offset={1}>
          {/* Add 1 dropdown for available apps list ; Add 2 button - 1.installation 2. un-installation */}
          <Grid noSpacing={true}>
          <Cell col={6}>
            <MultiSelectField label={'Select Apps'} onChange={(val)=>(_that.updateList(val))}  value={_that.state.items}>
                {this.props.winAppList != undefined ?  this.props.winAppList.map((single,index)=>{
                  var itemObj = JSON.parse(single)
                  return (<Option key={`index-${index}`} value={index}>{itemObj.appName}</Option>)
                }) : [<Option key={0} value={0}>''</Option>]}

            </MultiSelectField>
          </Cell>
          <Cell col={6} >
            <Grid noSpacing={true} className={css(Style['button-align'])}>
              <Cell col={3}>
                <Button raised onClick={()=>(_that.installBulk(_that.state.items))} disabled={_that.state.items.length > 0  ? false : true} >Install</Button>
              </Cell>
              <Cell col={3}>
                <Button raised onClick={()=>(_that.unInstallBulk(_that.state.items))} disabled={_that.state.items.length > 0  ? false : true}>Un-Install</Button>
              </Cell>
              <Cell col={3}>
                <Link to={'dashboard/'+WIN_APP_FILE_ROUTE} >ADD App</Link>
              </Cell>
              <Cell col={3}>
                <Button raised onClick={()=>(_that.setState({openDialog : true}))} disabled={this.props.macList.length > 0   ? false : true}>Send File</Button>
              </Cell>
            </Grid>
          </Cell>
          </Grid>
        </Cell>
        <Cell col={8} offset={1}>
          <DataTableCom getInstalledApps={this.props.getInstalledApps}
            data={this.props.state} installedApps={_that.props.installedApps}
            showInstallApps={true} isOpenAppList={_that.props.isOpenAppList}
            isOpenApp={_that.props.isOpenApp} chooseMacIPS={_that.props.chooseMacIPS} vm_win={true}
            shutdown={_that.props.shutdown} reboot={_that.props.reboot}
            setSelectedLabNumber={_that.props.setSelectedLabNumber}
            selectedLabNumber={_that.props.selectedLabNumber}
            vm_win={true}
            bulkUnInstall={this.props.bulkUnInstall}
          />
        </Cell>
      </Grid>

      {this.state.openDialog == true ? <SendFile
        winFileTransfer  ={this.props.winFileTransfer}
        open={this.state.openDialog}
        close = {this.closeDialog}
        macList = {this.props.macList || []}
        /> : <div />}
      </div>

    )
  }
}

// <Grid noSpacing={true}>
//     <Cell col={6}>
//       <MultiSelectField label={'Select Apps'} onChange={(val)=>(_that.updateList(val))}  value={_that.state.items}>
//           <Option value={1}>App 1</Option>
//           <Option value={2}>App 2</Option>
//           <Option value={3}>App 3</Option>
//       </MultiSelectField>
//     </Cell>
//     <Cell col={6}>
//         <Grid noSpacing={true}>
//             <Cell col={6}>
//                 <Button raised>Install</Button>
//             </Cell>
//             <Cell col={6}>
//                 <Button raised>Un-install</Button>
//             </Cell>
//         </Grid>
//     </Cell>
// </Grid>
