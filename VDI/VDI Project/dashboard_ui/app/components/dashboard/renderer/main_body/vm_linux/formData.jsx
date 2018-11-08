import React,{Component} from 'react';
import {Field, reduxForm } from 'redux-form';
class FormData extends Component {
  constructor(props) {
    super(props)

  }


  render(){
    var _that=this;
    return(
      <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="appName">App Name</label>
          <Field name="appName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="cmd">Command</label>
          <Field name="cmd" component="input" type="text"/>
        </div>
      </form>
      </div>
    )
  }
}


FormData=reduxForm({
  form:'addApp'
})(FormData)
export default FormData;
