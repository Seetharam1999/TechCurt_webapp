import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';


class News extends Component {

  render(){
  return (
    
    <div className="container-fluid">
        <Header/>
        <div className="review" >  <img src="/assets/images/news1.jpg" width="100%" height="100%" alt="news"/></div>
        <div className="news">
           
   <p className="team">Curt by team - Today</p>

<h3>OxygenOS 10.5.10 rolling out now for EU OnePlus Pro</h3>
<p>OxygenOS 10.5.10 is also rolling out for the OnePlus in a few flavors. For those in India, it will arrive as OxygenOS 10.5.9, in EU it's 10.5.8. There are a few minor alterations depending on the region too.
OxygenOS 10.5.10 is also rolling out for the OnePlus in a few flavors. For those in India, it will arrive as OxygenOS 10.5.9, in EU it's 10.5.8. There are a few minor alterations depending on the region too.
OxygenOS 10.5.10 is also rolling out for the OnePlus in a few flavors. For those in India, it will arrive as OxygenOS 10.5.9, in EU it's 10.5.8. There are a few minor alterations depending on the region too.</p>

 <a href="#" className="swipeleft">Tap/Swipe left to read more at Cnet.com</a> 
  </div>
  <div className="bottomlink">
	
	</div>
	<div className="bottomlink_overlay" >
	<div className="bottomheading" ><b>OnePlus 8 Pro Review</b></div>
		
	</div>

        <Footer menu={(index)=>{this.props.index(index)}} />
    </div>
   
    );
}

}
export default News;
