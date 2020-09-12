import React from 'react';

function Header() {
  return (
  
    <div className="d-flex justify-content-between header">
      <i className="fa fa-light fa-lg"><br/><a>Light</a> </i>
      <h5 style={{marginTop:20}}>Top News</h5>
       <i><a style={{textDecoration:"none",color:'grey'}}><i ><img alt="Filter" src="/assets/images/filter1.png" width="30px" height="30px"></img></i>
       <br/>
        <span >Filter</span></a></i>
    </div>
    );
}

export default Header;
