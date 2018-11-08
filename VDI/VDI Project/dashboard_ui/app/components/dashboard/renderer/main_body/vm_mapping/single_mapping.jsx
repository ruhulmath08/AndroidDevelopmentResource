import React,{Component} from 'react';
import {AutoComplete} from 'react-mdl-extra';
import {Grid,Cell,Button} from 'react-mdl';
import {css} from 'aphrodite';
import {Style} from './style';
export default class SingleMapping extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedClient:'',
      selectedWinVm:'',
      selectedLinuxVm:''
    }
    this.updateClient=this.updateClient.bind(this)
    this.updateVm=this.updateVm.bind(this)

  }
  updateClient(val){

    this.setState({
      selectedClient:val
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
        <Grid noSpacing={true}>
            <Cell col={6}>
              <AutoComplete label={'Lab-Pc'} onChange={this.updateClient} items={this.props.clientItems} valueIndex={'mac'}
              dataIndex={'lab_pc'} value={this.state.selectedClient} />
            </Cell>
            <Cell col={6}>
              <AutoComplete label={this.props.win === true ? 'Win VM Lab-Pc' : 'Linux VM Lab-Pc'} items={this.props.vmItems} valueIndex={'mac'}
              dataIndex={'lab_pc'} onChange={this.updateVm} value={this.props.win === true ? this.state.selectedWinVm : this.state.selectedLinuxVm}/>
            </Cell>


      </Grid>
      <Grid >
          <Cell col={4} offset={4}>
              <Button onClick={()=>{
                if(_that.state.selectedClient != '' && _that.state.selectedWinVm != '' || _that.state.selectedLinuxVm != ''){
                  var vmIp='';
                  // vm ip put by manually
                  // if(_that.state.selectedWinVm == ''){
                  //   vmIp=_that.state.selectedLinuxVm
                  // } else {
                  //   vmIp = _that.state.selectedWinVm
                  // }
                  _that.props.vmItems.forEach(function(item,index){
                    if(_that.state.selectedWinVm === item.mac || _that.state.selectedLinuxVm === item.mac){
                      vmIp=item.ip
                    }
                  })
                  _that.props.singleVmMapping(_that.state.selectedClient,_that.state.selectedWinVm,_that.state.selectedLinuxVm,vmIp);
                }else{
                  alert('Validation failed')
                }
              }} ripple colored className={css(Style['button-submit'])}> Submit </Button>
          </Cell>

      </Grid>
      </div>
    )
  }
}
