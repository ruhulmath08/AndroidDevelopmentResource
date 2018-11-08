import React, {Component} from 'react';
import {Grid,Cell, RadioGroup, Radio,Button,DataTable,TableHeader} from 'react-mdl';
import {SelectField,Option} from 'react-mdl-extra';
import {css} from 'aphrodite';
import {Style} from './style';
import SingleMapping from './single_mapping';
import MultipleMapping from './multiple_mapping';
import DisplayMapping from './display_mapping';
export default class Vm_Mapping extends Component {
  constructor(props) {
    super(props);
    this.clientTypeChange = this.clientTypeChange.bind(this);
    this.vmTypeChange = this.vmTypeChange.bind(this);
    this.clientListChange = this.clientListChange.bind(this);
    this.vmListChange = this.vmListChange.bind(this);
    this.submitValu = this.submitValu.bind(this);
    this.resetField = this.resetField.bind(this);
    this.state = {
      clientType: '',
      vmType: 'win32',
      clientList: [],
      vmList: []
    }

  }
  clientTypeChange(event){

    this.setState({clientType: event.target.value})
  }
  vmTypeChange(event){
    this.setState({vmType: event.target.value})

  }
  clientListChange(event){

    this.setState({clientList: event.target.value})
  }
  vmListChange(event){
    this.setState({vmList: event.target.value})
  }
  submitValu(){
  const clientType = this.state.clientType;
  const vmType = this.state.vmType;

  console.log('Client Type : '+clientType +'Vm Type : '+vmType );


  }
  resetField(){
  this.setState({userName: '',vmList:''})
  }
  render(){
    var _that=this;
    return(
      <div className={`container`}>
        <Grid noSpacing={true}>
          <Cell col={4} phone={6} offset={2}>
            <Grid noSpacing={true}>
                <Cell col={3} phone={6} ><p className={css(Style.radioLabel)}>Client : </p></Cell>
                <Cell col={6} phone={10}>
                <RadioGroup name="client" className={css(Style['list-style'])} container="ul" childContainer="li" value={this.state.clientType} onChange={_that.clientTypeChange}>
                  <Radio value="single" ripple > Single </Radio>
                  <Radio value="multiple" ripple > Multiple </Radio>
                </RadioGroup>
                </Cell>
            </Grid>
          </Cell>
          <Cell col={2} >
            {(function(){
              if(_that.state.clientType != ''){
                return <Button raised style={{visibility: "visible"}} onClick={()=>(
                  _that.setState({
                    clientType:''
                  })
                )}>Show Mapping </Button>
              }
            })()}
          </Cell>
          <Cell col={4} phone={6}>
            <Grid noSpacing={true}>
                <Cell col={3} ><p className={css(Style.radioLabel)}>VM : </p></Cell>
                <Cell col={6} phone={10}>
                <RadioGroup name="vm" container="ul" className={css(Style['list-style'])} childContainer="li" value={this.state.vmType} onChange={_that.vmTypeChange}>
                  <Radio value="win32" ripple > Windows </Radio>
                  <Radio value="linux" ripple > Linux </Radio>
                </RadioGroup>
                </Cell>
            </Grid>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={8} offset={2}>
            {(()=>{
              if(_that.state.clientType === 'single'){
                return _that.state.vmType === 'win32' ? <SingleMapping singleVmMapping={this.props.singleVmMapping} clientItems={this.props.clientItems} vmItems={this.props.winVmItems} win={true}/>
                :
                <SingleMapping singleVmMapping={this.props.singleVmMapping} clientItems={this.props.clientItems} vmItems={[]} win={false} />
              }else if (this.state.clientType === 'multiple') {
                return _that.state.vmType === 'win32' ?  <MultipleMapping singleVmMapping={this.props.singleVmMapping} clientItems={this.props.clientItems} vmItems={this.props.winVmItems} win={true}/>
                :
                <MultipleMapping clientItems={this.props.clientItems} vmItems={[]} win={false}/>
              }else {
                return <DisplayMapping vm_mapping={this.props.vm_mapping} formattedData={Object.keys(this.props.vm_mapping).reduce(function(array,single,index){
                  var singleItem=_that.props.vm_mapping[single]

                  array.push({
                    lab:single.split(/[- cl pc]/)[3],
                    pc:single.split(/[- cl pc]/)[6],
                    vm_win:singleItem.win32.ip,
                    vm_linux:singleItem.linux.ip,
                    obj:singleItem,
                    index:index,
                    hostName:single
                  })
                  return array;
                },[])} />
              }
            })()}
          </Cell>

        </Grid>


      </div>
    )
  }
}
