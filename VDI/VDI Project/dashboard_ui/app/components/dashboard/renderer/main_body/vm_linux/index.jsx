import React,{Component} from 'react';
import {Grid,Cell,Button} from 'react-mdl';
import {MultiSelectField,Option} from 'react-mdl-extra';
import {Style} from './style';
import {css} from 'aphrodite';
import TableData from './dataTable';
import AppListAdd from './appListAddDialouge'
export default class Vm_linux extends Component {
  constructor(props) {
    super(props)
    console.log('in vm_linux components ',this.props);
    this.state={
      items:[],

    }
    this.updateList=this.updateList.bind(this);
    this.openDialog=this.openDialog.bind(this);
    this.closeDialog=this.closeDialog.bind(this)
  }
  updateList(item){

     this.setState({
       items:item
     })
  }
  openDialog(val){
    var _that=this
    this.setState({
      openDialog:val
    })

  }
  closeDialog(){
    this.setState({
      openDialog:false
    })
  }

  render(){

    var _that=this;
    var list=[];
    return (
      <div className={`container`}>
      {this.state.openDialog === true ? <AppListAdd open={this.state.openDialog} submitLinuxApp={this.props.submitLinuxApp} close={this.closeDialog} /> : '' }
      <Grid>
        <Cell col={8} offset={1}>
          {/* Add 1 dropdown for available apps list ; Add 2 button - 1.installation 2. un-installation */}
          <Grid noSpacing={true}>
          <Cell col={6}>
            <MultiSelectField label={'Select Apps'} onChange={(val)=>(_that.updateList(val))}  value={_that.state.items}>
                {this.props.linux_appList != undefined ?  this.props.linux_appList.map((single,index)=>{
                  return (<Option key={`index-${index}`} value={index}>{single}</Option>)
                }) : [<Option key={0} value={0}>''</Option>]}

            </MultiSelectField>
          </Cell>
          <Cell col={6} >
            <Grid noSpacing={true} className={css(Style['button-align'])}>
              <Cell col={4}>
                <Button raised onClick={()=>{

                  if(_that.props.macList != undefined && _that.props.macList.length >0 ){
                    let appList=[]
                    _that.state.items.forEach(function(item,index){
                      appList.push(_that.props.linux_appList[item])
                    })
                    _that.props.bulkInstall(appList,'vm_linux',_that.props.macList)
                  }else{
                    alert('Choose a Lab')
                  }

                }} disabled={_that.state.items.length > 0  ? false : true} >Install</Button>
              </Cell>
              <Cell col={4}>
                <Button raised onClick={()=>{
                  if(_that.props.macList != undefined && _that.props.macList.length >0 ){
                    let appList=[]
                    _that.state.items.forEach(function(item,index){
                      appList.push(_that.props.linux_appList[item])
                    })
                    _that.props.bulkUnInstall(appList,'vm_linux',_that.props.macList)
                  }else{
                    alert('Choose a Lab')
                  }
                }} disabled={_that.state.items.length > 0  ? false : true}>Un-Install</Button>
              </Cell>
              <Cell col={4}>
                <Button raised onClick={()=>(_that.openDialog(true))} >Add App</Button>
              </Cell>
            </Grid>
          </Cell>
          </Grid>
        </Cell>

        {/* add data table  */}
        <Cell col={8} offset={1}>
          <TableData
            data={this.props.state} installedApps={_that.props.installedApps}
            showInstallApps={true} isOpenAppList={_that.props.isOpenAppList}
            isOpenApp={_that.props.isOpenApp} chooseMacIPS={_that.props.chooseMacIPS} vm_linux={true}
            shutdown={_that.props.shutdown} reboot={_that.props.reboot}
            setSelectedLabNumber={_that.props.setSelectedLabNumber}
            selectedLabNumber={_that.props.selectedLabNumber}

            bulkUnInstall={this.props.bulkUnInstall}
          />
        </Cell>
      </Grid>


      </div>
    )
  }
}
