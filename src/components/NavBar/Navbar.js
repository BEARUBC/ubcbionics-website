import './Navbar.css';
import {useState} from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


export const Navbar = () => {
    const[open, setOpen] = useState(false);

    return(
    <div class="nav">
        <div class="logo">
            <h4 ><a href="/">UBC BIONICS</a></h4>
        </div>
        
        

        <Navigation />
        <MobileNavigation />
    </div>
    )
    

}
