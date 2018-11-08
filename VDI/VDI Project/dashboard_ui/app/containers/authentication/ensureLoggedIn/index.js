import mori from 'mori';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import {bindActionCreators} from 'redux';
import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import LoginView from '../../../components/authentication';

class EnsureLoggedIn extends Component{
  constructor(props){
    super(props);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.componentWillMount=this.componentWillMount.bind(this)
    console.log('in authentication ',this.props)
  }
  componentDidMount(){

    const {dispatch,currentURL} =this.props;
    if(!this.props.isLoggedIn){

      //dispatch(actions.setRedirectUrl(currentURL))
      this.props.router.push('login')
    }
  }
  componentWillMount(){
    this.props.router.push('dashboard')
     
    return this.props.children
  }
  render(){
    var _that=this;
    if(this.props.isLoggedIn === true){

      return <div>{this.componentWillMount}</div>
    }else{
      console.log('in LoginView continue')
      // return <LoginView submitLogin={_that.props.submitLogin} />
      return null
    }
  }

}
function mapStateToProps(state,ownProps){

  return {
    isLoggedIn : mori.toJs(mori.get(state.reducers,'isLoggedIn')),
    currentURL:ownProps.location.pathname
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EnsureLoggedIn)
