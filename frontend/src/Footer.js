import React from 'react';

function Footer () {
    return ( 
       <div className='container border-top mt-5 py-5'>
        <div className='row mt-5 g-4'>
            <div className='col mb-3'>
             <img src='/images/logo.svg' style={{width:"50%"}} alt="Footer Logo" className="mb-3"/>
             <p className="mb-2">© 2010 - 2024, Not Zerodha Broking Ltd.<br/>All rights reserved.</p>
            </div>
            <div className='col mb-3'>
            <p className="fw-bold mb-2">Company</p>
            <a  href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>About</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Products</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Pricing</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Referral programme</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Careers</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Zerodha.tech</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Press & media</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Zerodha cares (CSR)</a>
             </div>
                <div className='col mb-3'>
                <p className="fw-bold mb-2">Support</p>
                <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Contact</a>
                <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Support portal</a>
                <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Z-Connect blog</a>
                <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>List of charges</a>
                <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Downloads & resources</a>
             </div> 
            <div className='col mb-3 '>
            <p className="fw-bold mb-2">Account</p>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Open an account</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>Fund transfer</a>
            <a href="" className="d-block mb-3 text-decoration-underline" style={{color: "#87CEEB"}}>60 day challenge</a>
            </div>
        </div>
    <div className='mt-5 fs-6 text-small text-muted'>
    <p className="mb-3">Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633
CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
Commodity Trading through Zerodha Commodities Pvt. Ltd.
MCX: 46025 – SEBI Registration no.: INZ000038238
Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P. Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.</p>

<p className="mb-3">For any complaints pertaining to securities broking please write to complaints@zerodha.com
, for DP related queries please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

<p className="mb-3">Procedure to file a complaint on SEBI SCORES:
Register on SCORES portal.
Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
Benefits: Online filing of complaints, Tracking of complaint status, and Speedy redressal of grievances.
</p>
<p className="mb-3">Investments in securities market are subject to market risks; read all the related documents carefully before investing.
</p>
<p className="mb-3">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange at the end of the day. Issued in the interest of investors.
KYC is one-time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary (broker, DP, mutual fund etc.), you need not undergo the same process again when you approach another intermediary."</p>

<p className="mb-3">Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Just write your bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account.</p>

<p className="mb-3">Investors are requested to note that Zerodha and its employees do not provide any tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
</div>
<div className='mt-5'>  
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>NSE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>BSE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>MCX</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>Terms & conditions</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>Policies & procedures</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>Privacy policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href='' className="text-decoration-underline" style={{color: "#87CEEB"}}>Disclosure</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
    </div>
     );
}

export default Footer ;