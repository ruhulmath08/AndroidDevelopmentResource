import React,{Component} from 'react';
import {AutoComplete} from 'react-mdl-extra';
import {Grid,Cell,Button} from 'react-mdl';
import {css} from 'aphrodite';
import {Style} from './style';
export default class MultipleMapping extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedFirstClient:'',
      selectedLastClient:'',
      selectedWinVm:'',
      selectedLinuxVm:''
    }
    console.log('Props in multiple_mapping ',this.props);
    this.updateFirstClient=this.updateFirstClient.bind(this);
    this.updateLastClient=this.updateLastClient.bind(this);
    this.updateVm=this.updateVm.bind(this);
  }
  updateFirstClient(val){
    this.setState({
      selectedFirstClient:val
    })
  }
  updateLastClient(val){
    this.setState({
      selectedLastClient:val
    })
  }
  updateVm(val){
    if(this.props.win === true){
      this.setState({
        selectedWinVm:val,
        selectedLinuxVm:''
      })
    }else{
      this.setState({
        selectedLinuxVm:val,
        selectedWinVm:''
      })
    }
  }
  render(){
    var _that=this;
    return (
      <div>
        <Grid>
          <Cell col={6} offset={2}>

             <AutoComplete label={'First PC NO'} items={this.props.clientItems} valueIndex={'lab_pc'}
             dataIndex={'lab_pc'} value={this.state.selectedFirstClient} onChange={this.updateFirstClient}
             />
             <AutoComplete label={'Last PC NO'} items={this.props.clientItems} valueIndex={'lab_pc'}
             dataIndex={'lab_pc'} value={this.state.selectedLastClient} onChange={this.updateLastClient}
             />
          </Cell>
          <Cell col={4}>

             <AutoComplete label={this.props.win === true ? 'Win VM' : 'Linux VM'}  items={this.props.vmItems} valueIndex={'lab_pc'}
             dataIndex={'lab_pc'} onChange={this.updateVm}
             value={this.props.win === true ? this.state.selectedWinVm : this.state.selectedLinuxVm}
             />

          </Cell>
          <Cell col ={4} offset={4}>
              <Button ripple colored className={css(Style['button-submit'])} onClick={()=>{
                if(_that.state.selectedFirstClient != '' && _that.state.selectedLastClient != '' && _that.state.selectedWinVm != '' || _that.state.selectedLinuxVm != ''){
                  var firstPcNo=parseInt(_that.state.selectedFirstClient.split('-')[1]);
                  var lastPcNo=parseInt(_that.state.selectedLastClient.split('-')[1]);

                  if( typeof firstPcNo === 'number' &&  typeof lastPcNo === 'number' && lastPcNo > firstPcNo && (lastPcNo - firstPcNo) <= 20 ){
                    var vmIp='';
                    var clientMac='';
                    var vmWinMac='';
                    var vmLinMac='';


                    var vmLab_Pc=_that.state.selectedWinVm != '' ? _that.state.selectedWinVm : _that.state.selectedLinuxVm;
                    for (var i=0; i <= lastPcNo - firstPcNo ; i++){
                      //assign clientMac to selectedClient
                      _that.props.clientItems.forEach(function(item,index){
                        if(`${_that.state.selectedFirstClient.split('-')[0]}-${firstPcNo+i}`===item.lab_pc){
                          clientMac=item.mac
                        }
                      })
                      if(_that.props.win === true){

                        _that.props.vmItems.forEach(function(item,index){
                          if(`${parseInt(_that.state.selectedWinVm.split('-')[0])}-${parseInt(_that.state.selectedWinVm.split('-')[1])+i}`=== item.lab_pc){
                            vmIp=item.ip;
                            vmWinMac=item.mac;
                          }
                        })
                        _that.props.singleVmMapping(clientMac,vmWinMac,'',vmIp)
                      }else{
                        //_that.props.singleVmMapping(clientMac,'',vmLinMac,vmIp)
                      }



                    }

                  }else{
                    alert('Last PC No must be greater than First PC No & Maximum 20 ')
                  }


                }else{
                  alert('Validation failed')
                }
              }}
              > Submit </Button>
          </Cell>
        </Grid>
      </div>


    )
  }
}
