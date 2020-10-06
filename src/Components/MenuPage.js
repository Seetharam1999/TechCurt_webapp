import React, { Component ,useState} from 'react';
import Setting from './Settings';
import '../menu.css'
import { Link } from 'react-router-dom';
import {Button,Collapse} from 'reactstrap'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


import {Switch,Router,Route} from 'react-router-dom';

class Menu extends Component{
    constructor(props){
      super(props);
      this.state=[
        {
          id:0,
          title:"All News",
          content:[
            "All","5G","CyberSecurity"
          ]
        },
        {
          id:1,
          title:"All News",
          content:[
            "All","5G","CyberSecurity"
          ]
        },
        {
          id:2,
          title:"All News",
          content:[
            "All","5G","CyberSecurity"
          ]
        },
      ]
    } 
    toggle=()=>{
      this.setState({
        isOpen:!this.state.isOpen
      })
    }
  Change=(e)=>{
   
    this.props.index(0);
   }


  render(){
   const items=this.state
    const menu=()=>{
      return(
        <div className="container-fulid" style={{width:'90vw'}}>
        <div id="stableheader">     
        
      <i><h3 className="headtext">Explore</h3> 
      
      <i className="fa fa-arrow-right" onClick={this.Change.bind(this)}> </i></i>
      
       </div>
       
       
      
        <div className="menucontent">
       
      
        <div className="settingsbtn">
         <img className="settingsimg" src="/assets/images/menu.png" alt="setting"></img>
      
         <Link to='/setting'><a style={{textDecoration:'none'}} ><p className="settingprofile">Settings / Profile</p>
         </a></Link>
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
      <Accordion allowZeroExpanded >
            <AccordionItem >
                <AccordionItemHeading className="accordion one" >
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    All Tech News
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion two">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    Tablets
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion three">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    Cameras
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion four">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    Cars
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion five">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    TV
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion six">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    Application
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            </div>
            <div className="column">
              <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading className="accordion seven">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                 Mobile Phones
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion eight">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                    Smart Homes
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion nine">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
                Gaming
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion ten">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
               Speakers
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion eleven">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
              Drones
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion twelve">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
              Appliances
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      </div>
      <div className="column">
        <Accordion allowZeroExpanded>
        <AccordionItem>
                <AccordionItemHeading className="accordion thirteen">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
            Laptops
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
          
            <AccordionItem>
                <AccordionItemHeading className="accordion fifteen">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
            Desktop
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion sixteen">
                      <AccordionItemButton style={{paddingTop:"50px"}}>
             Streaming
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="accordion seventeen">
                <AccordionItemButton style={{paddingTop:"50px"}}>
                    Wearables
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
               <AccordionItem>
                <AccordionItemHeading className="accordion seventeen">
                    <AccordionItemButton style={{paddingTop:"50px"}}>
                    HeadPhone
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
       
      </div>
        
        </div>
        
       </div>
        
      
      </div> 
      
      )
    }
    return(
    <Switch>
     
      <Route exact path='/menu' component={menu}/>
      <Route exact path='/setting' component={()=><Setting
       auth={this.props.auth} 
       loginUser={this.props.loginUser} 
       logoutUser={this.props.logoutUser}
       googleLogin={this.props.googleLogin}
      />}/>
    </Switch>
       

      
    )
}
}
export default Menu;