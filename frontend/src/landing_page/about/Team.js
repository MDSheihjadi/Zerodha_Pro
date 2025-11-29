import React from 'react';

function Team() {
    return ( 
         <div className='container mx-auto px-4 py-20 text-center'>
        <div className='row p-5 mb-5 border-top'> 
            <h1 className='text-center mt-5 '>
                People
            </h1>
        </div>
        <div className='row p-5 mt-5  text-muted fs-6'style={{lineHeight: '2rem'}}>
            <div className='col-6 p-5 text-center'>
            <img src='images/nithinKamath.jpg' style={{borderRadius:"100%",width:"60%"}} alt='Arman' />
            <h4 className='mt-4'>Arman </h4>
            <h6>Founder,CEO</h6>
            
            </div>
            <div className='col-6 '>
            <div className="col-6 ">
            <p>Arman bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
           Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and Pthe Market Data Advisory Committee (MDAC).</p>
            <p> Playing basketball is his zen.</p>
            <p>Connect on <a href=''>Homepage</a> / <a href="">TradingQnA</a> / <a href=''>Twitter</a></p>
           </div>
           </div>
    </div>
    </div>
     );
}

export default Team;