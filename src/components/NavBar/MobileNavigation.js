import NavLinks from './NavLinks';
import './Navbar.css';
import { useState} from 'react';

function MobileNavigation() {
    const[sider, setSider] = useState("nav-links");

    function navSlide() {
        if (sider === "nav-links") {
            setSider("nav-active");
        } else {
            setSider("nav-links");
        }
    }

    return( 
        <div class="MobileNavigation">
            <div class="burger" onClick={navSlide}>
                <div class="link1"></div>
                <div class="link2"></div>
                <div class="link3"></div>
            </div>

            <NavLinks fn={sider} />
        </div>
    );
}

export default MobileNavigation;