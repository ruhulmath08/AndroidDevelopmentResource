import React,{Component} from 'react';
import {Dialog,DialogActions,Button,DialogTitle,DialogContent} from 'react-mdl';
import {Field, reduxForm,handleSubmit } from 'redux-form';
export default class CmdExecute extends Component {
  constructor(props) {
    super(props)
    this.state={
      isOpen:this.props.open
    }
    this.changeDialog=this.changeDialog.bind(this)
    this.submit=this.submit.bind(this);

  }
  changeDialog(val){
    this.setState({
      isOpen:val
    })
    this.props.close()
  }
  submit(values){
    var _that=this;
    if(values.cmd == undefined){
      alert('Put valid cmd')
    }else{
      if(_that.props.macList.length <= 0 ){
        alert('Choose Lab Number')
      }else{
        _that.props.clientCmd(values.cmd,_that.props.macList)
      }

    }


  }

  render(){
    var _that=this;
    return(
      <div>
        <Dialog open={this.state.isOpen} >
          <FormData onSubmit={this.submit} />
          <DialogActions>
            <Button raised onClick={()=> _that.changeDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}




let FormData=({handleSubmit})=>{
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Command</label>
        <div>
          <Field name="cmd" component='textarea' />
        </div>
      </div>
      <div>
        <button type='submit' >Submit</button>
      </div>
    </form>
    </div>
  )
}


FormData=reduxForm({
  form:'cmdExecute'
})(FormData)
