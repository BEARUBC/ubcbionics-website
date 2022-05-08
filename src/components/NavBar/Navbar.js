import './Navbar.css';
import {useState} from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


export const Navbar = () => {

    return(
    <div class="nav">
        <div class="logo">
            <a href="/">UBC BIONICS</a>
        </div>
        
        

        <Navigation />
        <MobileNavigation />
    </div>
    )
    

}

