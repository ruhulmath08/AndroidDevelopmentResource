import React,{Component} from 'react';
import DataTableCom from '../../../DataTable';
import {Grid,Cell, Button} from 'react-mdl';
import CmdExecute from './cmd_execute';
export default class Odduu extends Component {
  constructor(props) {
    super(props);
    this.openDialog=this.openDialog.bind(this);
    this.closeDialog=this.closeDialog.bind(this);
    this.state={
      openDialog:false
    }
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

    return (
      <div className={`container`}>
        {_that.state.openDialog === true ? <CmdExecute macList={_that.props.macList} clientCmd={_that.props.executeClientCmd} open={_that.state.openDialog} close={_that.closeDialog} /> : ''}
        <Grid>
        <Cell col={8} offset={1}>
          <Button raised onClick={()=>{
            _that.openDialog(true)
          }} >Execute CMD </Button>
        </Cell>
          <Cell col={8} offset={1}>
            <DataTableCom
            shutdown={this.props.shutdown}
            reboot={this.props.reboot}
            data={this.props.state}
            chooseMacIPS={this.props.chooseMacIPS}
            client={true}
            setSelectedLabNumber={this.props.setSelectedLabNumber}
            selectedLabNumber={this.props.selectedLabNumber}
            deleteClient={this.props.deleteClient}
            />
          </Cell>
        </Grid>
      </div>

    )
  }
}

// let data=[];
// if(this.props.state != undefined){
//   data=this.props.state.reduce((arr,single,index)=>{
//     let obj={
//       mac: Object.keys(single)[0],
//       ip:Object.values(single)[0].ip,
//       active:Object.values(single)[0].active,
//       lab:Object.values(single)[0].lab,
//       labType:Object.values(single)[0].labType,
//       openTime:Object.values(single)[0].opentime
//     }
//     arr[index]=obj;
//     return arr;
//   },[])
// }
