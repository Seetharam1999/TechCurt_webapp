import React, { Component } from 'react';
import Switch from 'react-input-switch';
import '../Settings.css';
class Setting extends Component {
    constructor(props){
        super(props);
       
        this.state={
    
            value: 0 
        }
    }
    render(){
    return(
      <div className="container">
            <div id="heading">     
<a href="main.html" ><i className="fa fa-arrow-left" style={{fontSize:"24px",marginTop:'-10px'}}></i></a>

 </div>
 
<div className="wrapper">
<img src="/assets/images/avatar3.png" className="avatar" alt="avatar" id="profile-pic"/>
  
  <div className="heading" ><b id="user_name">Hey Pal!</b>
						
							<button className="loginbtn" id="loginbtn">
								Login / Signup
							</button>
				</div>

					<div className="txt1 signup">
						<span style={{fontSize:'14px'}}>
							To save your likes & Bookmarks
						</span>
					</div>
					<div className="socialbutton" id="socialbutton">
            <a className="btn" ><span className="fa fa-google fa-lg" ></span></a>
            <a className="btn"><span className="fa fa-facebook fa-lg"></span></a>
                            
            <a className="btn "  ><span className="fa fa-twitter fa-lg"></span></a>
        <a href="./otp.html" ><span className="fa fa-phone fa-lg"></span></a>
				
					</div>
<hr className="new1"/>

					
  <div className="d-flex justify-content-between">
      <p style={{marginLeft:30}}>Notification</p>
	
    <Switch value={this.state.value}
        onChange={value => this.setState({ value })}/>
	</div>

	<div className="d-flex justify-content-between">
        <div ><p  style={{marginLeft:30}}>Languages</p></div>
        <div><select>
                <option>English</option>
            </select></div>

	</div>
<hr className="new2"/>
<div className="feedback"><a href="mailto:nafeelabanu.20it@licet.ac.in">Give us feedback</a></div>
<div className="terms"><a href="#" >Terms & Conditions</a></div>
<div className="privacy"><a href="#" >Privacy</a></div>
<hr className="new3"/>

     </div>
     </div>
   )
}
}
export default Setting;