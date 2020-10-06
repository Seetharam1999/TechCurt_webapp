import React ,{Component}from 'react';

import Menu from './MenuPage';
import News from './NewsPage';
import { connect } from 'react-redux';
import{logoutUser,loginUser,googleLogin,facebookLogin,twitterLogin} from '../redux/ActionCreater'
import SwipeableRoutes from "react-swipeable-routes";
import {Switch,Route,withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => ({
  
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  
  googleLogin: () => dispatch(googleLogin()),
  facebookLogin:()=>dispatch(facebookLogin()),
  twitterLogin:()=>dispatch(twitterLogin()),
});

class Main extends Component{
  constructor(props){
    super(props);
    this.handleChangeIndex=this.handleChangeIndex.bind(this);
    this.state={
      index:0
    }
  }

  componentDidMount() {

   
  }
  componentWillUnmount() {
    this.props.logoutUser();
  }
  handleChangeIndex = index => {
    this.setState({
      index:index
    });
  };
  render(){
    const {index}=this.state;
    return(
        <Switch>
            <SwipeableRoutes enableMouseEvents replace axis="x-reverse" containerStyle={{height:'667px',flexDirection:'row-reverse'}} index={index} onChangeIndex={this.handleChangeIndex}>
             <Route exact path='/home' component={ ()=> <News index={this.handleChangeIndex}/>}/>
            <Route exact path='/menu' component={()=><Menu index={this.handleChangeIndex}
               auth={this.props.auth} 
               loginUser={this.props.loginUser} 
               logoutUser={this.props.logoutUser}
               googleLogin={this.props.googleLogin}
              facebookLogin={this.props.facebookLogin}
              twitterLogin={this.props.twitterLogin}
            />}/>
            
         </SwipeableRoutes>
        
        </Switch>
  

      // <SwipeableViews enableMouseEvents axis='x-reverse' containerStyle={{height:'667px',flexDirection:'row-reverse'}} index={index} onChangeIndex={this.handleChangeIndex}>

      // <Setting/>
      // </SwipeableViews>
       
    )
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));