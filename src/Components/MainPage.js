import React ,{Component}from 'react';
import SwipeableViews from 'react-swipeable-views';
import Menu from './MenuPage';
import News from './NewsPage';
import { connect } from 'react-redux';
import{logoutUser,loginUser,googleLogin} from '../redux/ActionCreater'
import SwipeableRoutes from "react-swipeable-routes";
import {Switch,Router,Route,withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => ({
  
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  
  googleLogin: () => dispatch(googleLogin()),
  
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