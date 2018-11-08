import React,{Component} from 'react';
import {Dialog,DialogActions,Button,DialogTitle,DialogContent} from 'react-mdl';
import {Field, reduxForm,handleSubmit } from 'redux-form';
import FileTransfer from '../../../FileTransfer';
import {WIN_FILE_TRANSFER_INPUT} from '../../../../../constants';
export class SendFile extends Component {
  constructor(props) {
    super(props)
    this.state={
      isOpen:this.props.open
    }
    this.changeDialog=this.changeDialog.bind(this)
    this.onSubmit=this.onSubmit.bind(this);
  }
  changeDialog(val){
    this.setState({
      isOpen:val
    })
    this.props.close()
  }
  onSubmit(values){
    var fileObjList = values[WIN_FILE_TRANSFER_INPUT]
    .reduce((array, item, index)=> {
      array.push({fileName : item.name, file : item})
      return array;
    },[])
    this.props.winFileTransfer(fileObjList, this.props.macList);
  }

  render(){
    var _that=this;
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return(
      <div>
        <Dialog open={this.state.isOpen} >
          <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                  name ={WIN_FILE_TRANSFER_INPUT}
                  component = {(props)=>{
                    return <FileTransfer {...props} appName={_that}/>
                  }}
                  />
                <Button raised colored disabled={pristine || submitting}   type="submit" >Submit</Button>
                <Button type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>
            </form>
          </div>
          <DialogActions>
            <Button raised onClick={()=> _that.changeDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default reduxForm({
  form: 'sendFileForm'
})(SendFile)
