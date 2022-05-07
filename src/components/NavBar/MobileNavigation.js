import NavLinks from './NavLinks';
import './Navbar.css';
import { useState} from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    return( 
        <div class="MobileNavigation">
            <div class="burger" onClick={() => setOpen(!open)}>
                <div class="link1"></div>
                <div class="link2"></div>
                <div class="link3"></div>
            </div>

            {open && <NavLinks />}
        </div>
    );
}

export default MobileNavigation;