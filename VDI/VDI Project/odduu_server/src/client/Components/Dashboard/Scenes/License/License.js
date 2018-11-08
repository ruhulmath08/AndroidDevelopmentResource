import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import React, {Component} from 'react';
import {get} from 'mori';
import {ShowDialog} from './showDialog';
import {UpdateDialog} from './updateDialog';
//Style
import {Cell, Grid, DataTable, TableHeader, Button} from 'react-mdl';

/**
 * @function mapStateToProps
 * @param {clientList: [], token: String} state 
 */
function mapStateToProps(state) {
  return {
    clientList:get(state.reducer.tokenReducer, 'clientList'),
    token: get(state.reducer.authReducer, 'token')
  }
}
/**
 * @function mapDispatchToProps - Dispatch the action to Component.
 * @param {Function} dispatch 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

/**
 * @class License
 * @description Render the License component
 */
export class License extends Component {
  constructor(props) {
    super(props);
    this.state= {
      openDialog:false,
      updateDialog:false,
      titleUpdate:''
    }
    this.close = this.close.bind(this);
    this.closeUpdate = this.closeUpdate.bind(this);
  }
  close(){
    this.setState({
      openDialog :false
    })
  }
  closeUpdate() {
    this.setState({
      updateDialog: false
    })
  }
  render() {

    var _that = this;
    return (
      <Grid>
        <Cell col={8} offset={2} >
          <DataTable
            selectable
            shadow={0}
            rowKeyColumn='_id'
            rows={_that.props.clientList || []}
            onSelectionChanged={(idList)=> {

            }}
            >
            <TableHeader name="orgName" id="orgName"  tooltip="ORGANIZATION Name">ORG. Name</TableHeader>
            <TableHeader name="contactName" id="contactName"  tooltip="Contact Person">Con. Person</TableHeader>
            <TableHeader name="contactCell" id="contactCell"  tooltip="Contact Person Cell No">Con. Cell</TableHeader>
            <TableHeader name="licenseQty" id="licenseQty" cellFormatter={(licenseQty, obj, index) => {

              var validQty = licenseQty.filter(function(item, index) {
                return new Date(item.expDate).getTime() > new Date().getTime()
              })
              var qty = 0;
              validQty.forEach(function(item, index) {
                qty += parseInt(item.qty) || 0
              })
              return qty;
            }}  tooltip="License Quntiry">License</TableHeader>
            <TableHeader name="token" id="token"  cellFormatter={(tok, obj, index)=> {
              return <Button raised onClick={()=> {
                _that.setState({
                  token: tok,
                  openDialog: true
                })
              }} >Show Token</Button>
            }} tooltip="Token for connecting Server">Token</TableHeader>
            <TableHeader name="update" id="update" cellFormatter={(_id,obj, index)=>{
              return <Button raised accent ripple onClick={()=> {
                
                _that.setState({
                  updateDialog: true,
                  titleUpdate: obj.orgName,
                  licenseQty: obj.licenseQty,
                  _id : obj._id
                })
              }} >Update</Button>
            }}  tooltip="Action">Update</TableHeader>
            <TableHeader name="_id" id="_id" cellFormatter={(_id,obj, index)=>{
              return <Button raised accent ripple onClick={()=> {
                _that.props.remoteClient(_id, _that.props.token)

              }} >Delete</Button>
            }}  tooltip="Action">Delete</TableHeader>
          </DataTable>
          <ShowDialog openDialog ={_that.state.openDialog} close={_that.close} token={_that.state.token} title ='Token' />
          <UpdateDialog token={_that.props.token} openDialog = {_that.state.updateDialog} addLicenseAction={_that.props.addLicenseAction} id = {_that.state._id} close={_that.closeUpdate} licenseQty={_that.state.licenseQty} title={_that.state.titleUpdate} />
        </Cell>
      </Grid>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(License)

// <TableHeader name="expDate" id="expDate" cellFormatter={(expDate, obj, index)=> {
//   var month = parseInt(new Date(expDate).getMonth())+1
//   return new Date(expDate).getDate()+'-'+month+'-'+new Date(expDate).getYear()
// }}  tooltip="Expire Date ">Exp. Date</TableHeader>
