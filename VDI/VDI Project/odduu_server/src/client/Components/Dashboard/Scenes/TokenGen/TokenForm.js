import React,{ Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl';
import { css } from 'aphrodite';
import { Field, reduxForm } from 'redux-form';
//Style
import { Style } from './style';


/**
 * @function TokenGenForm
 * @param {{handleSubmit: Function, pristine: Function, reset: Function, submitting: Function}} props 
 */
let TokenGenForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Card shadow={1} className={css(Style.root)}>

          <CardText >
            <div>
              <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                <Field className={`mdl-textfield__input`} name='orgName' component='input' type='text' placeholder='Organization Name' />
              </div>
              <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                <Field className={`mdl-textfield__input`} name='contactName' component='input' type='text' placeholder='Contact Person Name' />
              </div>
              <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                <Field className={`mdl-textfield__input`} name='contactCell' component='input' type='text' placeholder='Contact Person Cell No' />
              </div>
              <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                <Field className={`mdl-textfield__input`} name='contactEmail' component='input' type='email' placeholder='Contact Person Email' />
              </div>
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

TokenGenForm = reduxForm({
  form: 'tokenGenForm'
})(TokenGenForm)

exports.TokenGenForm = TokenGenForm;
