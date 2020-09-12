import React ,{Component}from 'react';
import SwipeableViews from 'react-swipeable-views';
import Menu from './MenuPage';
import News from './NewsPage';
import Setting from './Settings';
class Main extends Component{
  constructor(props){
    super(props);
    this.handleChangeIndex=this.handleChangeIndex.bind(this);
    this.state={
      index:0
    }
  }
  handleChangeIndex = index => {
    this.setState({
      index:index
    });
  };
  render(){
    const {index}=this.state;
    return(

     <SwipeableViews enableMouseEvents axis='x-reverse' containerStyle={{height:'667px',flexDirection:'row-reverse'}} index={index} onChangeIndex={this.handleChangeIndex}>
        <News index={this.handleChangeIndex}/>
        <Menu index={this.handleChangeIndex}/> 
      
      </SwipeableViews>
        
    )
}
}

export default Main;