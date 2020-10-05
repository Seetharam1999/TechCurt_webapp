import React, { Component } from 'react';
import Switch from 'react-input-switch';
import {Link} from 'react-router-dom';


import { Col, Container, Row ,Modal,ModalBody,Input} from 'reactstrap';
import '../Settings.css';
class Setting extends Component {

    constructor(props){
        super(props);
        this.toggleModel=this.toggleModel.bind(this);
        this.isHandleLogin=this.isHandleLogin.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.state={
            isModel:false,
            value: 0 ,
        
        }
    }
    toggleModel(){
      this.setState({
          isModel:!this.state.isModel,
          isSigninModal:false
      });
 }
 isHandleLogin(e){
     this.toggleModel();
     this.props.loginUser({username: this.username.value, password: this.password.value});
     e.preventDefault();
 }
 handleGoogleLogin(event) {
  console.log('google login clicked')
  this.props.googleLogin();
  event.preventDefault();
}

handleLogout() {
  this.props.logoutUser();
}
    render(){
    return(
      
      <Container>
        
        <Row>
          <Col xs={{size:12}} sm={{size:12}} md={{ size: 8, offset: 1 }} lg={{size:6,offset:2}}>
          <Link to='/menu'><a  ><i className="fa fa-arrow-left" href='/menu'style={{fontSize:"24px",marginTop:'9px'}}></i></a></Link>
          </Col>
        </Row>
        { !this.props.auth.isAuthenticated ?
         
          <Row>
              <Col  xs={{size:12,offset:4}} sm={{size:12,offset:6}} md={{ size: 8, offset: 3 }} lg={{size:6,offset:6}}>
                     <p > Hey Pal</p>
                <img src="/assets/images/avatar3.png"  alt="avatar" className="avatar"/>
              </Col>
          </Row>
         :
         <Row>
              <Col  xs={{size:12,offset:4}} sm={{size:12,offset:6}} md={{ size: 8, offset: 3 }} lg={{size:6,offset:6}}>
                     <p >  {this.props.auth.user.displayName}</p>
                <img src={this.props.auth.user.photoURL}  alt="avatar" className="avatar"/>
              </Col>
          </Row>
         
         
        } <Row className="login">
              <Col  xs={{size:12,offset:4}} sm={{size:12,offset:6}} md={{ size: 8, offset: 3 }} lg={{size:6,offset:6}}>
            
                  <p className="signup">
 						      	To save your likes & Bookmarks
      				  	</p>
              </Col>
          </Row>
         <Row >

         <Col xs={{size:12,offset:4}} sm={{size:12,offset:6}} md={{ size: 8, offset: 3 }} lg={{size:6,offset:6}} >
               <div className="social">
                <a className="btn" ><span className="fa fa-google fa-lg" ></span></a>
            <a className="btn"><span className="fa fa-facebook fa-lg"></span></a>
                            
            <a className="btn btn-rounded" onClick={this.handleGoogleLogin} ><span className="fa fa-twitter fa-lg"></span></a>
            <i className="btn btn-rounded" onClick={this.toggleModel}><span className="fa fa-envelope fa-lg"></span></i>
                </div>

         </Col>
         </Row>
         <hr className="new2"/>
         <Row >
         
                <Col xs={{size:5,offset:1}} sm={{ size: 5,offset:2 }} md={{size:5,offset:1}} lg={{size:4,offset:3}}><p>Notification</p></Col>
              <Col xs={{size:4,offset:2}} sm={{ size: 4, offset:1}}md={{size:5,offset:1}} lg={{size:4}} className="switch">
                <Switch value={this.state.value}
                    onChange={value => this.setState({ value })}/>
                </Col>
         </Row>
         <Row >
         <Col xs={{size:5,offset:1}} sm={{ size: 5,offset:2, }} md={{size:5,offset:2}} lg={{size:4,offset:3}}><p>Languages</p></Col>
         <Col xs={{size:5,offset:1}} sm={{ size: 4, offset:1}}md={{size:5,offset:2}} lg="auto"className="switch">
          <select>
            <option>
              English
            </option>
            <option>
              French
            </option>
            <option>
              Hindi
            </option>
          </select>
        
         </Col>
         </Row>
         <hr className="new2"/>
         <Row>
           <Col sm={{size:12,offset:2}} xs={{size:12,offset:1}} lg={{size:4,offset:3}}>
           <a href="mailto:nafeelabanu.20it@licet.ac.in">Give us feedback</a>
           </Col>
           <Col sm={{size:12,offset:2}} xs={{size:12,offset:1}} lg={{size:4,offset:3}}>
           <a href="#" >Terms & Conditions</a>
           </Col>
           <Col sm={{size:12,offset:2}} xs={{size:12,offset:1}} lg={{size:4,offset:3}}>
           <a href="#" >Privacy</a>
           </Col>
           <Modal isOpen={this.state.isModel} toggle={this.toggleModel}style={{width:'95%'}}>
                  
                    <ModalBody toggle={this.toggleModel}>
              <div class="wrap-login100 p-l-17 p-r-44 p-t-65 p-b-54">
							<form class="login100-form validate-form">
								<span class="login100-form-title p-b-49">
									Login
								</span>
			
								{/* <div class="wrap-input100 validate-input m-b-23" data-validate = "Name is required">
									<span class="label-input100">Name</span>
                  <Input type="text" className="input100"
                  style={{border:'none'}}
                                innerRef={(input)=>this.username=input}
                                id="username" name="username" placeholder="Enter your Name"/> 
									<span class="focus-input100" data-symbol="&#xf206;"></span>
								</div> */}
								
								<div class="wrap-input100 validate-input m-b-23" data-validate = "Email is reauired">
									<span class="label-input100">Email</span>
                  <Input type="text" className="input100"
                  style={{border:'none'}}
                                innerRef={(input)=>this.username=input}
                                id="email" name="email" placeholder="Enter your Email ID"/>    
								
									<span class="focus-input100" data-symbol="&#xf206;"></span>
								</div>
								
								 <div class="wrap-input100 validate-input" data-validate="Password is required"> 
								 <span class="label-input100">Password</span>
                 <Input type="password" className="input100"
                  style={{border:'none'}}
                                innerRef={(input)=>this.password=input}
                                id="password" name="password" placeholder="Type your password"/> 
									
									 <span class="focus-input100" data-symbol="&#xf190;"></span> 
							 </div> 
								
								<div class="text-right p-t-8 p-b-31">
									<a href="#">
									</a>
								</div>
								
								<div class="container-login100-form-btn">
									<div class="wrap-login100-form-btn">
										<div class="login100-form-bgbtn"></div>
										<button class="login100-form-btn" id="signinbtn" type="button" onClick={this.isHandleLogin} >
											Login
										</button>
									</div>
								</div>
			
								
							</form>
					
								
					</div>
                    </ModalBody>
                </Modal>
         </Row>
        
      </Container>
//       <div className="container">
//             <div id="heading">     
// <a href="main.html" ><i className="fa fa-arrow-left" style={{fontSize:"24px",marginTop:'-10px'}}></i></a>

//  </div>
 
// <div className="wrapper">
// <img src="/assets/images/avatar3.png" className="avatar" alt="avatar" id="profile-pic"/>
  
//   <div className="heading" ><b id="user_name">Hey Pal!</b>
						
// 							<button className="loginbtn" id="loginbtn">
// 								Login / Signup
// 							</button>
// 				</div>

// 					<div className="txt1 signup">
// 						<span style={{fontSize:'14px'}}>
// 							To save your likes & Bookmarks
// 						</span>
// 					</div>
// 					<div className="socialbutton" id="socialbutton">
        //     <a className="btn" ><span className="fa fa-google fa-lg" ></span></a>
        //     <a className="btn"><span className="fa fa-facebook fa-lg"></span></a>
                            
        //     <a className="btn "  ><span className="fa fa-twitter fa-lg"></span></a>
        // <a href="./otp.html" ><span className="fa fa-phone fa-lg"></span></a>
				
// 					</div>
// <hr className="new1"/>

					
//   <div className="d-flex justify-content-between">
//       <p style={{marginLeft:30}}>Notification</p>
	
    // <Switch value={this.state.value}
    //     onChange={value => this.setState({ value })}/>
// 	</div>

// 	<div className="d-flex justify-content-between">
//         <div ><p  style={{marginLeft:30}}>Languages</p></div>
//         <div><select>
//                 <option>English</option>
//             </select></div>

// 	</div>
// {/* <hr className="new2"/>
// <div className="feedback"><a href="mailto:nafeelabanu.20it@licet.ac.in">Give us feedback</a></div>
// <div className="terms"><a href="#" >Terms & Conditions</a></div>
// <div className="privacy"><a href="#" >Privacy</a></div>
// <hr className="new3"/> */}

//      </div>
//      </div>
   )
}
}
export default Setting;