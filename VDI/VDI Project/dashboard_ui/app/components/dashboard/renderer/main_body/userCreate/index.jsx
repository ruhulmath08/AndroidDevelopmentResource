import React,{Component} from 'react';
import {Style} from './style';
import {css} from 'aphrodite';
import {SelectField,Option} from 'react-mdl-extra';
import {Card,CardText,CardTitle,CardActions,Grid,Cell,Textfield,Button} from 'react-mdl';
import UserCreateNotification from './userCreateNotification';
import UserList from './userList'
export default class UserCreate extends Component {
  constructor(props) {
    super(props)
    this.userIdChange = this.userIdChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
    this.updateSelectedRole= this.updateSelectedRole.bind(this);
    this.resetField = this.resetField.bind(this);
    this.state = {
      userName: '',
      userId: '',
      password: '',

      selectedRole:''
    }

  }

  userNameChange(event){
    this.setState({userName: event.target.value})
  }

  userIdChange(event){

    this.setState({userId: event.target.value})
  }
  passwordChange(event){
    this.setState({password: event.target.value})
  }

  resetField(){
    this.setState({userName: '',userId:'', password:''})
  }
  updateSelectedRole(val){
    this.setState({
      selectedRole:val
    })
  }

  render(){
    var _that=this;
    return (
      <div className={`container`}>
        <div ><UserList userList={this.props.userList}/> </div>
        <div>
            <Card shadow={0} className={css(Style.root)}>
              <CardTitle className={css(Style.title)}>Odduu Server </CardTitle>
              <CardText >
                <Textfield
                  id='userName'
                  ref='userName'
                  value={this.state.userName}
                  onChange={this.userNameChange}
                  label="User Name"
                  floatingLabel
                />
                <Textfield
                  id='userid'
                  ref='userid'
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
                <Grid  noSpacing={true}>

                  <Cell col={8}   >
                    <SelectField label={'Select User Type'} onChange={(val)=>(_that.updateSelectedRole(val))} value={this.state.selectedRole}>
                      <Option value={'user'}>User</Option>
                      <Option value={'admin'}>Admin</Option>
                    </SelectField>
                  </Cell>
                </Grid>
            </CardText>
          <CardActions border>
            <Button colored ripple className={css(Style.buttonLeft)}
            onClick={()=>{
              if(_that.state.userName != '' && _that.state.password != '' &&  _that.state.userId != '' && _that.state.selectedRole != ''){
                _that.props.createUser(_that.state.userName,_that.state.userId,_that.state.password,_that.state.selectedRole)
              }
            }}  > Submit </Button>
            <Button colored ripple className={css(Style.buttonRight)}
              onClick={this.resetField}>reset</Button>
          </CardActions>
        </Card>
        {_that.props.createdUserCount > _that.props.previousCountedCreatedUser ? <UserCreateNotification userExist={false} userExistChange={_that.props.userExistChange}  createdUserCount={_that.props.createdUserCount}/> : ''}
        {_that.props.userExist === true ? <UserCreateNotification userExist={true} userExistChange={_that.props.userExistChange} />:''}
        </div>
      </div>
)
  }
}


// <Cell col={8} >
//   <SelectField label={'Select User Type'} onChange={(val)=>(_that.updateSelectedRole(val))} value={this.state.selectedRole}>
//     <Option value={'user'}>User</Option>
//     <Option value={'admin'}>Admin</Option>
//   </SelectField>
// </Cell>
