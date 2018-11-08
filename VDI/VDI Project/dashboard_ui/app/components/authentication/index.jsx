import React,{Component} from 'react';
import {Card, CardTitle, CardText, CardActions, Button,Textfield,Grid,Cell} from 'react-mdl';
import {css} from 'aphrodite';
import {Style} from './style';
import {Link} from 'react-router';
import FailureNotification from './failureNotification';
export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state={
      userId:'',
      password:''
    }
    this.userIdChange=this.userIdChange.bind(this);
    this.passwordChange=this.passwordChange.bind(this);
    this.resetField=this.resetField.bind(this)


  }
  userIdChange(event){
    this.setState({
      userId:event.target.value.trim()
    })
  }
  passwordChange(event){
    this.setState({
      password:event.target.value.trim()
    })
  }
  resetField(){
    this.setState({userId:'', password:''})
  }

  render(){
    var _that=this;
    return (
      <div>
      <Card shadow={1} className={css(Style.root)}>
          <CardTitle className={css(Style.title)}>ODDUU Ltd.</CardTitle>
          <CardText >
          <Textfield
            id='userId'
            ref='userId'
            value={this.state.userId}
            onChange={this.userIdChange}
            label="User ID"
            floatingLabel
            />
            <Textfield
              ref='password'
              value={this.state.password}
              onChange={this.passwordChange}
              type='password'
              label="password"
              floatingLabel
            />
            </CardText>
            <CardActions border>
            <Grid noSpacing={true}>
              <Cell col={2}>
              <Button colored ripple className={css(Style.buttonLeft)}
              onClick={()=>_that.props.submitLogin({userId:this.state.userId,password:this.state.password})

            }>Login</Button>

              </Cell>
              <Cell col={2} offset={6}>
              <Button colored ripple className={css(Style.buttonRight)}
              onClick={this.resetField}>reset</Button>
              </Cell>
              </Grid>

            </CardActions>
      </Card>


       <FailureNotification failAttemps={this.props.failAttemps} />
      </div>
    )
  }
}

// <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
//   <main class="mdl-layout__content">
//     <div class="mdl-card mdl-shadow--6dp">
//       <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
//         <h2 class="mdl-card__title-text">Acme Co.</h2>
//       </div>
//       <div class="mdl-card__supporting-text">
//         <form action="#">
//           <div class="mdl-textfield mdl-js-textfield">
//             <input class="mdl-textfield__input" type="text" id="username" />
//             <label class="mdl-textfield__label" for="username">Username</label>
//           </div>
//           <div class="mdl-textfield mdl-js-textfield">
//             <input class="mdl-textfield__input" type="password" id="userpass" />
//             <label class="mdl-textfield__label" for="userpass">Password</label>
//           </div>
//         </form>
//       </div>
//       <div class="mdl-card__actions mdl-card--border">
//         <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>
//       </div>
//     </div>
//   </main>
// </div>
