import React,{Component} from 'react';
import {Dialog,DialogActions,Button,DialogTitle,DialogContent,Grid,Cell, DataTable, TableHeader, Card, CardText, CardActions} from 'react-mdl';
import {Style} from './style';
import {css} from 'aphrodite';
import { Field, reduxForm } from 'redux-form';

/**
 * @function AddLicense - Render Update component to add an existing user License.
 * @param {{handleSubmit: Function, pristine: Function, reset: Function, submitting: Function}} props 
 */
let AddLicense = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Card shadow={1} className={css(Style.inputForm)}>

          <CardText >
            <div>
              <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                <Field className={`mdl-textfield__input`} name='licenseQty' component='input' type='number' placeholder='License Quntity' />
              </div>
              <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                <Field className={`mdl-textfield__input`} name='expDate' component='input' type='date' placeholder='Expire Date' />
              </div>
            </div>
            </CardText>
            <CardActions border>
            <Grid noSpacing={true}>
              <Cell col={2}>
                <Button colored ripple className={css(Style.buttonLeft)} disabled={pristine || submitting} type="submit">Submit</Button>
              </Cell>
              <Cell col={2} offset={6}>
                <Button colored ripple className={css(Style.buttonRight)} disabled={pristine || submitting} onClick={reset} type="button">Reset</Button>
              </Cell>
              </Grid>

            </CardActions>
      </Card>
    </form>
  )
}

AddLicense = reduxForm({
  form: 'addLicense'
})(AddLicense)


var props = '';
export const UpdateDialog = (prop) => {
  var props = prop;
  const submitAction = (values)=> {
    props.addLicenseAction(Object.assign(values, {'id': props.id, 'token': props.token}))
  }
  return (
    <div className={`container`}>
    <Dialog open={props.openDialog} className={css(Style.root)}>

        <DialogTitle>
          {props.title}

        </DialogTitle>

          <DialogContent className={css(Style.root)}>
            <Grid >
                <Cell col={8} offset={2}>
                <DialogActions>
                  <Button raised onClick={()=> {props.close()}}>Close</Button>
                </DialogActions>
                </Cell>
                <Cell col={4} >
                    <DataTable
                      shadow={0}
                      rowKeyColumn='startedDate'
                      rows={props.licenseQty || []}
                    >
                      <TableHeader name='startedDate' id='startedDate' cellFormatter={(date, obj, index)=> {
                        return date.split('T')[0]
                      }}  tooltip='License Subscribed Date'>Subscribed</TableHeader>
                      <TableHeader name='expDate' id='expDate' cellFormatter={(date, obj, index)=> {
                        return date.split('T')[0]
                      }} tooltip='License Expiry Date' >Expire</TableHeader>
                      <TableHeader name='qty' id='qty' tooltip='Quantity' >Quantity</TableHeader>
                    </DataTable>
                </Cell>
                <Cell col={8}  >
                  <AddLicense onSubmit={submitAction} />
                </Cell>
            </Grid>
          </DialogContent>


    </Dialog>
    </div>
  )
}
