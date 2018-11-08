import React,{ Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl';
import { css } from 'aphrodite';
import { Style } from './style';
import { Link } from 'react-router';

var props='';
//import FailureNotification from './failureNotification';

import { Field, reduxForm } from 'redux-form';
/**
 * @function Login - React Login Component.
 * @param {Object} prop 
 */
exports.Login = (prop)=> {
  props = prop;
  return (
    <div>
      <LoginForm onSubmit={submitAction} />
    </div>
  )
}

// Form Action Handle
function submitAction(values) {
  if(values.userId != undefined && values.password != undefined) {
    props.login(values.userId, values.password);
  }
}

// Login Form
let LoginForm = (props)=> {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (

      <form onSubmit={handleSubmit}>
        <Card shadow={1} className={css(Style.root)}>
            <CardTitle className={css(Style.title)}>ODDUU Ltd.</CardTitle>
            <CardText >
              <div >
                <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                  <Field className={`mdl-textfield__input`} name='userId' component='input' type='text' placeholder='User ID' />
                </div >
                <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded`}>
                  <Field className={`mdl-textfield__input`} name='password' component='input' type='password' placeholder='Password' />
                </div>
              </div>
              </CardText>
              <CardActions border>
              <Grid noSpacing={true}>
                <Cell col={2}>
                  <Button colored ripple className={css(Style.buttonLeft)} disabled={pristine || submitting} type="submit">Login</Button>
                </Cell>
                <Cell col={2} offset={6}>

                  <Button colored ripple className={css(Style.buttonRight)} disabled={pristine || submitting} onClick={reset} type="button">Reset</Button>
                </Cell>
                </Grid>

              </CardActions>
        </Card>
      </form>


    // <FailureNotification failAttemps={this.props.failAttemps} />

  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)
