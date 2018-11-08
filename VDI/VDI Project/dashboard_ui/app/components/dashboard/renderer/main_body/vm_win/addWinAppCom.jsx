import React, {Component, PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import {reduxForm, Field, FieldArray} from 'redux-form';
import {Grid, Cell, Button, Snackbar} from 'react-mdl';
import FileTransfer from '../../../FileTransfer';
import {WIN_APP_INPUT_FILE, WIN_APP_FILE_TYPE} from '../../../../../constants';
import {Link} from 'react-router';
import {attributeField, cmdField} from './renderFields';

export class WinAppFile extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
  }
  handleTimeoutSnackbar(value) {
    this.setState({
      isSnackbarActive : value,
      warning : 'Please select required field'
    })
  }

  onSubmit(data) {
    if (data[WIN_APP_INPUT_FILE] ==undefined ) {
      this.setState({
        isSnackbarActive : true,
        warning : 'Please select file.'
      })
      return ;
    }
    var check = false
    var length = Object.keys(data).length;
    if(length > 2 ) {
      this.setState({
        isSnackbarActive : true,
        warning : 'You can save either Attribues Or Command.'
      })
    } else if (length === 2) {
      var types = Object.keys(data)
      if(types.indexOf('attributes') > -1) {
      check = true;

      }else if (types.indexOf('cmdField') > -1) {
      check = true

      }
    } else if (length == 1 ) {
      check = true
    }
    if(check === true){
      var fileType = data[WIN_APP_INPUT_FILE][0].name.split('.').slice(-1)[0]
      if(fileType === WIN_APP_FILE_TYPE) {
        this.props.winAppFileAdd(data, data[WIN_APP_INPUT_FILE][0].name)
      } else {
        this.setState({
          isSnackbarActive : true,
          warning : 'Only .msi file type accepted.'
        })
      }

    }

  }

  render() {
    var _that = this;
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <Button raised onClick={()=> {
              this.props.goBackRoute()
            }}>Back</Button>
          </Cell>
          <Cell col={12}>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Cell col={12}>
                <Field
                  name ={WIN_APP_INPUT_FILE}
                  component = {(props)=>{
                    return <FileTransfer {...props} appName={_that}/>
                  }}
                  />
              </Cell>
              <Cell col={12}>
                <FieldArray name="attributes" component={attributeField} />
                <FieldArray name="cmdField" component={cmdField} />
              </Cell>
              <Cell col={8} offset={2}>
                  <Button type="submit" style={{backgroundColor: '#366EBF'}}>Add File</Button>
                  <Button type="button" disabled={pristine || submitting} onClick={reset}>Reset</Button>

              </Cell>
            </form>
          </Cell>
        </Grid>
        <div>
          {this.state.isSnackbarActive === true ? <Snackbar
            active={this.state.isSnackbarActive}
            onClick={() => this.handleTimeoutSnackbar(false)}
            onTimeout={() => this.handleTimeoutSnackbar(false)}
            action="OK"
            > {this.state.warning}
          </Snackbar> : <div />}
        </div>
      </div>

    )
  }

}

export default reduxForm({
  form: 'winAppAddForm'
})(WinAppFile)


// <Button raised style={{backgroundColor: '#366EBF'}} type='submit'>Add File</Button>
// <Button onClick = {reset}>Reset</Button>
