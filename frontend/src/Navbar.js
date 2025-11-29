// import React from 'react';
// import {Link} from 'react-router-dom';

// function Navbar () {
//     return (  
      
//         <nav className="navbar navbar-expand-lg  border-bottom" style={{backgroundColor: "#fafafaff"}}>
//     <div className="container p-2">
    
//       <form className="d-flex" role="search">
//       <Link className="navbar-brand" to="/">
//     <img src='images/logo.svg' style={{width: '27%'}} alt="logo"/></Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active" to="/about">About</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active" to="/products">Product</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active" to="/pricing">Pricing</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link active" to="/support">Support</Link>
//       </li>

    
//       </ul>
      
//     </div>
//       </form>
//     </div>
//     </nav>
       
    
//     );
// }

// export default  Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{ backgroundColor: '#fafafa' }}>
            <div className="container p-2">
                <div className="d-flex">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.svg" style={{ width: '27%' }} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/products">Product</Link> {/* changed to /products */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;