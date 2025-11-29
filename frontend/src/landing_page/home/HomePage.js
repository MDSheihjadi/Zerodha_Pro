import React from 'react';
import HeroSection from './HeroSection';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../../OpenAccount';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Pricinghome from './Pricinghome';


//(../)to go back one directory

function HomePage () {
    return( 
        <> 
 
            {/* <Navbar /> */}
            <HeroSection />
            <Awards />
            <Stats />
            <Pricinghome />
           <Education />
           <OpenAccount />
           {/* <Footer /> */}
             
        </>
        
        
     );
}

export default HomePage;