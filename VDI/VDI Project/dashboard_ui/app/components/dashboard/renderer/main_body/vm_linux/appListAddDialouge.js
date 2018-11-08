import React,{Component} from 'react';
import {Dialog,DialogActions,Button,DialogTitle,DialogContent} from 'react-mdl';
import {Field, reduxForm,handleSubmit } from 'redux-form';
export default class AppListAdd extends Component {
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

    if(values.appName != undefined && values.cmd != undefined){
      this.props.submitLinuxApp(values)
    }else {
      alert('Fill both field')
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
        <label >App Name</label>
        <div>
          <Field name="appName" component='input' type="text"/>
        </div>
      </div>
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
  form:'addApp'
})(FormData)
