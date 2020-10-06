import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Button} from 'reactstrap'

class News extends Component {
  constructor(props){
    super(props);
    
    this.state={
      isOpen:true
    }
  }
  
  render(){
  return (
    
    <div className="container-fluid" onClick={()=>this.setState({isOpen:!this.state.isOpen})}>
       {this.state.isOpen && <Header/> } 
        <div className="review" >  <img src="/assets/images/news1.jpg" width="100%" height="100%" alt="news"/></div>
        <div className="news">
           
   <p className="team" style={{color:'grey'}}>Curt by team - Today</p>

<h3 style={{marginTop:'10px'}}>OxygenOS 10.5.10 rolling out now for EU OnePlus Pro</h3>
<p style={{marginTop:'10px'}}>OxygenOS 10.5.10 is also rolling out for the OnePlus in a few flavors. For those in India, it will arrive as OxygenOS 10.5.9, in EU it's 10.5.8. There are a few minor alterations depending on the region too.
OxygenOS 10.5.10 is also rolling out for the OnePlus in a few flavors. For those in India, it will arrive as OxygenOS 10.5.9, in EU it's 10.5.8. There are a few minor alterations depending on the region too.
OxygenOS 10.5.10 is also rolling out for the OnePlus in a few flavors. For those in India, it will arrive as OxygenOS 10.5.9, in EU it's 10.5.8. There are a few minor alterations depending on the region too.</p>

 <a  className="swipeleft" style={{marginTop:'10px'}}>Tap/Swipe left to read more at Cnet.com</a> 
  </div>
  
      <a href="#" class="myButton">One plus 8 Pro Review</a>  
      <div className="like">
         <i className="likei"></i>
        <span className="likespan fa fa-heart">liked!</span>
      </div>
    
   

  {this.state.isOpen && <Footer menu={(index)=>{this.props.index(index)}} />  } 
    </div>
   
    );
}

}
export default News;
