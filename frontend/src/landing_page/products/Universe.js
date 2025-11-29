import React from 'react';

function Universe() {
    return ( 
    <div className="container border-bottom mb-3">
      <div className="row align-items-center text-center mt-5 p-5 ">
      <h1>The Zerodha Universe</h1>
      <p>Extend your trading and investment experience even further with our partner platforms.</p>
    <div className="col-4 p-4 mt-5">
    <img src="images/smallcaseLogo.png"  />
    <p className='text-small text-muted'>Thematic investment platform</p>
    </div> 
    <div className="col-4 p-4 mt-5">
          <img src="images/streakLogo.png" style={{width: '100px', height: '100px'}} />
    <p className='text-small text-muted'>Algo & stratergy platform</p>
    </div>
    <div className="col-4 p-4 mt-5">
          <img src="images/sensibullLogo.svg" style={{width: '100px', height: '100px'}} />
    <p className='text-small text-muted'>Options trading platform</p>
    </div>
    <div className="col-4 p-4 mt-5">
    <img src="images\zerodhaFundhouse.png" style={{width: '100px', height: '100px'}} />
    <p className='text-small text-muted'>Asset Managment</p>
    </div> 
    <div className="col-4 p-4 mt-5">
          <img src="images\goldenpiLogo.png" style={{width: '100px', height: '100px'}} />
    <p className='text-small text-muted'>Bonds trading platform</p>
    </div>
    <div className="col-4 p-4 mt-5">
          <img src="images\dittoLogo.png" style={{width: '100px', height: '100px'}} />
    <p className='text-small text-muted'>Insurance</p>
    </div>
    <button className='p-2 btn btn-primary fs-5  mt-4 mb-5' style={{width:"20%", margin:"0 auto "}}>Signup Now</button>
    </div>
      
 </div>   
     );
}

export default Universe;