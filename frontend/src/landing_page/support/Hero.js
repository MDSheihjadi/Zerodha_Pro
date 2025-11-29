import React from "react";
import "../../index.css";
function Hero() {
return (
    <section className="container-fluid" id="supportHero">
        <div className="row p-3 mt-3 mb-3" id="supportWrapper">
            <h3 style={{textAlign:"left"}}>Support Portal</h3>
        </div>
        <div className="row p-3 mt3 mb-3 mx-3">
            <div className="col-6 p-4" >
                <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                <input type="text" placeholder="Eg.how do i activate F&O" /><br/>
                <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Kite user manual</a>
            </div>
            <div className="col-6 p-4 mt-5 mb-5">
                <div className="d-flex justify-content-end mb-3">
                    <a href="/" style={{ textDecoration: "none", color: "black" }}>Track tickets</a>
                </div>
                <h1 className="fs-4">Featured</h1>
                <ol>
                    <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                    <li><a href="">Latest Intraday leverages - MIS & cop</a></li>
                </ol>
            </div>
        </div>
    </section>
);
}

export default Hero;

//  import React from 'react';
// import '../../index.css'; // Correct path to index.css in src folder

// function Hero() {
//     return (
//         <section className="container-fluid" id="supportHero" style={{backgroundColor: '#387ED1', color: 'white', padding: '50px 0'}}>
//             <div className="row p-5 mt-5 mb-5" id="supportWrapper">
//                 <div className="col-12 d-flex justify-content-between align-items-center mb-5">
//                     <h3>Support Portal</h3>
//                     <a href="/" style={{textDecoration: "underline", color: "white"}}>Track Tickets</a>
//                 </div>
//             </div>

//             <div className="row p-5 mt-5 mb-5">
//                 <div className="col-md-6 p-5">
//                     <h2>Search for an answer or browse help topics to create a ticket</h2>
//                     <input
//                         type="text"
//                         placeholder="Eg. how do i activate F&O"
//                         style={{width: '100%', padding: '10px', marginTop: '20px', marginBottom: '20px', border: 'none', borderRadius: '4px'}}
//                     />
//                     <div style={{marginTop: '15px'}}>
//                         <a href="/" style={{display: 'block', color: 'white', textDecoration: 'underline', marginBottom: '10px'}}>Track account opening</a>
//                         <a href="/" style={{display: 'block', color: 'white', textDecoration: 'underline', marginBottom: '10px'}}>Track segment activation</a>
//                         <a href="/" style={{display: 'block', color: 'white', textDecoration: 'underline', marginBottom: '10px'}}>Intraday margins</a>
//                         <a href="/" style={{display: 'block', color: 'white', textDecoration: 'underline'}}>Kite user manual</a>
//                     </div>
//                 </div>

//                 <div className="col-md-6 p-5">
//                     <h2>Featured</h2>
//                     <ol style={{color: 'white', marginTop: '20px'}}>
//                         <li><a href="/" style={{color: 'white', textDecoration: 'underline'}}>Current Takeovers and Delisting - January 2024</a></li>
//                         <li><a href="/" style={{color: 'white', textDecoration: 'underline'}}>Latest Intraday leverages - MIS & CO</a></li>
//                     </ol>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Hero;
