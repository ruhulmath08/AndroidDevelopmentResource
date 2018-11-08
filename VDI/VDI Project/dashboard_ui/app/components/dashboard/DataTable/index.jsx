import React,{Component} from 'react';
import {Grid,Cell,DataTable, TableHeader,Button} from 'react-mdl';
import {css} from 'aphrodite';
import {Style} from '../../css/Style';
import active_img from '../../../img/active.png';
import off_img from '../../../img/off.png';
import AppList from '../../dialog/show-app-list';
import {SelectField,Option} from 'react-mdl-extra';
import mori from 'mori';
export default class DataTableCom extends Component {
  constructor(props) {
    super(props);
    var labNumbers=mori.intoArray(this.props.data.reduce((sortedSet,single,index)=>{
        return mori.conj(sortedSet,single.lab)
    },mori.sortedSet()))
    this.state={
      data:this.props.data || [],
      labNumbers: labNumbers
    }

    this.componentWillMount=this.componentWillMount.bind(this);
    this.renderAppList=this.renderAppList.bind(this);

    this.updateLab=this.updateLab.bind(this);

  }

  isActive(obj){

    return (
      obj.active
    )
  }
  renderAppList(obj,index){
    this.props.isOpenAppList(true);
    this.props.getInstalledApps(obj.mac,index);


    let data=[]
    data={
      mac:obj.mac,
      obj:obj
    }
    this.setState({
      data:data
    })


  }
  componentWillMount(){
    if(this.props.vm_win===true && this.state.labNumbers.length > 0){
      this.props.setSelectedLabNumber(this.state.labNumbers[0],'VM_WIN')
    }else if (this.props.client === true && this.state.labNumbers.length > 0) {
      this.props.setSelectedLabNumber(this.state.labNumbers[0],'CLIENT')
    }
  }
  updateLab(val){

    if(this.props.vm_win===true && this.state.labNumbers.length > 0){
      this.props.setSelectedLabNumber(this.state.labNumbers[val],'VM_WIN')
    }else if (this.props.client === true && this.state.labNumbers.length > 0) {
      this.props.setSelectedLabNumber(this.state.labNumbers[val],'CLIENT')
    }

    this.setState({
      selectedLab:val
    })
  }
  render(){
    var _that=this;

    return (
      <div>

      <Grid >
          <Cell col={12} >
            <Grid>
              <Cell col={4} offset={8}>
                  <SelectField label={`Choose Lab Number`} onChange={(val)=>(_that.updateLab(val))} value={this.state.selectedLab}>
                    {this.state.labNumbers.length > 0 ? this.state.labNumbers.map((single,index)=>{
                      return (<Option key={`index-${index}`} value={index}>{single}</Option>)
                    }) : [<Option key={0} value={0}>''</Option>]
                    }
                  </SelectField>
              </Cell>
            </Grid>
          </Cell>
          <Cell col={12} >
          <div  >

            <DataTable
              selectable
              shadow ={0}
              rowKeyColumn="mac"
              rows={this.props.data.filter((single,index)=>{
                return single.lab === _that.props.selectedLabNumber
              })}
              onSelectionChanged={(macList)=>{
                if(_that.props.vm_win===true){
                  return _that.props.chooseMacIPS(macList,'win32')
                }else if(_that.props.client===true){
                  return _that.props.chooseMacIPS(macList,'linux')
                }
              }}
              >

              <TableHeader numeric name="lab" id="lab_no"  tooltip="Lab Number">Lab Number</TableHeader>
              <TableHeader numeric name="ip"  id="pc_no" cellFormatter={(ip,obj,index)=>  {

                return obj.pc != undefined ? obj.pc : ip.split('.')[3]}} tooltip="PC Number">PC Number</TableHeader>
              <TableHeader name="active" cellFormatter={(active)=> (active === true ? <img src={active_img} style={{width:'20px',height:'20px'}} />
              : <img src={off_img} style={{width:'20px',height:'20px'}} />)} tooltip="System Up/Down">Status</TableHeader>
              {
                this.props.showInstallApps === true ? <TableHeader name="installedApps" cellFormatter={(apps = [],obj,index)=> {
                  if(obj.active){
                    console.log('APPS ', obj, apps);
                  }
                  return (
                    apps.length > 0 ? <Button raised onClick={()=> _that.renderAppList(obj,index)}>Show</Button> : <Button raised disabled>Show</Button>
                  )
                }}  id="installedApps"  tooltip="Show Installed Apps">Installed Apps</TableHeader>
                : <TableHeader name="installedApps"/>
              }
              <TableHeader numeric name="mac" tooltip="Shutdown machine" cellFormatter={(mac,obj,index)=>(this.isActive(obj) === true ? <Button raised onClick={()=>{
                if(_that.props.vm_win === true){
                  _that.props.shutdown(mac,'VM_WIN')
                }else if(_that.props.client === true){
                  _that.props.shutdown(mac,'CLIENT')
                }
              }}>Shutdown</Button> : <Button raised disabled>Shutdown</Button>)}>Shutdown</TableHeader>
              <TableHeader name="openTime" tooltip="Reboot machine" cellFormatter={(openTime,obj,index) => (this.isActive(obj) === true ? <Button raised onClick={()=>{

                if(_that.props.vm_win === true){
                  _that.props.reboot(obj.mac,'VM_WIN')
                }else if(_that.props.client === true){
                  _that.props.reboot(obj.mac,'CLIENT')
                }
              }}>Reboot</Button> : <Button raised disabled>Reboot</Button>)} >Reboot</TableHeader>
              {_that.props.client == true ? <TableHeader name='delete' id='delete' tooltip='Delete This Client' cellFormatter={(mac, obj, index)=>{
                return <Button raised accent ripple onClick={()=>{
                    _that.props.deleteClient({
                    hostName:`odduu-cl${obj.lab}-pc${obj.pc}`,
                    mac:obj.mac
                    })
                }}>Delete</Button>
              }}>Action</TableHeader> : <TableHeader name='null' />}

          </DataTable>
          {_that.props.isOpenApp === true ? <AppList bulkUnInstall={this.props.bulkUnInstall} installedApps={_that.props.installedApps} isOpenApp={_that.props.isOpenApp} isOpenAppList={_that.props.isOpenAppList} data={this.state.data} /> : ''}
          </div>

          </Cell>
      </Grid>

      </div>
    )
  }
}
