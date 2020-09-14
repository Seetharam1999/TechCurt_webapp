import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    change =(e)=>{
      this.props.menu(1)
      
    }
  render(){

  return (
  
    <div className="d-flex justify-content-between footer">
    <i onClick={this.change.bind(this)} style={{textAlign:'center'}}><a style={{textDecoration:'none',color:'grey'}}><img alt="Menu" src="/assets/images/menu.png" width="30" height="30"></img></a><br/>Menu</i>
    <i style={{textAlign:'center'}}><a style={{textDecoration:'none',color:'grey'}}><img alt="Menu" src="/assets/images/bookmark.png" width="30" height="30"></img><br/>Bookmark</a></i>
    <i style={{textAlign:'center'}}><a style={{textDecoration:'none',color:'grey'}} ><img alt="Menu" src="/assets/images/share.png" width="30" height="30"></img><br/>Share</a></i>
    <i style={{textAlign:'center'}}><a style={{textDecoration:'none',color:'grey'}}><img alt="Menu" src="/assets/images/refresh.png" width="30" height="30"></img><br/>Refresh</a></i>
   <i style={{textAlign:'center'}}><a style={{textDecoration:'none',color:'grey'}}><img alt="Menu" src="/assets/images/search1.png" width="30" height="30"></img><br/>Search</a></i>
</div>
    );
}
}

export default Footer;
