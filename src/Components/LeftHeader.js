import React from 'react';

export const Left =(props)=>{
    return( 
            <div className=" container d-none d-xl-block leftHeader bd-sidebar">
                <div className="d-flex d-column">
                    <div >
                        <span>Login to save your likes & bookmarks </span>
                        <button className='btn btn-rounded btn-outline-default ' type='button' onClick={()=>{}}><b>Login</b></button>    
                    </div>
                    <hr className="hr3"/>
                    <div className="justify-content-between">
                            <img src='/assets/images/home.png' style={{width:'30px',height:'30px'}}/>
                            <span>Home</span>
                    </div>
                    <div className="justify-content-between">
                    <img src='/assets/images/accept.png' style={{width:'30px',height:'30px'}}/>
                            <span>Terms</span>
                        
                    </div>
                    <div className="justify-content-between">
                    <img src='/assets/images/password.png' style={{width:'30px',height:'30px'}}/>
                            <span>Privacy</span>
                        
                    </div>
                    <div className="justify-content-between">
                    <img src='/assets/images/copyright.png' style={{width:'30px',height:'30px'}}/>
                            <span>Copyright</span>
                        
                    </div>
                    <hr className="hr3"/>
                    <div className=""></div>
                        <div></div>
                </div>
            </div>    

        )
}