import React, { Component } from 'react';
import Setting from './Settings';
import '../menu.css'

class Menu extends Component{
   Change=(e)=>{
   
    this.props.index(0);
   }

  render(){
    return(
        <div className="container-fulid">
	<div id="stableheader">     
  
<i><h3 className="headtext">Explore</h3> 

<i className="fa fa-arrow-right" onClick={this.Change.bind(this)}> </i></i>

 </div>
 
 

  <div className="menucontent">
 

  <div className="settingsbtn">
   <img className="settingsimg" src="/assets/images/menu.png" alt="setting"></img>
   <a style={{textDecoration:'none'}} onClick={()=>alert('prompt to Settings Pahe')}><p className="settingprofile">Settings / Profile</p></a>
  </div>
  <div className="topics">
      <h3 className="topictext"><b>Topics</b></h3>
      
    <div className="row p-2" style={{textAlign:'center'}}>
      <div className="col-4">
      <img className="covidimg" src="/assets/images/covid.png" alt="covid"></img>
      <br/>
      <span >Covid-19</span>

      </div>
      <div className="col-4">
      <img className="newimg" src="/assets/images/news.png" alt="news"></img>
        <br/>
      <span >All News</span>
  
        </div>
      <div className="col-4">

      <img className="bookmarkimg" src="/assets/images/bookmark.png" alt="bookmark"></img>
   
   <span >Bookmarks</span>

      </div>
    </div>
    </div>
  
  <div className="categories">
    <h3 className="categorytext"><b>Categories</b></h3>
<div className="column">

	<button className="accordion one">All Tech News</button>

<div className="panel">
  <ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
</div>

<button className="accordion two">Tablets</button>

<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>

<button className="accordion three">Cameras</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>

<button className="accordion four">Cars</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>

<button className="accordion five">TV</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>



	<button className="accordion six">Application</button>
<div className="panel">
  <ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>
</div>

<div className="column">

<button className="accordion seven">Mobile Phones</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul></div>

<button className="accordion eight">Smart Homes</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul></div>

<button className="accordion nine">Gaming</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>



	<button className="accordion ten">Speaker</button>
<div className="panel">
  <ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
</div>

<button className="accordion eleven">Drones</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>

<button className="accordion twelve">Appliances</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>
  </div>

<div className="column">

<button className="accordion thirteen">Laptops</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>



	<button className="accordion fourteen">Headphones</button>
<div className="panel">
  <ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
</div>

<button className="accordion fifteen">Desktop</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>

<button className="accordion sixteen">Streaming</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>

<button className="accordion seventeen">Wearables</button>
<div className="panel">
<ul style={{listStyleType:'none'}}>
  <li>All</li>
    <li>Startups</li>
  <li>5G</li>
  <li>Cybersecurity</li>
  <li>IoT</li>
  <li>Google</li>
  <li>Apple</li>
    <li>Microsoft</li>
  <li>Facebook</li>
  <li>Amazon</li>
  <li>Tesla</li>
  <li>Samsung</li>
  <li>Huawei</li>
  <li>Xiaomi</li>
  <li>Oneplus</li>


  </ul>
  </div>
  </div>


{/* <script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script> */}
		
  
  </div>
  
 </div>
  

</div> 


      
    )
}
}
export default Menu;