import React,{Component} from 'react';
import {Autocomplete,SelectField,Option} from 'react-mdl-extra';
import {Grid,Cell,DataTable,TableHeader} from 'react-mdl';
import mori from 'mori';
import {Style} from './style';
import {css} from 'aphrodite';
export default class DisplayMapping extends Component {
  constructor(props) {
    super(props)
    var labNumbers=mori.intoArray(Object.keys(this.props.vm_mapping).reduce(function(sortedSet,single,index){
      return mori.conj(sortedSet,single.split(/[- cl pc]/)[3])
    },mori.sortedSet()))
    this.state={
      labNumbers:labNumbers,
      selectedLab:labNumbers[0],
      data:this.props.formattedData.filter(function(single,index){
        return labNumbers[0] === single.lab
      }),
    }

    this.updateLab=this.updateLab.bind(this);
    console.log('formatted data ',this.props.formattedData);
  }
  updateLab(val){
    var selectedLab=this.state.labNumbers[val]
    var data=this.props.formattedData.filter(function(single,index){
      return selectedLab === single.lab
    });

    this.setState({
      selectedLab:val,
      data:data
    })

  }

  render(){
    var _that=this;
    return (
      <div>
        <Grid >
            <Cell col={4} offset={8}>
              <SelectField label={`Choose Lab Number`} onChange={(val)=>(_that.updateLab(val))} value={this.state.selectedLab}>
                {this.state.labNumbers.length > 0 ? this.state.labNumbers.map((single,index)=>{
                  return (<Option key={`index-${index}`} value={index}>{single}</Option>)
                }) : [<Option key={0} value={0}>''</Option>]
                }
              </SelectField>
            </Cell>
            <Cell col={12}>
              <DataTable
                shadow ={0}
                rowKeyColumn="hostName"
                rows={this.state.data}
                className={css(Style.data_table)}
                >

                  <TableHeader name="lab" id="lab"  tooltip="Lab Number">Lab</TableHeader>
                  <TableHeader name="pc" id="pc"  tooltip="PC Number">PC</TableHeader>
                  <TableHeader name="vm_win" id="vm_win"  tooltip="VM Windows IP">Windows</TableHeader>
                  <TableHeader name="vm_linux" id="vm_linux"  tooltip="VM Linux IP">Linux</TableHeader>

                </DataTable>
            </Cell>
        </Grid>
      </div>
    )
  }
}
